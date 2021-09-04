import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "./Card";
import { useFetch } from "../hooks/useFetch";
import { EmptyCard } from "./EmptyCard";
import { Spinner } from "./Spinner";
import { TransparentCard } from "./TransparentCard";

export const CardsContainer = () => {
  const { heroes } = useSelector((state) => state);

  return (
    <>
      <div className="row row-cols-2 row-cols-md-6 g-4 mt-1">
        {heroes.length < 6 && <EmptyCard />}
        {heroes.length === 0 && <TransparentCard />}
        {heroes.map((hero) => (
          <Card hero={hero} />
        ))}
      </div>
    </>
  );
};
