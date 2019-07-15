import * as ActionTypes from '../Action/Type';
import browserhistory from '../Utils/browserHistory';
const initialState = {
    username: '',
    Password: ''

};
export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SIGNUP: {
            browserhistory.push("/signup");
            return { ...state }

            break;
        }


        default:
            return state;
    }
}