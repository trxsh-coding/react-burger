import React, {useEffect} from 'react'
import modalStyles from './modal.module.css'
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import * as ReactDOM from "react-dom";
import ModalOverlay from "./modalOverlay";

const modalRoot = document.getElementById("react-modals");

const Modal = ({open, children, onClose, title}) => {
    return ReactDOM.createPortal(
        open && (
            <div className={modalStyles.wrapper} >
                <ModalOverlay onClose={onClose}/>
                <div className={`${modalStyles.content} pt-10 pb-10`}>
                    <p className="text text_type_main-large">
                        {title}
                    </p>
                    <div className={modalStyles.close} onClick={onClose}>
                        <CloseIcon type="primary" />
                    </div>
                    {children}
                </div>
            </div>
        ),modalRoot
    )

}

Modal.propTypes = {
    open: PropTypes.bool.isRequired,
    children: PropTypes.element,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string
}
export default Modal;
