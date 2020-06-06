const express = require("express");
import { UserModel } from "../models/index";

class UserController {
  show(req: any, res: any) {
    console.log(req.params.id, "req");
    const id = req.params.id;
    UserModel.findById(id, (err: any, user: any) => {
      if (err) {
        return res.status(404).json({ message: "not found" });
      }
      res.json(user);
    });
  }
  create(req: any, res: any) {
    console.log(req.body, "ttt");

    const postData = {
      email: req.body.email,
      fullname: req.body.fullname,
      password: req.body.password
    };

    const oneUser = new UserModel(postData);
    oneUser.save().then((obj: any) => {
      res.json(obj);
    });
  }
  delete(req: any, res: any) {
    console.log(req.params.id, "req");
    const id = req.params.id;
    UserModel.findOneAndDelete({ _id: id }, (err: any, user: any) => {
      if (err) {
        console.log("ошибка");

        return res.status(404).json({ message: "not found" });
      }
      console.log("нет ошибки");
      res.json({
        message: `user ${user.fullname} deleted`
      });
    });
  }
}

export default UserController;
