import React from "react";
import { Modal } from "react-bootstrap"; 

const PizzaModal = (props) => {
  return (
    <Modal show={props.show}>
      <Modal.Header >
              <Modal.Title>{props.data.name }</Modal.Title>
      </Modal.Header>

          <Modal.Body>
              <img src={props.data.image} alt="pizza" className="rounded mx-auto d-block" style={{height:'300px',width:'300px'}}/>
              <p>{ props.data.description}</p>
      </Modal.Body>

      <Modal.Footer>
        <button className="btn" onClick={props.handleClose}>
          CLOSE
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default PizzaModal;
