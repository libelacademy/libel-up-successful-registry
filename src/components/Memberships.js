import React, { useRef } from "react";
import "../css/Memberships.css";
import dot from "../images/logo_dot_dark.png";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import Carousel from "react-elastic-carousel";

import memberships from "../utils/memberships";
import Membership from "./cards/Membership";

const Memberships = () => {


    const carousel = useRef(null);


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

   
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 460, itemsToShow: 2, itemsToScroll: 1 },
        { width: 768, itemsToShow: 4, itemsToScroll: 1 },
        { width: 1200, itemsToShow: 4, itemsToScroll: 1 },
    ];

    return (
        <div className="Memberships">
            <div className="memberships-container container padding">
                <div className="memberships-header">
                    <div className="memberships-title">
                        <img src={dot} alt="Libel Dot" />
                        <h1>
                            Nuestras
                            <br />
                            Membresías
                        </h1>
                    </div>
                    <a href="https://cursos.libel.academy/collections">
                        VER TODAS{" "}
                        <IoChevronForward style={{ marginLeft: "10px" }} />
                    </a>
                </div>
                <div className="memberships-content">
                    <Carousel
                        ref={carousel}
                        breakPoints={breakPoints}
                        pagination={false}
                        showArrows={false}
                        className="memberships-carousel"
                    >
                        {membershipsList}
                    </Carousel>
                    <button
                        className="nav-buttons memberships-previous"
                        onClick={() => {
                            carousel.current.slidePrev();
                        }}
                    >
                        <IoChevronBack />
                    </button>
                    <button
                        className="nav-buttons memberships-next"
                        onClick={() => {
                            carousel.current.slideNext();
                        }}
                    >
                        <IoChevronForward />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Memberships;
