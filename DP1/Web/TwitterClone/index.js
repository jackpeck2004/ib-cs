const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const logger = require('pino')();
const Air5 = require('air5');

const tweetUtils = require('./utils/tweets');

const app = express();
const port = process.env.PORT || 5001;

const database = new Air5('tweets', {
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

  const promise = database.set(`tweet_${date.valueOf()}`, {
    user: 'John Doe',
    content: tweetContent,
  });

  promise.then(() => {
    res.redirect('/list');
  });
});

app.get('/list', (req, res) => {
  database.entries().then((tweets) => {
    res.render('pages/tweets', {
      title: 'Tweets',
      tweets,
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
