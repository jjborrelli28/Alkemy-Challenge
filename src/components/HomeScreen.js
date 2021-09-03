import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { types } from "../types/types";
import { ButtonLogout } from "./ButtonLogout";

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.auth);

  return (
    <div className="home-screen">
      <div class="jumbotron jumbotron-fluid mt-5">
        <div class="container">
          <h1 class="display-3">Alkemy Challenge</h1>
          <p class="lead">Welcome to the Juan José Borrelli Challenge!</p>
          <p class="lead">
            Below you can see the Heroes team that he forms, which you can edit
            to your liking.
          </p>
        </div>
        <div class="container mt-5">
          <h1 class="display-5">Heroes Team</h1>
        </div>
      </div>
      <ButtonLogout />
    </div>
  );
};
