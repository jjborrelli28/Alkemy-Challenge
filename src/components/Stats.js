import React from "react";
import { useSelector } from "react-redux";

export const Stats = () => {
  const { heroes } = useSelector((state) => state.heroes);

  const combat = heroes.reduce((counter, hero) => {
    return counter + parseInt(hero.powerstats.combat);
  }, 0);

  const durability = heroes.reduce((counter, hero) => {
    return counter + parseInt(hero.powerstats.durability);
  }, 0);

  const intelligence = heroes.reduce((counter, hero) => {
    return counter + parseInt(hero.powerstats.intelligence);
  }, 0);

  const power = heroes.reduce((counter, hero) => {
    return counter + parseInt(hero.powerstats.power);
  }, 0);

  const speed = heroes.reduce((counter, hero) => {
    return counter + parseInt(hero.powerstats.speed);
  }, 0);

  const weight = heroes.reduce((counter, hero) => {
    return counter + parseInt(hero.appearance.weight[1]);
  }, 0);

  const aWeight = Math.floor(weight / heroes.length);

  const height = heroes.reduce((counter, hero) => {
    return counter + parseInt(hero.appearance.height[1]);
  }, 0);

  const aHeight = Math.floor(height / heroes.length);

  const numbers = [combat, durability, intelligence, power, speed];

  numbers.sort((a, b) => {
    return b - a;
  });

  return (
    <div className="mt-3">
      <h1 className="display-6">Team Powerstats</h1>
      <ul className="powerstats">
        {numbers.map((number) => (
          <li key={Math.random()}>
            {(number === combat && "Combat") ||
              (number === durability && "Durability") ||
              (number === intelligence && "Intelligence") ||
              (number === power && "Power") ||
              (number === speed && "Speed")}
            : {number}
          </li>
        ))}
        <li>Average weight: {aWeight} kg</li>
        <li>Average height: {aHeight} cm</li>
      </ul>
    </div>
  );
};
