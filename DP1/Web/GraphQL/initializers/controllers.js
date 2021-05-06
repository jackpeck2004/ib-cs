const glob = require("glob");
const expressInitializer = require("./express");
const controllerFiles = glob.sync("../app/controllers/*.js");

const init = async () => {
  const app = await expressInitializer.initPromise;
  controllerFiles.forEach((controllerFile) => {
    const controller = require(controllerFiles);
    controller(app);
  });
};

module.exports = {
  initPromise: init(),
};
