const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const logger = require('pino')();
const Air5 = require('air5');

const tweetUtils = require('./utils/tweets');

const app = express();
const port = process.env.PORT || 5001;

const tweetTable = new Air5('tweets', {
  provider: 'json',
  path: './db',
});

const hashtagTable = new Air5('hashtags', {
  provider: 'json',
  path: './db',
});

app.use(express.urlencoded({ extended: true }));
app.use(expressLayouts);
app.use(express.static(`${__dirname}/public`));
app.set('layout', './layouts/layout');
app.set('view engine', 'ejs');

// const links = [
//   {
//     value: 'Home',
//     path: '/',
//   },
// ];

app.post('/create', (req, res) => {
  const date = new Date();

  const { tweetContent } = req.body;

  const hashtags = tweetUtils.extractHashtags(tweetContent);

  for (let i = 0; i < hashtags.length; i += 1) {
    const hashtag = hashtags[i];

    hashtagTable.get(hashtag).then((foundHashtag) => {
      if (!foundHashtag) {
        hashtagTable
          .set(hashtag, {
            count: 1,
          })
          .then(() => {
            console.log('created new hashtag');
          });
      } else {
        hashtagTable
          .set(hashtag, {
            count: foundHashtag.count + 1,
          })
          .then(() => {
            console.log('updated');
          });
      }
    });
  }

  const promise = tweetTable.set(`tweet_${date.valueOf()}`, {
    user: 'John Doe',
    content: tweetContent,
    hashtags,
  });

  promise.then(() => {
    res.redirect('/list');
  });
});

app.get('/list/:hashtag?', (req, res) => {
  let filteredTweets = [];

  tweetTable.entries().then((tweets) => {
    hashtagTable.entries().then((hashtags) => {
      if (req.params.hashtag) {
        filteredTweets = tweets.filter((tweet) =>
          tweet[1].hashtags.includes(req.params.hashtag)
        );
      } else {
        filteredTweets = tweets;
      }

      hashtags.sort((a, b) => {
        if (a[1].count >= b[1].count) {
          return -1;
        }
        return 1;
      });
      res.render('pages/tweets', {
        title: 'Tweets',
        tweets: filteredTweets,
        hashtags,
      });
    });
  });
});

app.get('/:hashtag', (req, res) => {
  const tag = req.params.hashtag;
  const dbTweetPromise = tweetTable.entries();
  const dbHashtagPromise = hashtagTable.entries();
  dbHashtagPromise.then((hashtags) => {
    dbTweetPromise.then((tweets) => {
      const result = [];
      for (let i = 0; i < tweets.length; i += 1) {
        const tweet = tweets[i][1];
        for (let j = 0; j < tweet.hashtags.length; j += 1) {
          const hashtag = tweet.hashtags[j];
          if (hashtag === tag) {
            result.push(tweets[i]);
          }
        }
      }
      res.render('pages/tweets', {
        title: 'Tweets',
        tweets: result,
        hashtags,
      });
    });
  });
});

// Special config and routes for development mode
if (app.get('env') === 'development') {
  // eslint-disable-next-line global-require
  require('./environments/development')(app, logger);
}

app.get('/', (req, res) => {
  res.render('pages/home', {
    title: 'Home',
  });
});

app.listen(port, () => {
  logger.info(`Server listening on port ${port}...`);
  logger.info(`Running in env: ${app.get('env')}`);
});
