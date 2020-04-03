import React from "react";
import "./CheckOutItem.style.scss";
import { connect } from "react-redux";
import { removeCartItem, removeItem ,addItems} from "../../reducer/cart/cartAction";

const CheckOutItems = ({ cartItem, quantity, removeCartItem,removeItem,addItems }) => {
  const { name, imageUrl, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={()=>{removeItem(cartItem)}}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={()=>addItems(cartItem)}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeCartItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeCartItem: item => dispatch(removeCartItem(item)),
  removeItem:item=>dispatch(removeItem(item)),
  addItems:item=>dispatch(addItems(item))

});

export default connect(null, mapDispatchToProps)(CheckOutItems);
