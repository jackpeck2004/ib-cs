const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const logger = require('pino')();
const Air5 = require('air5');

const app = express();
const port = process.env.PORT || 5001;

const database = new Air5('tweets', {
  provider: 'json',
  path: './db',
});

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
  const promise = database.set(`tweet_${Math.random()}`, {
    user: 'John Doe',
    content: `Tweet Content is ${Math.random()} <- this number was created randomly`,
  });

  promise.then(() => {
    res.send('Ok!');
  });
});

// app.get('/list', (req, res) => {
//   const promise = database.values();
//   promise.then((tweets) => {
//     res.render('pages/tweets', {
//       title: 'Feed',
//       tweets,
//     });
//   });
// });

app.get('/list', (req, res) => {
  database.entries().then((tweets) => {
    res.send(tweets);
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
