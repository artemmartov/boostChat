// const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const Document = mongoose.Document;
import mongoose, { Document } from 'mongoose';
const validator = require("validator");



export interface IUser extends Document {
	email: string,
	password: string,
	fullname: string,
	confirmed: boolean,
	avatar: string,
	confirm_hash: string,
	last_seen: Date;
}




const UserSchema = new Schema(
  {
    email: {
      type: String,
      require: "Email address is required",
      validate: [validator.isEmail, "invalid email"],
      index: { unique: true }
    },
    avatar: String,
    fullname: { type: String, required: true },
    password: { type: String, required: true },
    confirmed: { type: Boolean, default: false },
    confirmed_hash: String,
    last_seen: Date
  },
  {
    timestamps: true
  }
);

const UserModel = mongoose.model<IUser>("User", UserSchema);

export default UserModel;
