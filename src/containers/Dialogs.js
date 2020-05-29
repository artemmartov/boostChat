import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { DialogsActions } from "../redux/actions/index";
import { Dialogs as BaseDialogs } from "../components/index";

const Dialogs = ({ items, userId, fetchDialogs }) => {
  const [inputValue, setValue] = useState("");
  const [filtred, setFiltred] = useState([...items]);
  console.log("PROPS", fetchDialogs);

  const onChangeInput = value => {
    setFiltred(
      items.filter(
        dialog =>
          dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0
      )
    );
    setValue(value);
  };

  useEffect(() => {
    if (!items.length) {
      console.log("000");

      fetchDialogs();
    }
  }, [items]);

  return (
    <BaseDialogs
      userId={userId}
      items={filtred}
      onSearch={onChangeInput}
      inputValue={inputValue}
    />
  );
};

export default connect(({ dialogs }) => dialogs, DialogsActions)(Dialogs);
