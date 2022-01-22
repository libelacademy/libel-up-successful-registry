import React from "react";
import "../../css/cards/Master.css";

import { IoAdd } from "react-icons/io5";

const Master = ({ image, title, professor, technology, url }) => {
    return (
        <div className="Master">
            <div className="master-content">
                <div className="master-image">
                    <div className="cover-image">
                        <a href={url} className="master-more">
                            <IoAdd />
                        </a>
                    </div>
                    <img src={image} alt="Result" />
                </div>
                <div className="master-professor">
                    <h3>{title}</h3>
                    <p>{professor}</p>
                </div>
            </div>
            <div className="master-technology">
                <img src={technology} alt="tech" />
            </div>
        </div>
    );
};

export default Master;
