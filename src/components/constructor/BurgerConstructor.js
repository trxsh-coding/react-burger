import constructorStyles from './constructor.module.css'
import {Button, ConstructorElement, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {getElementPosition} from "./utils";
import Modal from "../modal";
import {useState} from "react";
import OrderDetails from "./OrderDetails";
import PropTypes from "prop-types";
import {cardItemProps} from "../../utils/types";
import {ingredientsTabs} from "../ingridients/utils";

const BurgerConstructor = ({items}) => {

    const [isModalOpen, setModalOpen] = useState(false);
    const bunItem = items[0];
    const constructorItems = [...items].slice(1, items.length)
        .filter(el => el.type !== ingredientsTabs.bun);

    console.log(constructorItems)

    return (
        <>
            <Modal
                open={isModalOpen}
                onClose={() => setModalOpen(false)}>
                <OrderDetails/>
            </Modal>
            <div>
                <div className={`${constructorStyles.wrapper} mt-25`}>
                    <div className={`${constructorStyles.constructor} ml-4 mb-4`}>
                        <ConstructorElement
                            type='top'
                            isLocked
                            price={bunItem.price}
                            text={bunItem.name}
                            thumbnail={bunItem.image}/>
                        <div className={`${constructorStyles.list} scrollbar`}>
                            {constructorItems.map((item) => (
                                <div className={constructorStyles.item} key={item._id}>
                                    <ConstructorElement
                                        price={item.price}
                                        text={item.name}
                                        thumbnail={item.image}/>
                                </div>
                            ))}
                        </div>
                        <ConstructorElement
                            type='bottom'
                            isLocked
                            price={bunItem.price}
                            text={bunItem.name}
                            thumbnail={bunItem.image}/>
                    </div>
                </div>
                <div className={`${constructorStyles.button} flex justify-end mt-10 align-center`}>
                    <div className='flex mr-10'>
                        <p className="text text_type_digits-medium mr-2">610</p>
                        <CurrencyIcon type='primary'/>
                    </div>
                    <Button type="primary" size="medium" onClick={() => setModalOpen(true)}>
                        Оформить заказ
                    </Button>
                </div>
            </div>
        </>
    )
}

BurgerConstructor.propTypes = {
    items: PropTypes.arrayOf(cardItemProps).isRequired,
}

export default BurgerConstructor;
