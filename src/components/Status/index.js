import React from "react";
import classnames from "classnames";

import "./Status.scss";

const Status = ({ online }) => {
  return (
    <span className={classnames("status", { "status--online": online })}>
      {online ? "online" : "offline"}
    </span>
  );
};

export default Status;
