import React from "react";
import { DialogItem } from "../index";
import orderBy from "lodash/orderBy";
import isToday from "date-fns/isToday/index.js";
import { Input, Empty } from "antd";

import "./Dialogs.scss";

const Dialogs = ({ items, userId, onSearch, inputValue }) => {
  console.log("dddd", inputValue);

  return (
    <div className="dialogs">
      <div className="dialogs-search">
        <Input.Search
          placeholder="поиск среди контактов"
          onChange={e => onSearch(e.target.value)}
          value={inputValue}
        ></Input.Search>
      </div>
      {items.length ? (
        orderBy(items, ["created_at"], ["desc"]).map(elem => (
          <DialogItem
            key={elem._id}
            isMe={elem.user._id === userId}
            //   message={elem}
            //   unReaded={2}
            //   isOnline={elem.user.isOnline}
            {...elem}
          />
        ))
      ) : (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="Ничего не найдено"
        />
      )}
    </div>
  );
};

export default Dialogs;
