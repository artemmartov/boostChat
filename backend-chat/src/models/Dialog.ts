// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const Document = mongoose.Document;
import mongoose, { Document, Schema } from "mongoose";
const validator = require("validator");

export interface IDialog extends Document {
  partner: {
    type: Schema.Types.ObjectId;
    ref: string;
    require: true;
  };
  author: {
    type: Schema.Types.ObjectId;
	ref: string;
	require: true;

  };
  lastMessage: {
    type: Schema.Types.ObjectId;
    ref: string;
  };
}

const DialogSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: "User" },
    partner: { type: Schema.Types.ObjectId, ref: "User" },
    lastMessage: { type: Schema.Types.ObjectId, ref: "Message" }
  },
  {
    timestamps: true
  }
);

const DialogModel = mongoose.model<IDialog>("Dialog", DialogSchema);

export default DialogModel;
