import *as ActionTypes from './Type';
export function sign() {
    return function (dispatch) {
        dispatch({
            type: "SIGNUP"
        });
    }
}