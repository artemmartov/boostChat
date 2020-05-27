import React from "react";
import { Time, ReadedIcon, Avatar } from "../index";
import classNames from "classnames";
import format from "date-fns/format";
import isToday from "date-fns/isToday/index.js";
import { generateAvatar } from "../../utils/helpers/index";

import "./DialogItem.scss";

const getMessageTime = created_at => {
  if (isToday(created_at)) {
    return format(created_at, "HH:mm");
  } else {
    return format(created_at, "dd:MM:yyyy");
  }
};

const DialogItem = ({ user, unReaded, isMe, created_at, text }) => {
  return (
    <div
      className={classNames("dialogs__item", {
        "dialogs__item-online": user.isOnline
      })}
    >
      <div className="dialogs__item-avatar">
        {/* <img src={user.avatar} alt={`${user.fullname} avatar`} /> */}
        <Avatar user={user} />
      </div>
      <div className="dialogs__item-info">
        <div className="dialogs__item-info-top">
          <b>Кизару Кизарович</b>
          <span>
            {/* <Time date={new Date(2020, 4, 20, 15, 3, 43)} /> */}
            {/* <Time date={message.created_at} /> */}
            {getMessageTime(created_at)}
          </span>
        </div>
        <div className="dialogs__item-info-bottom">
          <p>{text}</p>
          {unReaded > 0 ? (
            <div className="dialogs__item-info-bottom-count">{unReaded}</div>
          ) : (
            isMe && <ReadedIcon className="" isMe={true} isReaded={false} />
          )}
        </div>
      </div>
    </div>
  );
};

export default DialogItem;
