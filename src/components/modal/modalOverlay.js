import modalStyles from "./modal.module.css";
import React, {useEffect} from "react";

const ModalOverlay = ({onClose}) => {

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
               onClose()
            }
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    });

    return (
        <div className={modalStyles.overlay} onClick={onClose}  />
    )
}

export default ModalOverlay;
