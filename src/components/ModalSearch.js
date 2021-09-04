import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useFetch } from "../hooks/useFetch";
import { useFormSearch } from "../hooks/useFormSearch";
import { types } from "../types/types";
import { MiniCard } from "./MiniCard";
import { Spinner } from "./Spinner";
import Swal from "sweetalert2";

export const ModalSearch = (props) => {
  const { className } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
    const action = {
      type: types.search,
      payload: "",
    };
    dispatch(action);
    reset();
  };

  const [values, handleInputChange, reset] = useFormSearch();

  const dispatch = useDispatch();

  const state = useSelector((state) => state.search);

  const { heroes } = useSelector((state) => state);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (values !== "") {
      const url = `https://superheroapi.com/api.php/2422309994580296/search/${values}`;
      const response = await fetch(url);
      const { results } = await response.json();
      const action = {
        type: types.search,
        payload: results,
      };
      dispatch(action);
      console.log(results);
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
    <div>
      <Button className="btn btn-primary btn-add" onClick={toggle}>
        <i className="fas fa-plus"></i>
      </Button>

      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
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
          <div className="overflow-auto">
            {state ? (
              state.map((hero) => <MiniCard hero={hero} />)
            ) : (
              <Spinner />
            )}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
