import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollection = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionForPreview = createSelector(
  [selectCollection],
  (collection) => Object.keys(collection).map((key) => collection[key])
);

export const selectCollections = (collectionUrlParam) =>
  createSelector(
    [selectCollection],
    (collections) => collections[collectionUrlParam]
  );
