import { IItem, IItems, IOrderedItems, IStoreItemAction, IStoreItemsAction, IStoreOrderedItemsAction } from '../interfaces/items.interfaces';

// Types
export const STORE_ITEM: string = 'STORE_ITEM';
export const STORE_ITEMS: string = 'STORE_ITEMS';
export const STORE_ORDERED_ITEMS: string = 'STORE_ORDERED_ITEMS';

// Actions
export const StoreItemAction = (data: IItem): IStoreItemAction => {
    return {type: STORE_ITEM, payload: data};
};

export const StoreItemsAction = (data: IItems): IStoreItemsAction => {
    return {type: STORE_ITEMS, payload: data};
};

export const StoreOrderedItemsAction = (data: IOrderedItems): IStoreOrderedItemsAction => {
    return {type: STORE_ORDERED_ITEMS, payload: data};
};
