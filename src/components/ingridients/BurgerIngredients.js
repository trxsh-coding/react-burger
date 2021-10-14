import {Component} from "react";
import ingredientsStyles from './ingidients.module.css'
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import {getItemsByType, getTitle, ingredientsTabs, ingredientsTabsTitle} from "./utils";
import CardList from "./cardList";

class BurgerIngredients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: ingredientsTabs.bun
        }
    }

    onSetCurrent = (item) => this.setState({current: item});

    bunItems = getItemsByType(ingredientsTabs.bun);
    sauceItems = getItemsByType(ingredientsTabs.sauce);
    mainItems = getItemsByType(ingredientsTabs.main);

    render() {
        return (
            <div className={`${ingredientsStyles.wrapper} pt-10 pb-5`}>
                <p className="text text_type_main-large text-align-left">
                    {getTitle()}
                </p>
                <div style={{display: 'flex'}}>
                    <Tab value={ingredientsTabs.bun}
                         active={this.state.current === ingredientsTabs.bun}
                         onClick={this.onSetCurrent}>
                        {ingredientsTabsTitle[ingredientsTabs.bun]}
                    </Tab>
                    <Tab value={ingredientsTabs.sauce}
                         active={this.state.current === ingredientsTabs.sauce}
                         onClick={this.onSetCurrent}>
                        {ingredientsTabsTitle[ingredientsTabs.sauce]}
                    </Tab>
                    <Tab value={ingredientsTabs.main}
                         active={this.state.current === ingredientsTabs.main}
                         onClick={this.onSetCurrent}>
                        {ingredientsTabsTitle[ingredientsTabs.main]}
                    </Tab>
                </div>
                <div className={ingredientsStyles.list}>
                    <CardList
                        title={ingredientsTabsTitle[ingredientsTabs.bun]}
                        items={this.bunItems}/>
                    <CardList
                        title={ingredientsTabsTitle[ingredientsTabs.sauce]}
                        items={this.sauceItems}/>
                    <CardList
                        title={ingredientsTabsTitle[ingredientsTabs.main]}
                        items={this.mainItems}/>
                </div>
            </div>
        )
    }
}

export default BurgerIngredients;
