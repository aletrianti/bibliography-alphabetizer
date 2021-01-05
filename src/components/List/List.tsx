import React from "react";
import { connect } from "react-redux";
import "./List.css";

import {
    StoreItemsAction,
    StoreOrderedItemsAction,
} from "../../store/actions/items.actions";
import { IItems, IOrderedItems } from "../../store/interfaces/items.interfaces";

interface ListProps {
    isOrderedList: boolean;
    items: IItems;
    orderedItems: IOrderedItems;
}

class List extends React.Component<ListProps> {
    render() {
        const { items, orderedItems } = this.props;

        return (
            <>
                {this.props.isOrderedList ? (
                    <div className="list list--ordered">
                        <ul>
                            {orderedItems.items.map((listItem, i) => {
                                return <li key={i}>{listItem.item}</li>;
                            })}
                        </ul>
                    </div>
                ) : (
                    <div className="list list--original">
                        <ul>
                            {items.items.map((listItem, i) => {
                                return <li key={i}>{listItem.item}</li>;
                            })}
                        </ul>
                    </div>
                )}
            </>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        items: state.items,
        orderedItems: state.orderedItems,
    };
};

export default connect(mapStateToProps)(List);
