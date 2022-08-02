import React, { useState } from "react";
import Modal from "react-modal";
import meybis from "./ESTILO_MEYBIS RUIZ.webp";

function Meybis() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  <style>
    @import
    url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,600;0,900;1,300&display=swap');
  </style>;
  return (
    <div>
      <img
        onClick={() => setModalIsOpen(true)}
        src={meybis}
        className="il-meybis"
        height={300}
        width={250}
      ></img>
      <Modal
        className="modal"
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <div>
          <img
            className="il-karine-modal-img"
            src={meybis}
            width={450}
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

export default Meybis;
