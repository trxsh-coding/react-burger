import {
    ADD_CONSTRUCTOR_ITEM,
    CLEAR_CONSTRUCTOR_ITEMS,
    REMOVE_CONSTRUCTOR_ITEM,
    SORT_CONSTRUCTOR_ITEM
} from "../actions/constructor";
import {ingredientsTypes} from "../../components/ingridients/utils";
import {nanoid} from "@reduxjs/toolkit";


const initialState = {
    bun: null,
    main: []
}

export const constructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONSTRUCTOR_ITEM: {
            const {payload} = action;
            if (payload.type === ingredientsTypes.bun) {
                return {
                    ...state,
                    bun: payload
                }
            } else {
                return {
                    ...state,
                    main: [
                        ...state.main,
                        {...payload, nanoId: nanoid()}
                    ]
                }
            }
        }
        case REMOVE_CONSTRUCTOR_ITEM: {
            return {
                ...state,
                main: [
                    ...state.main.slice(0, action.payload),
                    ...state.main.slice(action.payload + 1)
                ]
            }
        }
        case SORT_CONSTRUCTOR_ITEM: {
            const {payload} = action;
            const dragItem = state.main.splice(payload.dragIndex, 1);
            const list = [
                ...state.main.slice(0, payload.hoverIndex),
                ...dragItem,
                ...state.main.slice(payload.hoverIndex, state.main.length)
            ]

            return ({
                ...state,
                main: list
            })
        }
        case CLEAR_CONSTRUCTOR_ITEMS: {
            return initialState;
        }
        default:
            return state

    }
}
