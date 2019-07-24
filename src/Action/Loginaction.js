import *as ActionTypes from './Type';
export function log() {
    return function (dispatch) {
        dispatch({
            type: "LOGIN"
        });
    }
}