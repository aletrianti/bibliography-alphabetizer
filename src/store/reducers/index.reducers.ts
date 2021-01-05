import { combineReducers } from '@reduxjs/toolkit';
import { storeItemReducer, storeItemsReducer, storeOrderedItemsReducer } from './items.reducers';

export const reducers: any = combineReducers({
    currentItem: storeItemReducer,
    items: storeItemsReducer,
    orderedItems: storeOrderedItemsReducer
});
