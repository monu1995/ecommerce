import React from "react";
import "./CheckOut.style.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, cartTotal } from "../../reducer/cart/cartSelector";
import CheckOutItems from "../../component/checkoutitem/CheckOutItem";

const CheckOut = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckOutItems
          key={cartItem.cartItemToAdd.id}
          cartItem={cartItem.cartItemToAdd}
          quantity={cartItem.quantity}
        />
      ))}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: cartTotal
});

export default connect(mapStateToProps)(CheckOut);
