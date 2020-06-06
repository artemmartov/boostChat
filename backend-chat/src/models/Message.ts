import mongoose, { Document, Schema } from "mongoose";

export interface IMessage extends Document {
  text: { type: string; require: boolean };
  unread: {
    type: boolean;
    default: boolean;
  };
  dialog: {
    type: Schema.Types.ObjectId;
    ref: string;
    require: true;
  };
}

const MessageSchema = new Schema(
  {
    text: { type: String, require: Boolean },
    unread: { type: Boolean, default: false },
	dialog: { type: Schema.Types.ObjectId, ref: "Dialog", require: true },
	user: { type: Schema.Types.ObjectId, ref: "User", require: true },
  },
  {
    timestamps: true
  }
);

const MessageModel = mongoose.model<IMessage>("Message", MessageSchema);

export default MessageModel;
