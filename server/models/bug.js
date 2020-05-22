const mongoose = require("mongoose");

const BugSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter a bug title!"],
      minlength: [2, "Bug title must be at least 2 characters!"],
    },
    person: {
      type: String,
      required: [true, "Person name is required!"],
    },
    description: {
      type: String,
      required: [true, "Please enter description"],
      minlength: [5, "Description must be at least 5 characters!"],
    },
  },
  { timestamps: true }
);
mongoose.model("Bug", BugSchema);
