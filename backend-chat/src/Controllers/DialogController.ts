const express = require("express");
import { DialogModel, MessageModel } from "../models/index";

class DialogController {
  index(req: any, res: any) {
    const authorId = req.params.id;

    DialogModel.find({ author: authorId })
      .populate(["author", "partner"])
      .exec((err, dialogs) => {
        if (err) {
          return res.status(404).json({ message: "Dialog is empty" });
        }
        res.json(dialogs);
      });
  }

  create(req: any, res: any) {
    const postData = {
      author: req.body.author,
      partner: req.body.partner
    };

    const dialog = new DialogModel(postData);
    dialog.save().then((dialogObj: any) => {
      const message = new MessageModel({
        text: req.body.text,
        dialog: dialogObj._id,
        user: req.body.author
      });

      message.save().then(() => {
        res.json(dialogObj);
      });
    });
  }
  delete(req: any, res: any) {
    const id = req.params.id;
    DialogModel.findOneAndDelete({ _id: id }, (err: any, user: any) => {
      if (err) {
        console.log("ошибка");

        return res.status(404).json({ message: "not found" });
      }
      console.log("нет ошибки");
      res.json({
        message: `dialog deleted`
      });
    });
  }
}

export default DialogController;
