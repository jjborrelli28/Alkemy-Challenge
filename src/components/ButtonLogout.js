import React from "react";
import { useDispatch } from "react-redux";
import { types } from "../types/types";

export const ButtonLogout = () => {
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    const action = {
      type: types.logout,
    };
    dispatch(action);
  };

  return (
    <>
      <button className="btn btn-danger btn-logout" onClick={handleLogout}>
        Sign out <i className="fas fa-sign-out-alt"></i>
      </button>
    </>
  );
};
