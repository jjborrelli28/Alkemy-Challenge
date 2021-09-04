import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip } from "reactstrap";
import { types } from "../types/types";
import Swal from "sweetalert2";

export const MiniCard = ({ hero }) => {
  const [tooltipAddOpen, setTooltipAddOpen] = useState(false);
  const toggleAdd = () => setTooltipAddOpen(!tooltipAddOpen);

  const dispatch = useDispatch();

  const { heroes, good, bad } = useSelector((state) => state.heroes);

  const alert = () => {
    Swal.fire({
      title: "Incorrect selection",
      text: "You cannot add more than 3 members of with the same orientation",
      icon: "warning",
      confirmButtonText: "Cool",
    });
  };

  const handleSelect = (e) => {
    e.preventDefault();
    if (heroes.length < 6) {
      if (hero.biography.alignment === "good") {
        if (good.length < 3) {
          const action = {
            type: types.add,
            payload: hero,
          };
          dispatch(action);
        } else {
          alert();
        }
      } else if (hero.biography.alignment === "bad") {
        if (bad.length < 3) {
          const action = {
            type: types.add,
            payload: hero,
          };
          dispatch(action);
        } else {
          alert();
        }
      } else {
        const action = {
          type: types.add,
          payload: hero,
        };
        dispatch(action);
      }
    } else {
      Swal.fire({
        title: "Complete team!",
        text: "You cannot add more than 6 heroes",
        icon: "warning",
        confirmButtonText: "Cool",
      });
    }
  };

  return (
    <div
      className={`card mb-3 animate__animated animate__fadeIn animate__slow ${
        hero.biography.alignment === `good`
          ? `good`
          : hero.biography.alignment === `bad`
          ? `bad`
          : ``
      }`}
    >
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={hero.image.url}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{hero.name}</h5>
            <ul>
              <li>Combat: {hero.powerstats.combat}</li>
              <li>Durability: {hero.powerstats.durability}</li>
              <li>Intelligence: {hero.powerstats.intelligence}</li>
              <li>Power: {hero.powerstats.power}</li>
              <li>Speed: {hero.powerstats.speed}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="btn-container-mini-card">
        <button
          type="button"
          className="btn btn-primary btn-mini-card"
          style={{ textDecoration: "underline" }}
          id="TooltipAdd"
          onClick={handleSelect}
        >
          <i className="fas fa-plus"></i>
        </button>
        <Tooltip
          placement="top"
          isOpen={tooltipAddOpen}
          target="TooltipAdd"
          toggle={toggleAdd}
        >
          Add hero
        </Tooltip>
      </div>
    </div>
  );
};
