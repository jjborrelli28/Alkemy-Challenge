import { types } from "../types/types";

const initialState = JSON.parse(localStorage.getItem("heroes")) || {};

let newHeroesArray;

export const heroesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.add:
      newHeroesArray = [...state.heroes, action.payload];
      state = {
        heroes: newHeroesArray,
        good: newHeroesArray.filter(
          (hero) => hero.biography.alignment === "good"
        ),
        bad: newHeroesArray.filter(
          (hero) => hero.biography.alignment === "bad"
        ),
      };

      localStorage.setItem("heroes", JSON.stringify(state));
      return state;
    case types.delete:
      newHeroesArray = state.heroes.filter(
        (hero) => hero.id !== action.payload
      );
      state = {
        heroes: newHeroesArray,
        good: newHeroesArray.filter(
          (hero) => hero.biography.alignment === "good"
        ),
        bad: newHeroesArray.filter(
          (hero) => hero.biography.alignment === "bad"
        ),
      };
      localStorage.setItem("heroes", JSON.stringify(state));
      return state;

    default:
      return state;
  }
};
