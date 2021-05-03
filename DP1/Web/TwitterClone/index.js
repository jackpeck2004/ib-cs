const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const logger = require('pino')();

const app = express();
const port = process.env.PORT || 5000;

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
