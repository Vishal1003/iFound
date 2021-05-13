import axios from "axios";

const AuthActionType = {
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_FAIL: "REGISTER_FAIL",
};

const RegisterAuthAction = (userState) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/user/register",
        userState
      );
      const { data } = res;
      dispatch({ type: AuthActionType.REGISTER_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({
        type: AuthActionType.REGISTER_FAIL,
        payload: {},
      });
    }
  };
};

export { RegisterAuthAction, AuthActionType };
