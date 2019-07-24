import * as ActionTypes from '../Action/Type';

const initialState = {
    email: '',
    password: '',
    confirmpassword:''

};
export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SIGNUP: {
          
            return { ...state }

            break;
        }


        default:
            return state;
    }
}