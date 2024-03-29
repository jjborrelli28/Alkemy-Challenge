import React from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Spinner } from "./Spinner";

export const HeroScreen = () => {
  const { heroId } = useParams();

  const url = `https://www.superheroapi.com/api.php/2422309994580296/${heroId}`;

  const { data, loading } = useFetch(url);

  return (
    <div className="container">
      {loading ? (
        <Spinner />
      ) : (
        <div className="card-hero mt-5 animate__animated animate__fadeIn animate__slow">
          <div className="name">
            <h1>{data.name}</h1>
          </div>
          <div className="hero-container mt-4 mb-3">
            <div className="image">
              <img src={data.image.url} alt="..." />
            </div>
            <div className="info-container">
              <div className="info">
                <h3>{data.biography["full-name"]}</h3>
                <h5>
                  Alignment:{" "}
                  {data.biography.alignment.charAt(0).toUpperCase() +
                    data.biography.alignment.slice(1)}
                </h5>
                <h5>Aliases: </h5>
                <ul>
                  {data.biography.aliases.map((alias) => (
                    <li>{alias}</li>
                  ))}
                </ul>
                <h5>Appearance: </h5>
                <ul>
                  <li>Gender: {data.appearance.gender}</li>
                  <li>Race: {data.appearance.race}</li>
                  <li>Weight: {data.appearance.weight[1]}</li>
                  <li>Height: {data.appearance.height[1]}</li>
                  <li>Eye color: {data.appearance["eye-color"]}</li>
                  <li>Hair color: {data.appearance["hair-color"]}</li>
                </ul>
                <h5>Workplace: </h5>
                <p>{data.work.base}</p>
              </div>
              <NavLink
                className="btn btn-secondary btn-lg btn-block btn-large"
                exact
                to="/"
              >
                Back
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
