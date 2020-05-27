import React from "react";
import { DialogItem } from "../index";
import orderBy from "lodash/orderBy";
import isToday from "date-fns/isToday/index.js";

import "./Dialogs.scss";

const Dialogs = ({ items, userId }) => {
  return (
    <div className="dialogs">
      {orderBy(items, ["created_at"], ["desc"]).map(elem => (
        <DialogItem
          key={elem._id}
          isMe={elem.user._id === userId}
          //   message={elem}
          //   unReaded={2}
          //   isOnline={elem.user.isOnline}
          {...elem}
        />
      ))}
    </div>
  );
};

export default Dialogs;
