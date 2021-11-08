const elementPositions = {
    top: 'top',
    bottom: 'bottom'
}


export const itemTypes = {
    CONSTRUCTOR_LIST: 'constructor-list',
}

export const getTotalPrice = (bunItem, items) => {

    const bunPrice = bunItem?.price * 2;

    let mainPrice = 0;

    items?.forEach(item => {
        mainPrice += item?.price;
    });

    return bunPrice + mainPrice;
}

export const getElementPosition = (index, itemsLength) => {
    switch (true) {
        case !index:
            return elementPositions.top;
        case index === itemsLength - 1:
            return elementPositions.bottom;
        default:
            return 'undefined';
    }
}
