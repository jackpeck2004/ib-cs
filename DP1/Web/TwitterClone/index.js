const express = require('express');
const logger = require('pino')();

const app = express();
const port = process.env.PORT || 5000;

app.set('view engine', 'ejs');

app.get('/:name', (req, res) => {
  res.render('pages/home', req.params);
});

app.listen(port, () => logger.info(`Server listening on port ${port}...`));
