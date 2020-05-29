import { dialogsAPI } from "../../utils/api/index";

const actions = {
  setDialogs: items => ({
    type: "DIALOGS:SET_ITEMS",
    payload: items
  }),
  fetchDialogs: () => dispatch => {
    dialogsAPI.getAll().then(({ data }) => {
      console.log(123);
      dispatch(actions.setDialogs(data));
    });
  }
};

export default actions;
