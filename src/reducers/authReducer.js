import { types } from "../types/types";

const auth = localStorage.getItem("auth") || false;
const token = localStorage.getItem("token") || "";

export const authReducer = (state = { auth, token }, action) => {
  switch (action.type) {
    case types.login:
      localStorage.setItem("auth", true);
      localStorage.setItem("token", action.payload);
      return {
        auth: true,
        token: action.payload,
      };

    case types.logout:
      localStorage.setItem("auth", false);
      localStorage.setItem("token", "");
      return {
        auth: false,
        token: "",
      };

    default:
      return state;
  }
};
