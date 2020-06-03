import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { dialogsActions } from "../redux/actions/index";
import { Dialogs as BaseDialogs } from "../components/index";

const Dialogs = ({ items, userId, fetchDialogs, setCurrentDialogId }) => {
  const [inputValue, setValue] = useState("");
  const [filtred, setFiltred] = useState(Array.from(items));

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
      fetchDialogs();
    } else {
      setFiltred(items);
    }
  }, [items]);

  return (
    <BaseDialogs
      userId={userId}
      items={filtred}
      onSearch={onChangeInput}
      inputValue={inputValue}
      onSelectDialog={setCurrentDialogId}
    />
  );
};

export default connect(({ dialogs }) => dialogs, dialogsActions)(Dialogs);
