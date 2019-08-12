import * as ActionTypes from '../Action/Type';
// import browserhistory from '../Utils/browserHistory';
const initialState = {
    email: '',
    password: ''
};
export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN: {
            return { ...state }
            break;
        }
        default:
            return state;
    }
}