const bugCtl = require("../controllers/bugController");

module.exports = (app) => {
  app.get("/api/bugs/:id", bugCtl.getById);
  app.get("/api/bugs", bugCtl.index);
  app.post("/api/bugs", bugCtl.create);
  app.delete("/api/bugs/:id", bugCtl.delete);
  app.put("/api/bugs/:id", bugCtl.update);
};
