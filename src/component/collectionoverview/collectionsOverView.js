import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionForPreview } from "../../reducer/shop/shopSelectors";
import CollectionPreview from "../../component/collection-preview/collection-preview";


const CollectionOverView = ({ collections }) => {
  return (
    <div className="collections-overview">
      
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps =createStructuredSelector ({
  collections: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionOverView);