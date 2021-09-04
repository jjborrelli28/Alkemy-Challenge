import React from "react";
import { Button } from "./Button";
import { CardsContainer } from "./CardsContainer";

export const HomeScreen = () => {
  return (
    <div className="home-screen animate__animated animate__fadeIn animate__slow">
      <div className="jumbotron jumbotron-fluid mt-5">
        <div className="container">
          <h1 className="display-3">
            <b>Alkemy Challenge</b>
          </h1>
          <p className="lead">
            <b>Welcome to the Juan José Borrelli Challenge!</b>
          </p>
        </div>
        <hr className="my-4" />
        <div className="container mt-1">
          <h1 className="display-5">
            <b>Heroes Team</b>
          </h1>
          <CardsContainer />
        </div>
      </div>
      <Button />
    </div>
  );
};
