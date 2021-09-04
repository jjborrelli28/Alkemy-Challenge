import React from "react";

export const Spinner = () => {
  return (
    <div className="spinner mt-5">
      <div className="spinner-grow text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
