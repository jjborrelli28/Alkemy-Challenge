import React from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { useFormSearch } from "../hooks/useFormSearch";
import { types } from "../types/types";

export const Input = () => {
  const [values, handleInputChange] = useFormSearch();

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (values !== "") {
      try {
        const url = `https://superheroapi.com/api.php/2422309994580296/search/${values}`;
        const response = await fetch(url);
        const { results } = await response.json();
        const action = {
          type: types.search,
          payload: results,
        };
        dispatch(action);
      } catch (error) {
        Swal.fire({
          title: "Wrong name",
          text: "No search results for this name",
          icon: "warning",
          confirmButtonText: "Cool",
        });
      }
    } else {
      Swal.fire({
        title: "Invalid search",
        text: "The name field cannot be empty",
        icon: "warning",
        confirmButtonText: "Cool",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter hero name"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={values}
          onChange={handleInputChange}
          onSubmit={handleSubmit}
        />
        <div className="input-group-append"></div>
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
    </form>
  );
};
