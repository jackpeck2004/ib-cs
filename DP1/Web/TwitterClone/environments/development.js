// eslint-disable-next-line no-unused-vars
module.exports = (app, logger) => {
  app.get('/:route', (req, res) => {
    res.render(`pages/${req.params.route}`, {
      title: req.params.route,
    });
  });
};
