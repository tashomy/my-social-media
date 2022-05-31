import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  id: String,
  email: String,
  name: String,
});

const User = mongoose.model("User", userSchema);

export default User;
