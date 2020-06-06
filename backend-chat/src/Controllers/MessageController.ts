const express = require("express");
import { MessageModel } from "../models/index";

class MessageController {
  index(req: any, res: any) {
    const dialogId = req.query.dialogId;

    MessageModel.find({ dialog: dialogId })
      .populate(["dialog"])
      .exec((err, messages) => {
        if (err) {
          return res.status(404).json({ message: "Messages not found" });
        }
        res.json(messages);
      });
  }

  create(req: any, res: any) {
    const userId = "5ed945cd7858d2fd8745aa73";
    const postData = {
      text: req.body.text,
      dialog: req.body.dialogId,
      user: userId
    };

    const message = new MessageModel(postData);
    message.save().then((obj: any) => {
      res.json(obj);
    });
  }
  delete(req: any, res: any) {
    const id = req.params.id;
    MessageModel.findOneAndDelete({ _id: id }, (err: any, user: any) => {
      if (err) {
        return res.status(404).json({ message: "not found" });
      }
      res.json({
        message: `message deleted`
      });
    });
  }
}

export default MessageController;
