import acceptLogo from "../../images/graphics.svg";
import PropTypes from "prop-types";

const OrderDetails = ({orderNumber}) => {
    return (
        <div className='align-center flex column'>
            <p className="text text_type_digits-large mb-8">{orderNumber}</p>
            <p className="text text_type_main-medium mb-15">
                идентификатор заказа
            </p>
            <img src={acceptLogo} alt="acceptLogo"/>
            <p className="text text_type_main-default mb-15">
                Ваш заказ начали готовить
            </p>
            <p className="text text_type_main-default mb-15">
                Дождитесь готовности на орбитальной станции
            </p>
        </div>
    )
}
OrderDetails.propTypes = {
    orderNumber: PropTypes.number,
}

export default OrderDetails;
