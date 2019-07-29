import {combineReducers} from 'redux';
import Signupreducer from './Signupreducer';
import Loginreducer from './Loginreducer';

import errorReducer from "./errorReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
    Signupreducer,
    Loginreducer,

    errors: errorReducer,
    product: productReducer,
  cart: cartReducer
   
});