import {createSelector} from 'reselect'

const selectCollectionItems = state => state.itemCollection;

export const selectCollectionItemsData=createSelector(
    [selectCollectionItems],
    itemCollection=> Object.keys(itemCollection.collectionItemsData).map(Key=> itemCollection.collectionItemsData[Key])
)