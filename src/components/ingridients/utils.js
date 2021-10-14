import {data} from "../../utils/data";

export const ingredientsTabs = {
    bun: 'bun',
    sauce: 'sauce',
    main: 'main'
}
export const ingredientsTabsTitle = {
    bun: 'Булки',
    sauce: 'Соусы',
    main: 'Начинки'
}

export const getTitle = () => 'Соберите бургер';

export const getItemsByType = (type) => data.filter(el => el.type === type);
