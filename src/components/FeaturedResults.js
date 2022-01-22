import React, { useState } from "react";
import "../css/FeaturedResults.css";
import dot from "../images/logo_dot_dark.png";

import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import features from "../utils/featuredResults";

import Feature from "./cards/Feature";

const FeaturedResults = () => {
    const [position, setPosition] = useState(0);

    const [buttonNav, setButtonNav] = useState({
        courses: 1,
        master: 0,
        camp: 0,
    });
    const [filter, setFilter] = useState("cursos");
    const filtered = features.filter((feature) => feature.tag === filter);
    const featuredList = filtered.map((feature, index) => (
        <Feature
            key={index}
            image={feature.image}
            avatar={feature.avatar}
            name={feature.name}
            title={feature.title}
        />
    ));

    const nextPosition = () => {
        setPosition(position === featuredList.length - 1 ? 0 : position + 1);
    };

    const previousPosition = () => {
        setPosition(position === 0 ? featuredList.length - 1 : position - 1);
    };

    return (
        <div className="FeaturedResults" id="results">
            <div className="results-container container padding">
                <div className="results-header">
                    <div className="results-title">
                        <img src={dot} alt="Libel Dot" />
                        <h1>
                            Resultados
                            <br />
                            Destacados
                        </h1>
                    </div>
                    <div className="results-navigation">
                        <button
                            className={
                                buttonNav.courses ? "results-active" : ""
                            }
                            onClick={() => {
                                setPosition(0);
                                if (buttonNav.courses === 0) {
                                    setButtonNav({
                                        courses: 1,
                                        master: 0,
                                        camp: 0,
                                    });
                                    setFilter("cursos");
                                } else {
                                    setButtonNav({
                                        courses: 0,
                                        master: 0,
                                        camp: 0,
                                    });
                                    setFilter("cursos");
                                }
                            }}
                        >
                            CURSOS
                        </button>
                        <button
                            className={buttonNav.master ? "results-active" : ""}
                            onClick={() => {
                                setPosition(0);
                                if (buttonNav.master === 0) {
                                    setButtonNav({
                                        courses: 0,
                                        master: 1,
                                        camp: 0,
                                    });
                                    setFilter("master");
                                } else {
                                    setButtonNav({
                                        courses: 0,
                                        master: 0,
                                        camp: 0,
                                    });
                                    setFilter("cursos");
                                }
                            }}
                        >
                            MASTERS
                        </button>
                        <button
                            className={buttonNav.camp ? "results-active" : ""}
                            onClick={() => {
                                setPosition(0);
                                if (buttonNav.camp === 0) {
                                    setButtonNav({
                                        courses: 0,
                                        master: 0,
                                        camp: 1,
                                    });
                                    setFilter("camp");
                                } else {
                                    setButtonNav({
                                        courses: 0,
                                        master: 0,
                                        camp: 0,
                                    });
                                    setFilter("cursos");
                                }
                            }}
                        >
                            3D CAMP
                        </button>
                    </div>
                </div>
                <div className="results-content">{featuredList}</div>
                <div className="results-content-mobile">
                    {featuredList[position]}
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

export default FeaturedResults;
