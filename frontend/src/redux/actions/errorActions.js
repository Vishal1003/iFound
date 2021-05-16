import { AuthActionType } from "./actionTypes";

// GET ERRORS
export const returnErrors = (msg, id = null) => {
  return {
    type: AuthActionType.GET_ERRORS,
    payload: {
      msg,
      id,
    },
  };
};

// CLEAR ERRORS
export const clearErrors = () => {
  return {
    type: AuthActionType.CLEAR_ERRORS,
  };
};
