import constructorStyles from "./constructor.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import {cardItemProps} from "../../utils/types";
import {useDrag, useDrop} from "react-dnd";
import {useRef} from "react";
import {itemTypes} from "./utils";
import {useDispatch} from "react-redux";
import {SORT_CONSTRUCTOR_ITEM} from "../../services/actions/constructor";


export const BurgerConstructorItem = (props) => {
    const {onItemRemove, index, item} = props;
    const ref = useRef(null);
    const dispatch = useDispatch();

    const [, drop] = useDrop({
        accept: itemTypes.CONSTRUCTOR_LIST,
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }

            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return;
            }

            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }

            dispatch({
                type: SORT_CONSTRUCTOR_ITEM,
                payload: {
                    dragIndex,
                    hoverIndex
                },
            });
            item.index = hoverIndex;
        },
    });

    const [, drag] = useDrag({
        type: itemTypes.CONSTRUCTOR_LIST,
        item: () => {
            return { id: item.nanoId, index };
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });
    drag(drop(ref));

    return (
        <div className={constructorStyles.item} key={item._id} ref={ref}>
            <div className={constructorStyles.icon}>
                <DragIcon type='primary'/>
            </div>
            <div className='flex'>
                <ConstructorElement
                    price={item.price}
                    text={item.name}
                    handleClose={() => onItemRemove(index)}
                    thumbnail={item.image}/>
            </div>
        </div>
    )
}

BurgerConstructorItem.propTypes = {
    index: PropTypes.number,
    onItemRemove: PropTypes.func.isRequired,
    item: cardItemProps.isRequired,
    nanoId:PropTypes.string
}

export default BurgerConstructorItem;
