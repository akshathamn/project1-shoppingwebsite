import *as ActionTypes from './Type';
export function signup() {
    return function (dispatch) {
        dispatch({
            type: "SIGNUP"
        });
    }
}