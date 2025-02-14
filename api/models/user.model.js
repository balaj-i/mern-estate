import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    requires: true,
    unique: true,
  },
  email: {
    type: String,
    requires: true,
    unique: true,
  },
  password: {
    type: String,
    requires: true,
  },
},{timestamps:true});

const User=mongoose.model('User',UserSchema)
export default User;
