export interface IItem {
    item: string;
}

export interface IItems {
    items: IItem[];
}

export interface IOrderedItems {
    items: IItem[];
}

export interface IStoreItemAction {
    type: string;
    payload: IItem;
}

export interface IStoreItemsAction {
    type: string;
    payload: IItems;
}

export interface IStoreOrderedItemsAction {
    type: string;
    payload: IOrderedItems;
}

