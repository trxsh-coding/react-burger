import {baseUrl} from "../../utils/data";

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_ERROR = 'GET_INGREDIENTS_ERROR';
export const SET_INGREDIENTS_DETAILS = 'SET_INGREDIENTS_DETAILS';
export const CLEAR_INGREDIENTS_DETAILS = 'CLEAR_INGREDIENTS_DETAILS';


export const onIngredientsGetItems = () => (dispatch) => {
    dispatch({
        type:GET_INGREDIENTS_REQUEST,
    })

    fetch(`${baseUrl}/ingredients`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(`Ошибка ${response.status}`);
        })
        .then(({data}) => {
            dispatch({
                type:GET_INGREDIENTS_SUCCESS,
                payload:data,
            })
        })
        .catch(e =>   dispatch({type:GET_INGREDIENTS_ERROR}))
}
