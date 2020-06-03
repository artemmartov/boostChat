import React, { useState, useRef, useEffect } from "react";
import "./Message.scss";
import waves from "../../assets/img/waves.png";
import pause from "../../assets/img/pause.png";
import play from "../../assets/img/play.png";
import { convertCurrentTime } from "../../utils/helpers/index";
// import distanceInWordsToNow from "date-fns/formatDistanceToNow";
// import ruLocale from "date-fns/locale/ru";
import classNames from "classnames";
// import checked from "../../assets/img/checked.svg";
// import sended from "../../assets/img/sended.png";

import { Avatar } from "../index";

// const Message = () => {
//   return <div>asdas</div>;ƒ
// };

const MessageAudio = ({ audioSrc }) => {
  const audioElem = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlay = audioSrc
    ? () => {
        if (!isPlaying) {
          audioElem.current.play();
        } else {
          audioElem.current.pause();
        }
      }
    : null;

  useEffect(() => {
    audioElem.current.addEventListener(
      "playing",
      () => {
        setIsPlaying(true);
      },
      false
    );
    audioElem.current.addEventListener(
      "pause",
      () => {
        setIsPlaying(false);
      },
      false
    );
    audioElem.current.addEventListener(
      "ended",
      () => {
        setIsPlaying(false);
        setProgress(0);
        setCurrentTime(0);
      },
      false
    );

    audioElem.current.addEventListener("timeupdate", () => {
      const duration = (audioElem.current && audioElem.current.duration) || 0;
      setCurrentTime(audioElem.current.currentTime);
      setProgress(
        (audioElem.current.currentTime / duration) * 100 + duration * 0.5
      );
    });
  }, []);

  return (
    <div className="message__audio">
      <audio ref={audioElem} src={audioSrc} preload="auto" />
      <div
        className="message__audio-progress"
        style={{ width: progress + "%" }}
      ></div>

      <div className="message__audio-info">
        <div className="message__audio-btn">
          <button onClick={togglePlay}>
            {!isPlaying ? (
              <img src={play} alt="play" />
            ) : (
              <img src={pause} alt="pause" />
            )}
          </button>
        </div>

        <div className="message__audio-svg">
          <img src={waves} alt="waves" />
        </div>

        <span className="message__audio-duration">
          {convertCurrentTime(currentTime)}
        </span>
      </div>
    </div>
  );
};

const Message = ({
  text,
  date,
  user,
  isMe,
  isReaded,
  audio,
  attachments,
  isTyping
}) => {

  return (
    <div
      className={classNames("message", {
        "message--isme": isMe,
        "message--is-typing": isTyping,
        "message--is-audio": audio,
        "message--image": attachments && attachments.length === 1
      })}
    >
      <div className="message__content">
        <div className="message__avatar">
		  <Avatar user={user} />
	
          {/* <img src={user.avatar} alt={user} /> */}
        </div>
        {!isTyping ? (
          <div className="message__info">
            <div>
              <div className="message__bubble">
                {(audio || text) && <p className="message__text">{text}</p>}
                {audio && <MessageAudio audioSrc={audio} />}
              </div>

              <div className="message__attachments">
                <div className="message__attachments-item">
                  {attachments &&
                    attachments.map((el, i) => (
                      <img key={i} src={el.url} alt="img" />
                    ))}
                </div>
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
          <div className="message__typing">
            <span className="circle scaling"></span>
            <span className="circle scaling"></span>
            <span className="circle scaling"></span>
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
};

export default Message;
