import { AuthActionType } from "../actions/authActions";

const authState = {
  isLoggedIn: false,
  user: {
    name: "",
    expires_at: "",
    jwttoken: "",
    authorities: [],
  },
};
const authReducer = (state = authState, action) => {
  switch (action.type) {
    case AuthActionType.REGISTER_SUCCESS:
      return {
        isLoggedIn: true,
        user: action.payload,
      };
    case AuthActionType.REGISTER_FAIL:
      return state;
    default:
      return state;
  }
};

export default authReducer;
