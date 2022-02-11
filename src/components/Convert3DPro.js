import React, { useRef } from "react";
import "../css/Convert3DPro.css";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import line from "../images/underline.png";
import technologies from "../utils/profesional3d";

import Carousel from "react-elastic-carousel";

const Convert3DPro = () => {

    const carousel = useRef(null);


    const technologiesList = technologies.map((tech) => (
        <img key={tech} src={tech} alt="technology 3d" />
    ));

    const breakPoints = [
        { width: 1, itemsToShow: 1, itemsToScroll: 1 },
        { width: 375, itemsToShow: 3, itemsToScroll: 1 },
        { width: 768, itemsToShow: 6, itemsToScroll: 1 },
        { width: 1200, itemsToShow: 6, itemsToScroll: 1 },
    ];

     return (
        <section className="Convert3DPro">
            <div className="convert-container container padding">
                <div className="convert-header">
                    <h1>
                        CONVIÉRTETE EN <br />
                        <span>PROFESIONAL 3D</span>
                        <img
                            className="convert-underline"
                            src={line}
                            alt="underline"
                        />
                    </h1>
                    <p>
                        Alcanza el nivel que deseas en menos de un año. Aprende
                        y descubre sobre la industria creativa mas rentable del
                        mercado.
                    </p>
                </div>
                <div className="convert-content">
                    <Carousel
                        ref={carousel}
                        breakPoints={breakPoints}
                        pagination={false}
                        showArrows={false}
                        
                        className="convert-carousel"
                    >
                        {technologiesList}
                    </Carousel>
                    <button
                        className="nav-buttons convert-previous"
                        onClick={() => {
                            carousel.current.slidePrev();
                        }}
                    >
                        <IoChevronBack />
                    </button>

                    <button
                        className="results-buttons convert-next"
                        onClick={() => {
                            carousel.current.slideNext();
                        }}
                    >
                        <IoChevronForward />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Convert3DPro;
