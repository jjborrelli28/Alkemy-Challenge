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

  const stats = [
    { name: "Combat:", value: combat },
    { name: "Durability:", value: durability },
    { name: "Intelligence:", value: intelligence },
    { name: "Power:", value: power },
    { name: "Speed:", value: speed },
  ];

  stats.sort((a, b) => {
    if (a.value < b.value) {
      return 1;
    }
    if (a.value > b.value) {
      return -1;
    }
    return 0;
  });

  return (
    <div className="mt-3 pb-3">
      <h1 className="display-6">Team Powerstats</h1>
      <ul className="powerstats">
        {stats.map((stat) => (
          <li key={stat.name}>
            {stat.name} {stat.value}
          </li>
        ))}
        <li>Average weight: {aWeight} kg</li>
        <li>Average height: {aHeight} cm</li>
      </ul>
    </div>
  );
};
