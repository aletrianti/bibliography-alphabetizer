import { IItem, IItems, IOrderedItems, IStoreItemAction, IStoreItemsAction, IStoreOrderedItemsAction } from '../interfaces/items.interfaces';
import { STORE_ITEM, STORE_ITEMS, STORE_ORDERED_ITEMS } from '../actions/items.actions';

// Reducers
export const storeItemReducer = (state: IItem = { item: '' }, action: IStoreItemAction) => {
    switch (action.type) {
    case STORE_ITEM:
      return {
        ...state,
        item: action.payload.item,
      };
    default:
      return state;
  }
}

export const storeItemsReducer = (state: IItems = { items: [] }, action: IStoreItemsAction) => {
    switch (action.type) {
    case STORE_ITEMS:
      return {
        ...state,
        items: [...state.items, action.payload.items[0]],
      };
    default:
      return state;
  }
}

export const storeOrderedItemsReducer = (state: IOrderedItems = { items: [] }, action: IStoreOrderedItemsAction) => {
    switch (action.type) {
    case STORE_ORDERED_ITEMS:
      return {
        ...state,
        items: action.payload.items,
      };
    default:
      return state;
  }
}
