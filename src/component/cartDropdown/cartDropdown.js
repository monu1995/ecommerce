import React from "react";
import "./cartDropdown.style.scss";
import { connect } from "react-redux";
import CartItem from "../cartitem/CartItem";
import { selectCartItems } from "../../reducer/cart/cartSelector";
import { createStructuredSelector } from "reselect";
import {withRouter} from 'react-router-dom'

import CustomButton from "../custom-button/CustomButton";
import { toggleCart } from "../../reducer/cart/cartAction";

const CartDropdown = ({ cartItems,history ,toggleCart}) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {// console.log("CARTITEM",cartItems[0].quantity)
       
        cartItems.length?
        cartItems.map(cartItem => (
          <>
            <CartItem
              key={cartItem.cartItemToAdd.id}
              quantity={cartItem.quantity}
              item={cartItem.cartItemToAdd}
            />
          </>
        ))
      :
      <span className='empty-message'>
        Your Cart is Empty
      </span>
      }
      </div>
      <CustomButton onClick={()=>{history.push('/checkout');toggleCart()}}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

const mapDispatchToProps= dispatch=>({
  toggleCart:()=>dispatch(toggleCart())
})

export default withRouter( connect(mapStateToProps,mapDispatchToProps)(CartDropdown));
