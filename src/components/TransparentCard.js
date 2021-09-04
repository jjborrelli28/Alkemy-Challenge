import React from "react";

export const TransparentCard = () => {
  return (
    <div className="col transparent">
      <div className="card ms-0">
        <img
          src="https://www.superherodb.com/pictures2/portraits/10/100/140.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card mold</h5>
          <ul className="ps-0 list">
            <li>Combat: -</li>
            <li>Durability: -</li>
            <li>Intelligence: -</li>
            <li>Power: -</li>
            <li>Speed: -</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
