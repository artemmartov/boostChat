// const mongoose = require("mongoose");
import { UserModel } from './schemas/index'
import { UserController } from './Controllers/index'
import mongoose from "mongoose";
const bodyParser = require("body-parser");

const express = require("express");
const app = express();

mongoose.set('useCreateIndex', true);
mongoose.connect("mongodb://localhost:27017/chat", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const User = new UserController();


app.get('/user/:id', User.show)
app.delete('/user/:id', User.delete)
app.post("/user/registration", User.create);


app.listen(3000, () => {
  console.log("AAA");
});
