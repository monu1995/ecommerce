import React from "react";
import { ReactComponent as Cart } from "../../assets/original.svg";
import { connect } from "react-redux";
import {selectCartItemsCount} from '../../reducer/cart/cartSelector';
import {createStructuredSelector} from 'reselect'

import "./CartIcon.style.scss";
import { toggleCart } from "../../reducer/cart/cartAction";

const CartIcon = ({ toggleCart, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <Cart className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector ({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
