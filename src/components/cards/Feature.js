import React from 'react'
import '../../css/cards/Feature.css'


const Feature = ({image, avatar, name, title}) => {
    return (
        <div className="Feature">
            <img src={image} alt="Feature Project" className="feature-image" />
            <div className="feature-owner">
                <img src={avatar} alt="Avatar" className="feature-avatar" />
                <span className="feature-name">@{name}</span>
            </div>
            <div className="feature-title">
                <h3>{title}</h3>
            </div>
        </div>
    );
}

export default Feature
