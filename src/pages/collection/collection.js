import React from "react";
import "./collection.style.scss";
import { connect } from "react-redux";
import { selectCollections } from "../../reducer/shop/shopSelectors";

import CollectionItems from "../../component/collection-item/collection-item";
const Collection = ({ collections,match }) => {
    console.log('========',match.params.collectionId);
    
  const { items, title } = collections;

  return (
    <div className="collection-page">
      <h2 class="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItems id={item.id} item={item} />
        ))}
      </div>
      <div></div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collections: selectCollections(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
