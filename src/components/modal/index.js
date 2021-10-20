import React, {useEffect} from 'react'
import modalStyles from './modal.module.css'
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import * as ReactDOM from "react-dom";
import ModalOverlay from "./ModalOverlay";

const modalRoot = document.getElementById("react-modals");


const Modal = ({open, children, onClose, title}) => {

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


    return ReactDOM.createPortal(
        open && (
            <div className={modalStyles.wrapper}>
                <ModalOverlay onClose={onClose}/>
                <div className={`${modalStyles.content} pt-10 pb-10`}>
                    <div className={modalStyles.header}>
                        <p className="text text_type_main-large">
                            {title}
                        </p>
                        <CloseIcon type="primary" onClick={onClose}/>
                    </div>
                    <div className={modalStyles.annotation}>
                        {children}
                    </div>
                </div>
            </div>
        ), modalRoot
    )

}

Modal.propTypes = {
    open: PropTypes.bool.isRequired,
    children: PropTypes.element,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string
}
export default Modal;
