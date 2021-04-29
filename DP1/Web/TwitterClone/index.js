const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const logger = require('pino')();

const app = express();
const port = process.env.PORT || 5000;

app.use(expressLayouts);
app.set('layout', './partials/layout');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('pages/home');
});

app.listen(port, () => logger.info(`Server listening on port ${port}...`));
