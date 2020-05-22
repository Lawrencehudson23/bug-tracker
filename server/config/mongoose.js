const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/bugs", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
require("../models/bug");
