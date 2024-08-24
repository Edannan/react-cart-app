import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.closeFnc} />;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const modalPortal = document.getElementById("modalPortal");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop closeFnc={props.onClose} />,
        modalPortal
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        modalPortal
      )}
    </Fragment>
  );
};

export default Modal;
