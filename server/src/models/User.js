import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  email: {type: String, unique:true},
  username: {type: String, unique:true},
  password: {type: String},
  score: {type: Number, default: 0},
});

export default mongoose.model('User', userSchema);