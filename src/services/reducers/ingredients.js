import {
    CLEAR_INGREDIENTS_DETAILS,
    GET_INGREDIENTS_ERROR,
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    SET_INGREDIENTS_DETAILS
} from "../actions/ingredients";
import {fetchableDefault} from "../../constants";

const initialState = {
    ...fetchableDefault,
    details:null,
    list:[],
}

export const ingredientsReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_INGREDIENTS_REQUEST: {
            return  {
                ...state,
                isFetching: true,
                isFailed: false,
                isFetched: false,
            };
        }
        case GET_INGREDIENTS_SUCCESS: {
            const {payload} = action;
            return {
                ...state,
                list:payload,
                isFetching: false,
                isFailed: false,
                isFetched: true,
            };
        }
        case GET_INGREDIENTS_ERROR: {
            return {
                ...state,
                list:[],
                isFetching: false,
                isFailed: false,
                isFetched: false,
            };
        }
        case SET_INGREDIENTS_DETAILS: {
            return {
                ...state,
                details: action.payload
            };
        }
        case CLEAR_INGREDIENTS_DETAILS: {
            return {
                ...state,
                details: null
            };
        }
        default:
            return state;
    }
}

export class constructorReducer {
}
