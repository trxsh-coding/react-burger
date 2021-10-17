import {cardItemProps} from "../../../utils/types";
import cardStyles from './card.module.css';
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const Card = (props) => {
    const {image, price, name, count, onOpen, _id} = props;
    return (
        <div className={`${cardStyles.wrapper} pb-8 relative pointer`} onClick={() => onOpen(_id)}>
            <img src={image} alt="cardImage" width={240} height={120} className='pl-4 pr-4'/>
            <Counter count={count} size="default"/>
            <div className='pt-1 pb-1 flex justify-center'>
                <p className="text text_type_digits-default pr-2">{price}</p>
                <CurrencyIcon type='primary'/>
            </div>
            <div className={cardStyles.description}>
                <p className="text text_type_main-default">
                    {name}
                </p>
            </div>
        </div>
    )
}

Card.propTypes = cardItemProps.isRequired;

export default Card;

