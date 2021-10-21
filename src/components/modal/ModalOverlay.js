import React from "react";
import PropTypes from "prop-types";
import modalStyles from "./modal.module.css";

const ModalOverlay = ({onClose}) => {

    return (
        <div className={modalStyles.overlay} onClick={onClose}  />
    )
}

ModalOverlay.propTypes = {
    onClose: PropTypes.func.isRequired
}

export default ModalOverlay;
