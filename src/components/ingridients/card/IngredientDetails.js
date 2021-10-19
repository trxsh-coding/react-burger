
import React from "react";
import {cardItemProps} from "../../../utils/types";
import Card from "./index";
import detailsStyles from './details.module.css'
const IngredientDetails = (props) => {
    const {image, proteins, fat, carbohydrates, name} = props;
    return (
        <div className='flex align-center column'>
            <img src={image} alt="detailImage" width={480} height={240}/>
            <p className="text text_type_main-medium">
                {name}
            </p>
            <div className={`${detailsStyles.nutritional} mt-2`}>
                <div className='flex column align-center'>
                    <p className='text_type_main-small'>Калории,ккал</p>
                    <p className='text_type_main-small'>{proteins}</p>
                </div>
                <div className='flex column align-center'>
                    <p className='text_type_main-small'>Белки, г</p>
                    <p className='text_type_main-small'>{fat}</p>
                </div>
                <div className='flex column align-center'>
                    <p className='text_type_main-small'>Жиры, г</p>
                    <p className='text_type_main-small'>{carbohydrates}</p>
                </div>
                <div className='flex column align-center'>
                    <p className='text_type_main-small'>Углеводы, г</p>
                    <p className='text_type_main-small'>{proteins}</p>
                </div>
            </div>
        </div>
    )
}
Card.propTypes = cardItemProps.isRequired;

export default IngredientDetails;
