import {useState} from "react";
import ingredientsStyles from './ingidients.module.css'
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import {getItemsByType, getTitle, ingredientsTabs, ingredientsTabsTitle} from "./utils";
import CardList from "./cardList";
import Modal from "../modal";
import IngredientDetails from "./card/IngredientDetails";
import PropTypes from "prop-types";
import {cardItemProps} from "../../utils/types";

const BurgerIngredients = ({items}) => {
    const [currentTab, setCurrentTab] = useState(ingredientsTabs.bun)
    const [currentItemId, setCurrentItemId] = useState(null);

    const resetCurrentItem = () => setCurrentItemId(null);
    const onSetCurrentTab = (tab) => setCurrentTab(tab);
    const onSetCurrentItem = (id) => setCurrentItemId(id);

    const currentItem = items.find(el => el._id === currentItemId)


    const bunItems = getItemsByType(ingredientsTabs.bun, items);
    const sauceItems = getItemsByType(ingredientsTabs.sauce, items);
    const mainItems = getItemsByType(ingredientsTabs.main, items);


    return (
        <>
            <Modal open={!!currentItemId} onClose={resetCurrentItem} title='Детали ингредиента'>
                <IngredientDetails {...currentItem} />
            </Modal>
            <div className={`${ingredientsStyles.wrapper} pt-10 pb-5`}>
                <p className="text text_type_main-large text-align-left pb-5">
                    {getTitle()}
                </p>
                <div className='flex'>
                    <Tab value={ingredientsTabs.bun}
                         active={currentTab === ingredientsTabs.bun}
                         onClick={onSetCurrentTab}>
                        {ingredientsTabsTitle[ingredientsTabs.bun]}
                    </Tab>
                    <Tab value={ingredientsTabs.sauce}
                         active={currentTab === ingredientsTabs.sauce}
                         onClick={onSetCurrentTab}>
                        {ingredientsTabsTitle[ingredientsTabs.sauce]}
                    </Tab>
                    <Tab value={ingredientsTabs.main}
                         active={currentTab === ingredientsTabs.main}
                         onClick={onSetCurrentTab}>
                        {ingredientsTabsTitle[ingredientsTabs.main]}
                    </Tab>
                </div>
                <div className={`${ingredientsStyles.list} scrollbar`}>
                    <CardList
                        onOpen={onSetCurrentItem}
                        title={ingredientsTabsTitle[ingredientsTabs.bun]}
                        items={bunItems}/>
                    <CardList
                        onOpen={onSetCurrentItem}
                        title={ingredientsTabsTitle[ingredientsTabs.sauce]}
                        items={sauceItems}/>
                    <CardList
                        onOpen={onSetCurrentItem}
                        title={ingredientsTabsTitle[ingredientsTabs.main]}
                        items={mainItems}/>
                </div>
            </div>
        </>
    )
}

BurgerIngredients.propTypes = {
    items: PropTypes.arrayOf(cardItemProps).isRequired,
}

export default BurgerIngredients;
