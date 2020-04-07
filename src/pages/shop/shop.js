import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import collectionsOverView from "../../component/collectionoverview/collectionsOverView";
import Collection from "../collection/collection";

const Shop = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={collectionsOverView} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  // collections: selectCollection
});

export default connect(mapStateToProps)(Shop);
