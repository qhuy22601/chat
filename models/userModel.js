const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

  username: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique: true,
  },
  firstName:{
    type:String,
    // required: true,
    min: 3,
    max: 20,
  },
  lastName:{
    type:String,
    // required: true,
    min: 3,
    max: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    max: 50,
  },
  password: {
    type: String,
    required: true,
    min: 8,
  },
  isAvatarImageSet: {
    type: Boolean,
    default: true,
  },
  avatarImage: {
    type: String,
    default: "",
  },
  avata:{
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("Users", userSchema);
