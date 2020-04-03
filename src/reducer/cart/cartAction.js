import { TOGGLE_CART, ADD_ITEMS, REMOVE_CART_ITEM ,REMOVE_ITEM} from "../type";

export const toggleCart = () => ({
  type: TOGGLE_CART
});

export const addItems = item => ({
  type: ADD_ITEMS,
  payload: item
});

export const removeCartItem=item=>({
  type:REMOVE_CART_ITEM,
  payload:item
})

export const removeItem=item=>({
  type:REMOVE_ITEM,
  payload:item
})
