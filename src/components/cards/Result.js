import React from "react";

import "../../css/cards/Result.css"
import {IoAdd} from "react-icons/io5"

const Result = ({imagen, avatar, name, country, url="/#"}) => {
    return (
        <div className="Result">
            <div className="result-image">
                <img src={imagen} alt="Result" />
                <a
                    href={url}
                    target={"_blank"}
                    rel="noreferrer"
                    className="result-more-info"
                >
                    <IoAdd />
                </a>
            </div>
            <div className="result-information">
                <div className="result-student">
                    <img src={avatar} alt="Avatar" />
                    <span>{name}</span>
                </div>
                {country}
            </div>
        </div>
    );
};

export default Result;
