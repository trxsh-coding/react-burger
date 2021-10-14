import {Component} from "react";
import {cardItemProps} from "../../../utils/types";
import cardStyles from './card.module.css';
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

class Card extends Component {
    render() {
        const {image, price, name, count} = this.props;
        return (
            <div className={`${cardStyles.wrapper} pb-8`}>
                <img src={image} alt="image" width={240} height={120} className='pl-4 pr-4'/>
                <Counter count={count} size="default" />
                <div className='pt-1 pb-1 flex justify-center'>
                    <p className="text text_type_digits-default pr-2">{price}</p>
                    <CurrencyIcon  type='primary'/>
                </div>
                <div className={cardStyles.description}>
                    <p className="text text_type_main-default">
                        {name}
                    </p>
                </div>
            </div>
        )
    }
}

Card.propTypes = cardItemProps.isRequired;

export default Card;

