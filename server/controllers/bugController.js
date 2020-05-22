const mongoose = require("mongoose");
const Bug = mongoose.model("Bug");

module.exports = {
  index(_req, res) {
    Bug.find().then((bugs) => res.json({ bugs }));
  },
  create(req, res) {
    Bug.create(req.body)
      .then((bug) => res.json({ bug }))
      .catch((err) => res.json({ errors: err.errors }));
  },
  getById(req, res) {
    Bug.findById(req.params.id)
      .then((bug) => res.json({ bug }))
      .catch((err) => res.json({ errors: err.errors }));
  },
  delete(req, res) {
    Bug.findByIdAndDelete(req.params.id).then(() =>
      res
        .json({ status: "delete successful" })
        .catch((err) => res.json({ errors: err.errors }))
    );
  },
  update(req, res) {
    Bug.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        person: req.body.person,
        description: req.body.description,
      },
      {
        new: true,
        runValidators: true,
      }
    )
      .then((bug) => res.json({ bug }))
      .catch((err) => res.json({ errors: err.errors }));
  },
};
