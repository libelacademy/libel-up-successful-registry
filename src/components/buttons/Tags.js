import React from "react";
import "../../css/buttons/Tags.css";

import { IoAdd } from "react-icons/io5";

const Tags = ({ id, tag, width, active, handleContent }) => {

    return (
        <button
            className="Tags"
            style={{ width: width }}
            onClick={() => {
                handleContent(id);
            }}
        >
            {tag}
            <span className={active ? "tags-circle tag-active" : "tags-circle"}>
                <IoAdd />
            </span>
        </button>
    );
};

export default Tags;
