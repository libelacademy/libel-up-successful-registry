import React from 'react'
import "../css/Trailer.css"
import {IoPlay} from "react-icons/io5"

const Trailer = () => {
    return <div className="Trailer">
        <button className='play'>
            <IoPlay />
        </button>
        <h1 className='trailer-title'>VER TRAILER</h1>
    </div>;
}

export default Trailer
