module.exports = (app) => {
  app.get("/first", (req, res) => {
    res.send("first");
  });
};
