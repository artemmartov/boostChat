import React from "react";
import checked from "../../assets/img/checked.svg";
import sended from "../../assets/img/sended.png";

import "./ReadedIcon.scss";

const ReadedIcon = ({ isMe, isReaded }) =>
  isMe ? (
    isReaded ? (
      <img className="message__checked" src={checked} alt="checked" />
    ) : (
      <img className="message__checked" src={sended} alt="checked" />
    )
  ) : (
    <div></div>
  );

export default ReadedIcon;
