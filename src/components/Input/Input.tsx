import React from "react";
import "./Input.css";
import { connect } from "react-redux";

import Button from "../Button/Button";
import {
    StoreItemAction,
    StoreItemsAction,
} from "../../store/actions/items.actions";
import { IItem, IItems } from "../../store/interfaces/items.interfaces";

interface InputProps {
    currentItem: IItem;
    items: IItems;
    storeCurrentItem: (item: IItem) => any;
    storeItems: (items: IItems) => any;
}

class Input extends React.Component<InputProps> {
    addItemToList = (): void => {
        // Add item to list
        let items: any[] = [];

        items.push(this.props.currentItem);

        this.props.storeItems({ items });

        // Clear input
        const inputValue = document.getElementById(
            "input__input"
        ) as HTMLInputElement;

        inputValue.value = "";
    };

    getCurrentItem = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value: string = e.target.value;

        this.props.storeCurrentItem({
            item: value,
        });
    };

    render() {
        return (
            <div id="input__form">
                <label id="input__label" htmlFor="input__input">
                    Your item
                </label>

                <div id="input__container">
                    <input
                        type="text"
                        id="input__input"
                        name="item"
                        placeholder="Add your item here..."
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            this.getCurrentItem(e)
                        }
                    />
                    <Button
                        isInputButton={true}
                        onclickfunction={this.addItemToList}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        currentItem: state.currentItem,
        items: state.items,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        storeCurrentItem: (item: IItem) => dispatch(StoreItemAction(item)),
        storeItems: (items: IItems) => dispatch(StoreItemsAction(items)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
