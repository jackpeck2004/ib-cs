const glob = require("glob");
const httpInitializer = require("./initializers/http");

const initializersFiles = glob.sync("./initializers/*.js");

const promises = initializersFiles.map((initializersFile) => {
  const file = require(initializersFile);
  return file.initPromise;
});

Promise.all([httpInitializer.initPromise, ...promises])
  .then((results) => {
    const [httpServer] = results;
    httpServer.listen("4000", () => {
      console.log("Server Started");
    });
  })
  .catch((e) => {
    console.log(e);
  });
