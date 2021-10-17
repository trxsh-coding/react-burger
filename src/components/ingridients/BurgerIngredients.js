import {useState} from "react";
import ingredientsStyles from './ingidients.module.css'
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import {getItemsByType, getTitle, ingredientsTabs, ingredientsTabsTitle} from "./utils";
import CardList from "./cardList";
import Modal from "../modal";
import CardDetails from "./card/cardDetails";
import {data} from "../../utils/data";

const BurgerIngredients = () => {

    const [currentTab, setCurrentTab] = useState(ingredientsTabs.bun)
    const [currentItemId, setCurrentItemId] = useState(null);
    const resetCurrentItem = () => setCurrentItemId(null);
    const onSetCurrentTab = (tab) => setCurrentTab(tab);
    const onSetCurrentItem = (id) => setCurrentItemId(id);

    const currentItem = data.find(el => el._id === currentItemId)


    const bunItems = getItemsByType(ingredientsTabs.bun);
    const sauceItems = getItemsByType(ingredientsTabs.sauce);
    const mainItems = getItemsByType(ingredientsTabs.main);
    console.log(bunItems)
    return (
        <>
            <Modal open={!!currentItemId} onClose={resetCurrentItem}>
                <CardDetails {...currentItem} />
            </Modal>
            <div className={`${ingredientsStyles.wrapper} pt-10 pb-5`}>
                <p className="text text_type_main-large text-align-left">
                    {getTitle()}
                </p>
                <div style={{display: 'flex'}}>
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
                <div className={ingredientsStyles.list}>
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

export default BurgerIngredients;
