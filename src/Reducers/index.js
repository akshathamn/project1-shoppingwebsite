import {combineReducers} from 'redux';
import Signupreducer from './Signupreducer';
import Loginreducer from './Loginreducer';

import Productreducer from './Productreducer';

export default combineReducers({
    Signupreducer,
    Loginreducer,
    Productreducer
});