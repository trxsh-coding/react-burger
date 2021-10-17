import React from 'react'
import modalStyles from './modal.module.css'
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const Modal = ({open, children, onClose}) => {

    return open ? (

        <div className={modalStyles.wrapper} >
            <div className={modalStyles.overlay} onClick={onClose} />
            <div className={`${modalStyles.content} pt-30 pb-30`}>
                <div className={modalStyles.close} onClick={onClose}>
                    <CloseIcon type="primary" />
                </div>
                    {children}
            </div>

        </div>
    ) : null

}

Modal.propTypes = {
    open: PropTypes.bool.isRequired,
    children: PropTypes.element,
    onClose: PropTypes.func,
}
export default Modal;
