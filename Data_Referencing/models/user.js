const mongoose = require("mongoose");
const post = require("./post");

mongoose.connect("mongodb://127.0.0.1:27017/test_data");

let userSchema = mongoose.Schema({
  username: String,
  email: String,
  age: Number,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post" ,
    },
  ],
});

module.exports = mongoose.model("user", userSchema);
