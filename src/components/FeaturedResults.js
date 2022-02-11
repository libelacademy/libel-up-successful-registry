import React, { useRef } from "react";
import "../css/FeaturedResults.css";
import dot from "../images/logo_dot_dark.png";

import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import features from "../utils/featuredResults";

import Feature from "./cards/Feature";
import SeeMoreFeatures from "./cards/SeeMoreFeatures";

import Carousel, { consts } from "react-elastic-carousel";

const FeaturedResults = () => {
    const carousel = useRef(null);

    const featuredList = features.map((feature, i) => (
        <Feature
            key={feature.id}
            image={feature.image}
            name={feature.name}
            title={feature.title}
            course={feature.course}
            url={feature.video}
        />
    ));

    featuredList.push(<SeeMoreFeatures key={"16"}/>);

    const customArrows = ({ type, onClick, isEdge }) => {
        const pointer =
            type === consts.PREV ? <IoChevronBack /> : <IoChevronForward />;
        return (
            <button
                onClick={onClick}
                disabled={isEdge}
                style={{
                    fontSize: 36,
                    border: "none",
                    backgroundColor: "transparent",
                    color: "#6000de",
                    position: "relative",
                }}
            >
                {pointer}
            </button>
        );
    };

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 460, itemsToShow: 2, itemsToScroll: 1 },
        { width: 768, itemsToShow: 3, itemsToScroll: 1, showArrows: false },
        { width: 1200, itemsToShow: 3, itemsToScroll: 1, showArrows: false },
    ];

    return (
        <section className="FeaturedResults" id="results">
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
                        renderArrow={customArrows}
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
        </section>
    );
};

export default FeaturedResults;
