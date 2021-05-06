module.exports = (app) => {
  app.get("/second", (req, res) => {
    res.send("second");
  });
};
