
import React from "react";
import cardDetailsStyles from './cardDetails.module.css'
import {cardItemProps} from "../../../utils/types";
import Card from "./index";
const CardDetails = (props) => {
    const {image, proteins, fat, carbohydrates} = props;
    return (
        <div className={cardDetailsStyles.wrapper}>
            <p className="text text_type_main-large text-align-left">
                Детали ингредиента
            </p>
            <img src={image} alt=""/>
            <p className="text text_type_main-medium">
                Биокотлета из марсианской Магнолии
            </p>
            <div className='flex space-between'>
                <div className={cardDetailsStyles.options}>
                    <p className='text_type_main-small'>Калории,ккал</p>
                    <p className='text_type_main-small'>{proteins}</p>
                </div>
                <div className={cardDetailsStyles.options}>
                    <p className='text_type_main-small'>Калории,ккал</p>
                    <p className='text_type_main-small'>{fat}</p>
                </div>
                <div className={cardDetailsStyles.options}>
                    <p className='text_type_main-small'>Калории,ккал</p>
                    <p className='text_type_main-small'>{carbohydrates}</p>
                </div>
                <div className={cardDetailsStyles.options}>
                    <p className='text_type_main-small'>Калории,ккал</p>
                    <p className='text_type_main-small'>{proteins}</p>
                </div>
            </div>
        </div>
    )
}
Card.propTypes = cardItemProps.isRequired;

export default CardDetails;
