import { AuthActionType } from "../actions/actionTypes";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  user: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AuthActionType.USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case AuthActionType.USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    case AuthActionType.LOGIN_SUCCESS:
    case AuthActionType.REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };

    case AuthActionType.AUTH_ERROR:
    case AuthActionType.LOGIN_FAIL:
    case AuthActionType.REGISTER_FAIL:
    case AuthActionType.LOGOUT_SUCCESS:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false
      };
    default:
      return state;
  }
}
