import { AuthActionType } from "../actions/actionTypes";

const initialState = {
  msg: {},
  id: null,
};

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case AuthActionType.GET_ERRORS:
      return {
        msg: action.payload.msg,
        id: action.payload.id,
      };
    case AuthActionType.CLEAR_ERRORS:
      return {
        msg: {},
        id: null,
      };
    default:
      return state;
  }
}
