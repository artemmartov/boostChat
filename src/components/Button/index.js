import React from "react";
// import { Button as BaseButton } from "antd";
import classNames from "classnames";

import "./Button.scss";

export default function Button(props) {
console.log('BUTTON', props);

  return (
    <button {...props} className={classNames("button", props.className)}></button>
  );
}


