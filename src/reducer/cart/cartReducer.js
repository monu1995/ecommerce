import { TOGGLE_CART, ADD_ITEMS, REMOVE_CART_ITEM ,REMOVE_ITEM} from "../type";
import { addItemToCart,removeItemFromCart } from "./cartUtils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      return { ...state, hidden: !state.hidden };
    case ADD_ITEMS:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.cartItemToAdd.id !== action.payload.id
        )
      };
      case REMOVE_ITEM:
        return{
          ...state,
          cartItems:removeItemFromCart(state.cartItems,action.payload)
        }
    default:
      return state;
  }
};

export default cartReducer;
