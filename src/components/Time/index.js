import React from "react";
import distanceInWordsToNow from "date-fns/formatDistanceToNow";
import ruLocale from "date-fns/locale/ru";

const Time = ({ date }) => {
  return (
    <span>
      {distanceInWordsToNow(date, {
        addSuffix: true,
        locale: ruLocale
      })}
    </span>
  );
};

export default Time;
