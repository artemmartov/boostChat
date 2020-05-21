import React from "react";
import "./Message.scss";
import distanceInWordsToNow from "date-fns/formatDistanceToNow";
import ruLocale from "date-fns/locale/ru";
import classNames from "classnames";
import checked from "../../assets/img/checked.svg";
import sended from "../../assets/img/sended.png";

export default function Message({
  avatar,
  text,
  date,
  user,
  isMe,
  isReaded,
  attachments
}) {
  return (
    <div className={classNames("message", { "message--isme": isMe })}>
      <div className="message__content">
        <div className="message__avatar">
          <img src={avatar} alt={user} />
        </div>

        <div className="message__info">
          <div>
            <div className="message__bubble">
              <p className="message__text">{text}</p>
            </div>
            <div className="message__attachments">
              {attachments &&
                attachments.map(el => (
                  <div className="message__attachments-item">
                    <img src={el.url} alt="img" />
                  </div>
                ))}
            </div>
            <span className="message__date">
              {distanceInWordsToNow(date, {
                addSuffix: true,
                locale: ruLocale
              })}
            </span>
          </div>
        </div>
      </div>
      {isMe ? (
        isReaded ? (
          <img className="message__checked" src={checked} alt="checked" />
        ) : (
          <img className="message__checked" src={sended} alt="checked" />
        )
      ) : (
        <div></div>
      )}
    </div>
  );
}
