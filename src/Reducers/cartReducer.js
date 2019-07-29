import { ADD_CART_ITEM, REMOVE_CART_ITEM, GET_CART } from "../Action/Type";

const initialState = {
  cart: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_CART_ITEM:
      let cartState = JSON.parse(localStorage.getItem("Cart"));
      cartState = cartState ? cartState : [];

      localStorage.setItem(
        "Cart",
        JSON.stringify([...cartState, action.payload])
      );

      return {
        ...state,
        cart: JSON.parse(localStorage.getItem("Cart"))
      };
    case GET_CART:
      return {
        ...state,
        cart: action.payload
      };
    case REMOVE_CART_ITEM:
      cartState = JSON.parse(localStorage.getItem("Cart"));
      cartState = cartState ? cartState : [];

      localStorage.setItem(
        "Cart",
        JSON.stringify([
          ...cartState.filter(cartItem => cartItem._id !== action.payload)
        ])
      );

      return {
        ...state,
        cart: JSON.parse(localStorage.getItem("Cart"))
      };
    default:
      return state;
  }
}