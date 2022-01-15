import React from "react";
import "../../css/items/Item.css"

export const Item = ({
    title,
    content,
    color
}) => {

    const background = color + "52"

    return (
        <div className="Item">
            <div className="item-dot">
                <div
                    className="item-circle"
                    style={{ backgroundColor: background}}
                >
                    <div
                        className="item-circle-center"
                        style={{ backgroundColor: color }}
                    ></div>
                </div>
            </div>
            <div className="item-content">
                <div className="item-title">
                    <h3>{title}</h3>
                </div>
                <div className="item-body">
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
};
