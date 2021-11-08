import constructorStyles from './constructor.module.css'
import {Button, ConstructorElement, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal";
import OrderDetails from "./OrderDetails";
import {useDrop} from "react-dnd";
import {useDispatch, useSelector} from "react-redux";
import {ADD_CONSTRUCTOR_ITEM, REMOVE_CONSTRUCTOR_ITEM} from "../../services/actions/constructor";
import BurgerConstructorItem from "./BugerConstructorList";
import {CLEAR_ORDER, getOrderNo} from "../../services/actions/order";

const BurgerConstructor = () => {

    const dispatch = useDispatch();

    const {
        bun: bunItem,
        main: constructorItems
    } = useSelector(s => s.construction);

    const orderNumber = useSelector(s => s.order.orderNo);

     const getTotalPrice = () => {

        const bunItemPrice = bunItem?.price * 2;

        let constructorItemsPrice = 0;

         constructorItems?.forEach(item => {
             constructorItemsPrice += item?.price;
        });

        return bunItemPrice + constructorItemsPrice;
    }
    const [, dropTargetRef] = useDrop({
        accept: ['ingredient'],
        drop(item) {
            dispatch({type: ADD_CONSTRUCTOR_ITEM, payload: item})
        },
    });
    const onGetOrder = () =>
        bunItem && dispatch(getOrderNo([bunItem._id, ...constructorItems.map(item => item._id), bunItem._id]));

    const onItemRemove = (index) => dispatch({type:REMOVE_CONSTRUCTOR_ITEM, payload:index})
    const onOrderClear = () => dispatch({type:CLEAR_ORDER})
    return (
        <>
            <Modal
                open={!!orderNumber}
                onClose={onOrderClear}>
                <OrderDetails orderNumber={orderNumber}/>
            </Modal>
            <div>
                <div className={`${constructorStyles.wrapper} mt-25`} ref={dropTargetRef}>
                    <div className={`${constructorStyles.constructor} ml-4 mb-4`}>
                            {bunItem && (
                                <div className='pl-8 mb-3'>
                                    <ConstructorElement
                                        type='top'
                                        isLocked
                                        price={bunItem.price}
                                        text={bunItem.name + ' (верх)'}
                                        thumbnail={bunItem.image}/>
                                </div>
                            )}
                            <div className={`${constructorStyles.list} scrollbar`}>
                                {constructorItems.map((item, index) => (
                                    <BurgerConstructorItem
                                        key={index}
                                        item={item}
                                        onItemRemove={onItemRemove}
                                        index={index}/>
                                ))}
                            </div>
                        {bunItem && (
                            <div className={`${constructorStyles.bottom} pl-8`}>
                                <ConstructorElement
                                    type='bottom'
                                    isLocked
                                    price={bunItem.price}
                                    text={bunItem.name + ' (низ)'}
                                    thumbnail={bunItem.image}/>
                            </div>

                        )}
                    </div>
                </div>
                <div className={`${constructorStyles.button} flex justify-end align-center`}>
                    <div className='flex mr-10'>
                        <p className="text text_type_digits-medium mr-2">{getTotalPrice() || 0}</p>
                        <CurrencyIcon type='primary'/>
                    </div>
                    <Button type="primary" size="medium" onClick={onGetOrder}>
                        Оформить заказ
                    </Button>
                </div>
            </div>
        </>
    )
}



export default BurgerConstructor;
