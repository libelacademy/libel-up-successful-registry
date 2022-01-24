import React, { useRef } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import "../css/Masters.css";

import dot from "../images/logo_dot.png";

import masters from "../utils/featruredMasters";
import Master from "./cards/Master";

import Carousel from "react-elastic-carousel";

import decorationRight from "../images/decorations/01.png";

const Masters = () => {
    const carousel = useRef(null);

    const masterList = masters.map((master, i) => (
        <Master
            key={i}
            image={master.image}
            url={master.url}
            professor={master.professor}
            title={master.title}
            technology={master.technology}
        />
    ));

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 460, itemsToShow: 2, itemsToScroll: 1 },
        { width: 768, itemsToShow: 4, itemsToScroll: 1 },
        { width: 1200, itemsToShow: 4, itemsToScroll: 1 },
    ];

    return (
        <div className="Masters">
            <div className="masters-container container padding">
                <img
                    src={decorationRight}
                    alt="Master Decoration Right"
                    className="master-decoration-right"
                />

                <div className="masters-header">
                    <div className="masters-title">
                        <img src={dot} alt="Libel Dot" />
                        <h1>
                            MÁSTERES
                            <br />
                            DESTACADOS
                        </h1>
                    </div>
                    <div className="masters-text">
                        <h2>
                            ¡Obtén <br />
                            <span className="color">
                                sorprendentes
                                <br />
                                resultados
                            </span>{" "}
                            en <br />
                            corto tiempo!
                        </h2>
                        <p>
                            No necesitas de conocimientos
                            <br />
                            previos. Solamente tienes que
                            <br />
                            adaptarte a{" "}
                            <span className="underline">
                                nuestro plan de estudios.
                            </span>
                        </p>
                        <a
                            href="https://calendly.com/libel"
                            target={"_blank"}
                            rel="noreferrer"
                            className="know-more"
                        >
                            QUIERO SABER MÁS{" "}
                            <IoChevronForward style={{ marginLeft: "2px" }} />
                        </a>
                    </div>
                </div>
                <div className="masters-content">
                    <div className="masters-column-1">{masterList[0]}</div>
                    <div className="masters-column-2">
                        {masterList[1]}
                        {masterList[2]}
                    </div>
                    <div className="masters-column-3">{masterList[3]}</div>
                </div>
                <div className="masters-content-mobile">
                    <Carousel
                        ref={carousel}
                        breakPoints={breakPoints}
                        pagination={false}
                        showArrows={false}
                        className="masters-carousel"
                    >
                        {masterList}
                    </Carousel>
                    <button
                        className="nav-buttons masters-previous"
                        onClick={() => {
                            carousel.current.slidePrev();
                        }}
                    >
                        <IoChevronBack />
                    </button>
                    <button
                        className="nav-buttons masters-next"
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

export default Masters;
