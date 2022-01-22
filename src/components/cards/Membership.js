import React from "react";
import "../../css/cards/Membership.css";


const Membership = ({ image, icon, name, price, courses, url }) => {
    console.log(image);
    return (
        <div className="Membership">
            <div className="membership-header">
                <img src={image} alt="Header Membership" />
            </div>
            <div className="membership-body">
                <div className="membership-info">
                    <div className="membership-icon">
                        <img src={icon} alt="Membership Icon" />
                    </div>
                    <div className="membership-name">
                        <h4>{name}</h4>
                        <h5>${price}</h5>
                    </div>
                </div>
                <div className="membership-course">
                    <p>
                        {courses}
                        <br />
                        <span>CURSOS</span>
                    </p>
                </div>
                <div className="membership-button">
                    <a href={url}>OBTENER</a>
                </div>
            </div>
        </div>
    );
};

export default Membership;
