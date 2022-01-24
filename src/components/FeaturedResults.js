import React, { useRef } from "react";
import "../css/FeaturedResults.css";
import dot from "../images/logo_dot_dark.png";

import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import features from "../utils/featuredResults";

import Feature from "./cards/Feature";
import SeeMoreFeatures from "./cards/SeeMoreFeatures";

import Carousel from "react-elastic-carousel";

const FeaturedResults = () => {
    const carousel = useRef(null);

    const featuredList = features.map((feature, index) => (
        <Feature
            key={index}
            image={feature.image}
            name={feature.name}
            title={feature.title}
            course={feature.course}
            url={feature.video}
        />
    ));

    featuredList.push(<SeeMoreFeatures />);

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 460, itemsToShow: 2, itemsToScroll: 1 },
        { width: 768, itemsToShow: 3, itemsToScroll: 1 },
        { width: 1200, itemsToShow: 3, itemsToScroll: 1 },
    ];

    return (
        <div className="FeaturedResults" id="results">
            <div className="results-container container padding">
                <div className="results-header">
                    <div className="results-title">
                        <img src={dot} alt="Libel Dot" />
                        <h1>
                            Resultados de
                            <br />
                            Estudiantes
                        </h1>
                    </div>
                </div>
                <div className="results-content">
                    <Carousel
                        ref={carousel}
                        breakPoints={breakPoints}
                        pagination={false}
                        showArrows={false}
                        className="results-carousel"
                    >
                        {featuredList}
                    </Carousel>
                    <button
                        className="results-buttons result-previous"
                        onClick={() => {
                            carousel.current.slidePrev();
                        }}
                    >
                        <IoChevronBack />
                    </button>
                    <button
                        className="results-buttons result-next"
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

export default FeaturedResults;
