import React, { MouseEvent } from "react";
import "./Button.css";

interface ButtonProps {
    isInputButton: boolean;
    onclickfunction: any;
    isResetButton?: boolean;
}

class Button extends React.Component<ButtonProps> {
    clickBtn = (e: MouseEvent): void => {
        e.stopPropagation();

        this.props.onclickfunction();
    };

    render() {
        return (
            <>
                {this.props.isInputButton ? (
                    <button
                        className="btn btn__input"
                        onClick={(e: MouseEvent) => this.clickBtn(e)}
                    >
                        Add item
                    </button>
                ) : (
                    [
                        this.props.isResetButton ? (
                            <button
                                key="btn__reset"
                                className="btn btn__reset"
                                onClick={(e: MouseEvent) => this.clickBtn(e)}
                            >
                                Reset
                            </button>
                        ) : (
                            <button
                                key="btn__order"
                                className="btn btn__order"
                                onClick={(e: MouseEvent) => this.clickBtn(e)}
                            >
                                Order list
                            </button>
                        ),
                    ]
                )}
            </>
        );
    }
}

export default Button;
