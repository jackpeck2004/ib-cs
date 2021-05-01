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

app.get('/', (req, res) => {
  res.render('pages/home', {
    title: 'Home',
  });
});

if (process.env.NODE_ENV === 'development') {
  logger.info('Running in development mode');
  app.get('/:route', (req, res) => {
    res.render(`pages/${req.params.route}`, {
      title: req.params.route,
    });
  });
}

app.listen(port, () => logger.info(`Server listening on port ${port}...`));
