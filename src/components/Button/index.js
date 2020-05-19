import React from "react";
import { Button as BaseButton } from "antd";
import classNames from "classnames";

import "./Button.scss";

export default function Button(props) {
  return (
    <BaseButton {...props} className={classNames("button", props.className, {'button--large' : props.size === 'large'})} />
  );
}


