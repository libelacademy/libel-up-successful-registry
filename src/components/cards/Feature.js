import React from "react";
import "../../css/cards/Feature.css";

import { IoPlay } from "react-icons/io5";

const Feature = ({ image, name, title, course }) => {
    return (
        <div className="Feature">
            <div
                className="feature-header"
                style={{ backgroundImage: ` url(${image})` }}
            >
                <button className="feature-video">
                    <IoPlay />
                </button>
            </div>
            <div className="feature-content">
                <div className="feature-owner">
                    <span className="feature-name">{name}</span>
                </div>
                <h3>{title}</h3>
                <h5>{course}</h5>
            </div>
        </div>
    );
};

export default Feature;
