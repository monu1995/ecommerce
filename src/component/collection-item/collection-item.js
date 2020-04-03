import React from "react";
import "./collection-item.style.scss";
import { connect } from "react-redux";
import CustomButton from "../custom-button/CustomButton";
import { addItems } from "../../reducer/cart/cartAction";

const CollectionItem = ({ item, addItems }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItems(item)} inverted>
        Add To Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItems: item => dispatch(addItems(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
