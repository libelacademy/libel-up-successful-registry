import React, { useEffect, useState } from "react";
import "../css/FeaturedResults.css";
import dot from "../images/logo_dot_dark.png";

import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import features from "../utils/featuredResults";

import Feature from "./cards/Feature";
import SeeMoreFeatures from "./cards/SeeMoreFeatures";

const FeaturedResults = () => {
    const [position, setPosition] = useState(0);
    const [disabledPrev, setDisabledPrev] = useState(false);
    const [disabledNext, setDisabledNext] = useState(false);


    const featuredList = features.map((feature, index) => (
        <Feature
            key={index}
            image={feature.image}
            name={feature.name}
            title={feature.title}
            course={feature.course}
        />
    ));

    featuredList.push(<SeeMoreFeatures />)

    const featuredGroups = [featuredList[0], featuredList[1], featuredList[2]];

    const nextPosition = () => {
        setPosition(position + 1);
    };

    const previousPosition = () => {
        setPosition(position - 1);
    };

    useEffect(() => {
        setDisabledPrev(position === 0 ? true : false);
        setDisabledNext(position === featuredList.length - 1 ? true : false);
    }, [position, featuredList]);
    

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
                <div className="results-content">{featuredGroups}</div>
                <div className="results-content-mobile">
                    {featuredList[position]}
                    <div className="results-buttons">
                        <button
                            disabled={disabledPrev}
                            className="result-previous"
                            onClick={() => {
                                previousPosition();
                            }}
                        >
                            <IoChevronBack />
                        </button>
                        <button
                            disabled={disabledNext}
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

export default FeaturedResults;
