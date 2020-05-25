import React from "react";
import "./Message.scss";
// import distanceInWordsToNow from "date-fns/formatDistanceToNow";
// import ruLocale from "date-fns/locale/ru";
import classNames from "classnames";
// import checked from "../../assets/img/checked.svg";
// import sended from "../../assets/img/sended.png";

// import { Time, ReadedIcon } from "../index";

export default function Message({
  avatar,
  text,
  date,
  user,
  isMe,
  isReaded,
  attachments,
  isTyping
}) {
  return (
    <div
      className={classNames("message", {
        "message--isme": isMe,
        "message--is-typing": isTyping,
        "message--image": attachments && attachments.length === 1
      })}
    >
      <div className="message__content">
        <div className="message__avatar">
          <img src={avatar} alt={user} />
        </div>
        {!isTyping ? (
          <div className="message__info">
            <div>
              <div className="message__bubble">
                {text && <p className="message__text">{text}</p>}
              </div>
              <div className="message__attachments">
                {attachments &&
                  attachments.map(el => (
                    <div className="message__attachments-item">
                      <img src={el.url} alt="img" />
                    </div>
                  ))}
              </div>
              {date && (
                <span className="message__date">
                  {/* {distanceInWordsToNow(date, {
                    addSuffix: true,
                    locale: ruLocale
				  })} */}
                  {/* <Time date={date} /> */}
                </span>
              )}
            </div>
          </div>
        ) : (
          <div class="message__typing">
            <span class="circle scaling"></span>
            <span class="circle scaling"></span>
            <span class="circle scaling"></span>
          </div>
        )}
      </div>
      {/* {isMe ? (
        isReaded ? (
          <img className="message__checked" src={checked} alt="checked" />
        ) : (
          <img className="message__checked" src={sended} alt="checked" />
        )
      ) : (
        <div></div>
	  )} */}
      {/* <ReadedIcon isMe={true} isReaded={true} /> */}
    </div>
  );
}
