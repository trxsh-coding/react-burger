import {useCallback, useRef, useState} from "react";
import ingredientsStyles from './ingidients.module.css'
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import {
    getItemsByType,
    getTitle,
    ingredientsTypesTitle,
    ingredientsTypes,
    getBunItemConstructorCount, getItemsConstructorCount
} from "./utils";
import CardList from "./cardList";
import Modal from "../modal";
import IngredientDetails from "./card/IngredientDetails";
import PropTypes from "prop-types";
import {cardItemProps} from "../../utils/types";
import {useDispatch, useSelector} from "react-redux";
import {CLEAR_INGREDIENTS_DETAILS, SET_INGREDIENTS_DETAILS} from "../../services/actions/ingredients";

const BurgerIngredients = ({items}) => {
    const [currentTab, setCurrentTab] = useState(ingredientsTypes.bun)
    const dispatch = useDispatch();
    const resetCurrentItem = _ => dispatch({type: CLEAR_INGREDIENTS_DETAILS});
    const onSetCurrentItem = (item) => dispatch({type: SET_INGREDIENTS_DETAILS, payload: item});

    const detailItem = useSelector(state => state.ingredients.details)

    const onSetCurrentTab = (tab) => setCurrentTab(tab);
    const bunRef = useRef();
    const sauceRef = useRef();
    const mainRef = useRef();
    const tabsRef = useRef();

    const bunItems = getItemsByType(ingredientsTypes.bun, items);
    const sauceItems = getItemsByType(ingredientsTypes.sauce, items);
    const mainItems = getItemsByType(ingredientsTypes.main, items);

    const constructorItems = useSelector(state => state.construction.main);
    const constructorBunItem = useSelector(state => state.construction.bun);

    const bunCounter = useCallback(
        (id) =>
            getBunItemConstructorCount(constructorBunItem?._id, id),
        [constructorBunItem]
    );
    const counter = useCallback(
        (id) =>
            getItemsConstructorCount(constructorItems)[id],
        [constructorItems]
    );

    const checkTab = (e) => {
        const topPosition = e.target.getBoundingClientRect().top;

        const bunPosition = Math.abs(topPosition - bunRef.current.getBoundingClientRect().top);

        const saucePosition = topPosition - sauceRef.current.getBoundingClientRect().top;

        const mainPosition = topPosition - mainRef.current.getBoundingClientRect().top;


        if (bunPosition > 0 && bunPosition < 100) {
            setCurrentTab(ingredientsTypes.bun);
        } else if (saucePosition > 0 && saucePosition < 100) {
            setCurrentTab(ingredientsTypes.sauce);
        } else if(mainPosition > 0 && mainPosition < 100){
            setCurrentTab(ingredientsTypes.main);
        }



    }

    return (
        <>
            <Modal open={!!detailItem} onClose={resetCurrentItem} title='Детали ингредиента'>
                <IngredientDetails {...detailItem} />
            </Modal>
            <div className={`${ingredientsStyles.wrapper} pt-10 pb-5`}>
                <p className="text text_type_main-large text-align-left pb-5">
                    {getTitle()}
                </p>
                <div className='flex'>
                    <Tab value={ingredientsTypes.bun}
                         active={currentTab === ingredientsTypes.bun}
                         onClick={onSetCurrentTab}>
                        {ingredientsTypesTitle[ingredientsTypes.bun]}
                    </Tab>
                    <Tab value={ingredientsTypes.sauce}
                         active={currentTab === ingredientsTypes.sauce}
                         onClick={onSetCurrentTab}>
                        {ingredientsTypesTitle[ingredientsTypes.sauce]}
                    </Tab>
                    <Tab value={ingredientsTypes.main}
                         active={currentTab === ingredientsTypes.main}
                         onClick={onSetCurrentTab}>
                        {ingredientsTypesTitle[ingredientsTypes.main]}
                    </Tab>
                </div>
                <div className={`${ingredientsStyles.list} scrollbar`} ref={tabsRef} onScroll={checkTab}>
                    <div ref={bunRef} className='relative'>
                        <CardList
                            onOpen={onSetCurrentItem}
                            title={ingredientsTypesTitle[ingredientsTypes.bun]}
                            items={bunItems}
                            count={bunCounter}/>
                    </div>
                    <div ref={sauceRef}>
                        <CardList
                            count={counter}
                            onOpen={onSetCurrentItem}
                            title={ingredientsTypesTitle[ingredientsTypes.sauce]}
                            items={sauceItems}/>
                    </div>
                    <div ref={mainRef}>

                        <CardList
                            count={counter}
                            onOpen={onSetCurrentItem}
                            title={ingredientsTypesTitle[ingredientsTypes.main]}
                            items={mainItems}/>
                    </div>
                </div>
            </div>
        </>
    )
}

BurgerIngredients.propTypes = {
    items: PropTypes.arrayOf(cardItemProps).isRequired,
}

export default BurgerIngredients;
