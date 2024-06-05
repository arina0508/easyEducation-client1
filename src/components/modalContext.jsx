import React, { createContext, useState } from "react";
import Modal from "@mui/material/Modal";
import { Typography, Box } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const defaultContext = {
  targetModal: null,
  openModal: () => {},
  closeModal: () => {},
};

export const ModalContext = createContext(defaultContext);

export const ModalProvider = ({ children }) => {
  const [targetModal, setTargetModal] = useState(null);

  const openModal = (modalData) => {
    setTargetModal(modalData);
  };
  const closeModal = () => {
    setTargetModal(null);
  };

  const { component: Component, props, title } = targetModal ? targetModal : {};

  return (
    <ModalContext.Provider value={{ targetModal, openModal, closeModal }}>
      <Modal
        open={targetModal !== null}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h3">
            {title}
          </Typography>
          <Box className="overflow-y-scroll h-[75vh]">
            {Component && <Component {...props} />}
          </Box>
        </Box>
      </Modal>
      {children}
    </ModalContext.Provider>
  );
};
