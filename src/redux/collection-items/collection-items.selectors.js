import {createSelector} from 'reselect'

const selectCollectionItems = state => state.itemCollection;

export const selectCollectionItemsData=createSelector(
    [selectCollectionItems],
    itemCollection=>itemCollection.collectionItemsData
)