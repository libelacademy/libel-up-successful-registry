import React, { useState } from "react";
import "../css/Memberships.css";
import dot from "../images/logo_dot_dark.png";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import memberships from "../utils/memberships";
import Membership from "./cards/Membership";

const Memberships = () => {

    const [position, setPosition] = useState(0);


    const membershipsList = memberships.map((membership, i) => (
        <Membership
            key={i}
            image={membership.image}
            courses={membership.courses}
            icon={membership.icon}
            name={membership.name}
            price={membership.price}
            url={membership.url}
        />
    ));

        const nextPosition = () => {
            setPosition(position === memberships.length - 1 ? 0 : position + 1);
        };

        const previousPosition = () => {
            setPosition(position === 0 ? memberships.length - 1 : position - 1);
        };

    return (
        <div className="Memberships">
            <div className="memberships-container container padding">
                <div className="memberships-header">
                    <div className="memberships-title">
                        <img src={dot} alt="Libel Dot" />
                        <h1>
                            Resultados
                            <br />
                            Destacados
                        </h1>
                    </div>
                    <a href="https://cursos.libel.academy/collections">
                        VER TODAS{" "}
                        <IoChevronForward style={{ marginLeft: "10px" }} />
                    </a>
                </div>
                <div className="memberships-content">{membershipsList}</div>
                <div className="memberships-content-mobile">
                    {membershipsList[position]}
                    <div className="results-buttons">
                        <button
                            className="result-previous"
                            onClick={() => {
                                previousPosition();
                            }}
                        >
                            <IoChevronBack />
                        </button>
                        <button
                            className="result-next"
                            onClick={() => {
                                nextPosition();
                            }}
                        >
                            <IoChevronForward />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Memberships;
