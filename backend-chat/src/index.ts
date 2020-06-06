 import { UserController, DialogController, MessageController } from './Controllers/index'
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
const Dialog = new DialogController();
const Message = new MessageController();


app.get('/user/:id', User.show);
app.delete('/user/:id', User.delete);
app.post("/user/registration", User.create);


app.get('/dialogs/:id', Dialog.index);
app.post('/dialogs', Dialog.create);
app.delete('/dialogs/:id', Dialog.delete);


app.get('/messages', Message.index);
app.post('/messages', Message.create);
app.delete('/messages/:id', Message.delete);






app.listen(3000, () => {
  console.log("AAA");
});
