import { types } from "../types/types";

const initialState = [];

export const heroesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.add:
      return [...state, action.payload];

    case types.delete:
      return {
        auth: false,
        token: "",
      };

    default:
      return state;
  }
};
