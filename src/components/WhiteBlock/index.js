import React from "react";
import classNames from 'classnames'


import "./WhiteBlock.scss";

export default function Block({ children, className }) {
  return <div className={classNames('block', className)}>{children}</div>;
}
