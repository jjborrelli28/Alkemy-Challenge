import React from "react";
import { useSelector } from "react-redux";
import { Card } from "./Card";
import { EmptyCard } from "./EmptyCard";
import { TransparentCard } from "./TransparentCard";

export const CardsContainer = () => {
  const { heroes } = useSelector((state) => state);

  return (
    <>
      <div className="row row-cols-2 row-cols-md-6 g-4 mt-1">
        {heroes.length < 6 && <EmptyCard />}
        {heroes.length === 0 && <TransparentCard />}
        {heroes.map((hero) => (
          <Card key={hero.id} hero={hero} />
        ))}
      </div>
    </>
  );
};
