import { createSelector } from "reselect";

//input selector

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulated, cartItem) => accumulated + cartItem.quantity,
      0
    )
);

export const cartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce(
    (accumulated, cartItem) =>
      accumulated + cartItem.quantity * cartItem.cartItemToAdd.price,
    0
  )
);
