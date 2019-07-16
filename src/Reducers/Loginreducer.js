import * as ActionTypes from '../Action/Type';
import browserhistory from '../Utils/browserHistory';
const initialState = {
    Email: '',
    Password: ''

};
export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN: {
            browserhistory.push("/Shop");
            return { ...state }

            break;
        }


        default:
            return state;
    }
}