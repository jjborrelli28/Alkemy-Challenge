import { types } from "../types/types";

const initialState = JSON.parse(localStorage.getItem("heroes")) || [];

export const heroesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.add:
      state = [...state, action.payload];
      localStorage.setItem("heroes", JSON.stringify(state));
      return state;
    case types.delete:
      state = state.filter((hero) => hero.id !== action.payload);
      localStorage.setItem("heroes", JSON.stringify(state));
      return state;

    default:
      return state;
  }
};
