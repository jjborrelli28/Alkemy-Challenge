import React from "react";
import { ModalSearch } from "./ModalSearch";

export const EmptyCard = () => {

  return (
    <div className="col">
      <div className="card emptyCard">
        <div className="btn-container">
          <h5>Add a hero</h5>
          <ModalSearch />
        </div>
      </div>
    </div>
  );
};
