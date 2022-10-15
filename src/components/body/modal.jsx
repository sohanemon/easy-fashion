import { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");
const MyModal = ({ modalState, setModalState }) => {
  return (
    <>
      <div>
        <Modal
          isOpen={modalState.isOpen}
          style={customStyles}
          onRequestClose={() =>
            setModalState((p) => {
              return { ...p, isOpen: false };
            })
          }
          contentLabel='Example Modal'
        >
          Total cost: {parseFloat(modalState.cost).toFixed(2)}$
        </Modal>
      </div>
    </>
  );
};

export default MyModal;
