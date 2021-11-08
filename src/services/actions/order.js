import {baseUrl} from "../../utils/data";
import {CLEAR_CONSTRUCTOR_ITEMS} from "./constructor";

export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_ERROR = 'GET_ORDER_ERROR';
export const CLEAR_ORDER = 'CLEAR_ORDER';

export const getOrderNo = (ingredients) => dispatch => {
    dispatch({type: GET_ORDER_REQUEST});
    fetch(`${baseUrl}/orders`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ingredients})
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }

            return Promise.reject(`Ошибка ${response.status}`);
        })
        .then(response => {
                dispatch({
                    type: GET_ORDER_SUCCESS,
                    payload: response.order.number
                })
                dispatch({type: CLEAR_CONSTRUCTOR_ITEMS})
            }
        )
        .catch(_ => dispatch({type: GET_ORDER_ERROR}));
};
