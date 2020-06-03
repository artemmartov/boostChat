import React from "react";
import { Empty, Spin, Alert } from "antd";
import { Message } from "../index";
import classnames from "classnames";

import "./Messages.scss";

const Messages = ({ refBlock, isLoading, items }) => {
  console.log(items, "itemsitems");
  console.log(isLoading, "isLoading");

  return (
    <div
      ref={refBlock}
      className={classnames("messages", { "messages--loading": isLoading })}
    >
      {isLoading ? (
        <Spin tip="Загрузка..." />
      ) : items && !isLoading ? (
        items.length > 0 ? (
          items.map((item, id) => <Message {...item} key={id} />)
        ) : (
          <Empty description="Нет сообщений" />
        )
      ) : (
        <Empty description="Откройте диалог" />
      )}
    </div>
  );
};

export default Messages;
