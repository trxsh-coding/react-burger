import {fetchableDefault} from "../../constants";
import {CLEAR_ORDER, GET_ORDER_ERROR, GET_ORDER_REQUEST, GET_ORDER_SUCCESS} from "../actions/order";

const initialState = {
    orderNo: null,
    ...fetchableDefault,
};

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDER_REQUEST: {
            return {
                ...state,
                isFetching: true,
                isFetched: false,
                isFailed: false,
            };
        }
        case GET_ORDER_SUCCESS: {
            return {
                ...state,
                orderNo: action.payload,
                isFetching: false,
                isFetched: true,
                isFailed: false,
            };
        }
        case GET_ORDER_ERROR: {
            return {
                ...state,
                isFetching: false,
                isFetched: false,
                isFailed: true,
            };
        }
        case CLEAR_ORDER: {
            return {
                ...state,
                orderNo: null,
                isFetching: false,
                isFetched: false,
                isFailed: false,
            };
        }

        default:
            return state;
    }
};
