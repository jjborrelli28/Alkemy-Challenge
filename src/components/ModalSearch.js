import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { types } from "../types/types";
import { MiniCard } from "./MiniCard";
import { Spinner } from "./Spinner";
import { Input } from "./Input";

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
  };

  const dispatch = useDispatch();

  const state = useSelector((state) => state.search);

  const { heroes } = useSelector((state) => state.heroes);

  return (
    <div>
      <Button className="btn btn-primary btn-add" onClick={toggle}>
        <i className="fas fa-plus"></i>
      </Button>

      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Search heroes</ModalHeader>
        <ModalBody>
          <Input />
          <div className="overflow-auto">
            {state ? (
              state.map(
                (hero) =>
                  !heroes.some((elem) => elem.id === hero.id) && (
                    <MiniCard key={hero.id} hero={hero} />
                  )
              )
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
