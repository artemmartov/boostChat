import React from "react";
import { Time, ReadedIcon } from "../index";
import classNames from "classnames";

import "./DialogItem.scss";

const getAvatar = avatar => {
  if (avatar) {
    return <img src={avatar} />;
  } else {
    console.log("make avatar");
  }
};

const DialogItem = ({ user, message, unReaded }) => {
  return (
    <div
      className={classNames("dialogs__item", {
        "dialogs__item-online": user.isOnline
      })}
    >
      <div className="dialogs__item-avatar">
        {/* <img src={user.avatar} alt={`${user.fullname} avatar`} /> */}
        {getAvatar(
          "https://steamuserimages-a.akamaihd.net/ugc/877502531188425463/6A76A26E96A2EB64C1BF9FD733BD051525C41FB6/"
        )}
      </div>
      <div className="dialogs__item-info">
        <div className="dialogs__item-info-top">
          <b>Кизару Кизарович</b>
          <span>
            {/* <Time date={new Date(2020, 4, 20, 15, 3, 43)} /> */}
            13:03
          </span>
        </div>
        <div className="dialogs__item-info-bottom">
          <p>
            ДЕЛАЮ ВСЕ ЧТО ХОЧУ ДЕЛАЮ ВСЕ ЧТО ХОЧУ ДЕЛАЮ ВСЕ ЧТО ХОЧУ ДЕЛАЮ ВСЕ
            ЧТО ХОЧУ ДЕЛАЮ ВСЕ ЧТО ХОЧУ ДЕЛАЮ ВСЕ ЧТО ХОЧУ ДЕЛАЮ ВСЕ ЧТО ХОЧУ
            ДЕЛАЮ ВСЕ ЧТО ХОЧУ ДЕЛАЮ ВСЕ ЧТО ХОЧУ ДЕЛАЮ ВСЕ ЧТО ХОЧУ ДЕЛАЮ ВСЕ
            ЧТО ХОЧУ ДЕЛАЮ ВСЕ ЧТО ХОЧУ ДЕЛАЮ ВСЕ ЧТО ХОЧУ ДЕЛАЮ ВСЕ ЧТО ХОЧУ{" "}
          </p>

          {unReaded > 0 ? ( 
            <div className="dialogs__item-info-bottom-count">{unReaded}</div>
          ) : (
            <ReadedIcon className="" isMe={true} isReaded={false} />
          )}
        </div>
      </div>
    </div>
  );
};

export default DialogItem;
