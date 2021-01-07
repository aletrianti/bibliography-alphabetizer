import React from "react";
import "./App.css";

import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import List from "./components/List/List";
import { connect } from "react-redux";
import { IItems, IOrderedItems } from "./store/interfaces/items.interfaces";
import { StoreOrderedItemsAction } from "./store/actions/items.actions";

interface AppProps {
    items: IItems;
    orderedItems: IOrderedItems;
    storeOrderedItems: (items: IOrderedItems) => any;
}

class App extends React.Component<AppProps> {
    orderList = (): void => {
        const { items } = this.props.items;
        const itemsCopy = [...items];

        const ordered = itemsCopy.sort((prev: any, next: any) => {
            const prevItem = prev.item.toLowerCase();
            const nextItem = next.item.toLowerCase();

            if (prevItem > nextItem) return 1;
            if (prevItem < nextItem) return -1;
            return 0;
        });

        this.props.storeOrderedItems({ items: ordered });
    };

    clearList = (): void => {
        window.location.reload();
    };

    render() {
        return (
            <div className="App">
                <h1 id="app__header">Bibliography Alphabetizer</h1>
                <div id="app__content__container">
                    <div id="app__content--left">
                        <Input />
                        <List isOrderedList={false} />
                        <div id="app__content__btns">
                            <Button
                                isInputButton={false}
                                isResetButton={true}
                                onclickfunction={this.clearList}
                            />
                            <Button
                                isInputButton={false}
                                onclickfunction={this.orderList}
                            />
                        </div>
                    </div>
                    <div id="app__content--right">
                        <List isOrderedList={true} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        items: state.items,
        orderedItems: state.orderedItems,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        storeOrderedItems: (items: IOrderedItems) =>
            dispatch(StoreOrderedItemsAction(items)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
