import React from "react";
import Modal from "react-modal";
import sherlock from "./Sherlock Holmes.webp";
import { useState } from "react";

Modal.setAppElement("#root");

function Sherlock() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  <style>
    @import
    url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,600;0,900;1,300&display=swap');
  </style>;
  return (
    <div>
      <img
        className="il-sherlock"
        onClick={() => setModalIsOpen(true)}
        src={sherlock}
        width={300}
        height={300}
      ></img>
      <Modal
        className="modal"
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <div>
          <img
            className="il-sherlock-modal-img"
            src={sherlock}
            width={600}
            height={600}
          ></img>
        </div>
        <div className="modal-close-button-div">
          <button
            className="modal-close-button"
            onClick={() => setModalIsOpen(false)}
          >
            X
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Sherlock;
