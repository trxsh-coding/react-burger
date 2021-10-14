
const elementPositions = {
    top:'top',
    bottom: 'bottom'
}
export const getElementPosition = (index, itemsLength) => {
    switch (true){
        case !index:
            return elementPositions.top;
        case index === itemsLength - 1:
            return elementPositions.bottom;
        default:
            return 'undefined'
    }
}
