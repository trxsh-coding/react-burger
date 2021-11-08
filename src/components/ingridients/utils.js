
export const ingredientsTypes = {
    bun: 'bun',
    sauce: 'sauce',
    main: 'main'
}
export const ingredientsTypesTitle = {
    bun: 'Булки',
    sauce: 'Соусы',
    main: 'Начинки'
}

export const getTitle = () => 'Соберите бургер';

export const getItemsConstructorCount = (items) => {
    const names = {};
    items.forEach(item => {
        names[item._id] = (names[item._id] || 0) + 1;
    });
    return names;
}
export const getBunItemConstructorCount = (itemId, id) => {
    return  itemId === id ? 2 : 0;
}

export const getItemsByType = (type, items) => items.filter(el => el.type === type);
