import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Tooltip } from "reactstrap";
import { types } from "../types/types";

export const Card = ({ hero }) => {
  const [tooltipInfoOpen, setTooltipInfoOpen] = useState(false);
  const toggleInfo = () => setTooltipInfoOpen(!tooltipInfoOpen);
  const [tooltipDeleteOpen, setTooltipDeleteOpen] = useState(false);
  const toggleDelete = () => setTooltipDeleteOpen(!tooltipDeleteOpen);

  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    const action = {
      type: types.delete,
      payload: hero.id,
    };
    dispatch(action);
  };

  return (
    <div className="col animate__animated animate__fadeIn animate__slow">
      <div
        className={`card ms-0 ${
          hero.biography.alignment === `good`
            ? `good`
            : hero.biography.alignment === `bad`
            ? `bad`
            : ``
        }`}
      >
        <img src={hero.image.url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{hero.name}</h5>
          <ul className="ps-0 list">
            <li>Combat: {hero.powerstats.combat}</li>
            <li>Durability: {hero.powerstats.durability}</li>
            <li>Intelligence: {hero.powerstats.intelligence}</li>
            <li>Power: {hero.powerstats.power}</li>
            <li>Speed: {hero.powerstats.speed}</li>
          </ul>
          <button
            type="button"
            className="btn btn-primary btn-more-info"
            style={{ textDecoration: "underline" }}
            id="TooltipInfo"
          >
            <i className="fas fa-plus"></i>
          </button>
          <Tooltip
            placement="top"
            isOpen={tooltipInfoOpen}
            target="TooltipInfo"
            toggle={toggleInfo}
          >
            More info!
          </Tooltip>

          <button
            type="button"
            className="btn btn-danger btn-delete"
            style={{
              textDecoration: "underline",
            }}
            id="TooltipDelete"
            onClick={handleDelete}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
          <Tooltip
            placement="bottom"
            isOpen={tooltipDeleteOpen}
            target="TooltipDelete"
            toggle={toggleDelete}
          >
            Delete hero
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
