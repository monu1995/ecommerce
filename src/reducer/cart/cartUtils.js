export const addItemToCart = (cartItems, cartItemToAdd) => {
  if (cartItems) {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.cartItemToAdd.id === cartItemToAdd.id
    );
    if (existingCartItem) {
      return cartItems.map(cartItem =>
        cartItem.cartItemToAdd.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  }
  return [...cartItems, { cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.cartItemToAdd.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(
      cartItem => cartItem.cartItemToAdd.id !== cartItemToRemove.id
    );
  }
  return cartItems.map(cartItem =>
    cartItem.cartItemToAdd.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
