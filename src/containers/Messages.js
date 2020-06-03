import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

import { messagesActions } from "../redux/actions/index";
import { Messages as BaseMessages } from "../components/index";

// class Dialogs extends React.Component {
//   componentDidUpdate(prevProps) {
//     const { fetchMessages, currentDialogId } = this.props;
//     if (prevProps.currentDialogId !== currentDialogId) {
//       fetchMessages(currentDialogId);
//     }
//   }
//   render() {
//     const { items } = this.props;
//     return <BaseMessages items={items} />;
//   }
// }

const Dialogs = ({ currentDialogId, fetchMessages, items, isLoading }) => {
  const messagesRef = useRef(null);
  useEffect(() => {
    if (currentDialogId) {
      fetchMessages(currentDialogId);
    }
  }, [currentDialogId]);
  useEffect(() => {
    messagesRef.current.scrollTo(0, 9999);
  }, [items]);
  return <BaseMessages items={items} isLoading={isLoading} refBlock={messagesRef} />;
};

export default connect(
  ({ dialogs, messages }) => ({
    currentDialogId: dialogs.currentDialogId,
    items: messages.items,
    isLoading: messages.isLoading
  }),
  messagesActions
)(Dialogs);
