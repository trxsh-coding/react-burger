
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

export const getItemsByType = (type, items) => items.filter(el => el.type === type);
