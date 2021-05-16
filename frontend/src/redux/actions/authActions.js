import axios from "axios";
import { AuthActionType } from "./actionTypes";
import { returnErrors } from "./errorActions";

export const tokenConfig = (getState) => {
  const token = getState().auth.token;
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  if (token) config.headers["x-auth-token"] = token;

  return config;
};

// Check token and Load
export const loadUser = () => (dispatch, getState) => {
  // user loading
  dispatch({ type: AuthActionType.USER_LOADING });
  axios
    .get("http://localhost:5000/api/user/getUser", tokenConfig(getState))
    .then((res) => {
      if (res.data.success === true)
        dispatch({ type: AuthActionType.USER_LOADED, payload: res.data.user });
      else {
        dispatch({ type: AuthActionType.AUTH_ERROR });
        dispatch(returnErrors(res.data.msg, res.data.error_id));
      }
    })
    .catch((err) => {
      dispatch({ type: AuthActionType.AUTH_ERROR });
    });
};

export const register = (userState, history) => (dispatch) => {
  const { name, email, password } = userState;
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const body = JSON.stringify({ name, email, password });

  axios
    .post("http://localhost:5000/api/user/register", body, config)
    .then((res) => {
      if (res.data.success === true) {
        dispatch({
          type: AuthActionType.REGISTER_SUCCESS,
          payload: res.data,
        });
        history.push("/dashboard");
      } else {
        dispatch(returnErrors(res.data.msg, res.data.error_id));
        dispatch({ type: AuthActionType.REGISTER_FAIL });
      }
    })
    .catch((err) => {
      console.log("API_ERROR");
      dispatch({ type: AuthActionType.REGISTER_FAIL });
    });
};

export const login = (userState, history) => (dispatch) => {
  const { email, password } = userState;
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  axios
    .post("http://localhost:5000/api/user/login", body, config)
    .then((res) => {
      if (res.data.success === true) {
        dispatch({
          type: AuthActionType.LOGIN_SUCCESS,
          payload: res.data,
        });
        history.push("/dashboard");
      } else {
        dispatch(returnErrors(res.data.msg, res.data.error_id));
        dispatch({ type: AuthActionType.LOGIN_FAIL });
      }
    })
    .catch((err) => {
      console.log("API_ERROR");
      dispatch({ type: AuthActionType.LOGIN_FAIL });
    });
};

export const logout = (history) => (dispatch) => {
  dispatch({ type: AuthActionType.LOGOUT_SUCCESS });
  history.push("/");
};
