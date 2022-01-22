import React, { useState } from "react";
import "../css/Benefits.css";

import line from "../images/line.png";

import benefits from "../utils/benefits";
import Benefit from "./cards/Benefit";

import decoration from "../images/decorations/10.png";

import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const Benefits = () => {
    const benefitsList = benefits.map((benefit, i) => (
        <Benefit key={i} title={benefit.title} body={benefit.body} />
    ));
    const [position, setPosition] = useState(0);

    const nextPosition = () => {
        setPosition(position === benefits.length - 1 ? 0 : position + 1);
    };

    const previousPosition = () => {
        setPosition(position === 0 ? benefits.length - 1 : position - 1);
    };

    return (
        <div className="Benefits">
            <div className="benefits-container container padding">
                <h1 className="benefits-title">
                    <span>BENEFICIOS</span>
                    <br />
                    LIBEL ACADEMY
                    <img src={line} alt="decoration Line" />
                </h1>
                <div className="benefits-content">{benefitsList}</div>
                <div className="benefits-content-mobile">
                    {benefitsList[position]}
                    <div className="benefits-nav">
                        <IoArrowBack
                            onClick={() => {
                                previousPosition();
                            }}
                        />

                        <div className="benefits-nav-control">
                            <button
                                className={
                                    position === 0
                                        ? "benefits-nav-dot-active"
                                        : "benefits-nav-dot"
                                }
                                onClick={() => {
                                    setPosition(0);
                                }}
                            ></button>
                            <button
                                className={
                                    position === 1
                                        ? "benefits-nav-dot-active"
                                        : "benefits-nav-dot"
                                }
                                onClick={() => {
                                    setPosition(1);
                                }}
                            ></button>
                            <button
                                className={
                                    position === 2
                                        ? "benefits-nav-dot-active"
                                        : "benefits-nav-dot"
                                }
                                onClick={() => {
                                    setPosition(2);
                                }}
                            ></button>
                        </div>
                        <IoArrowForward
                            onClick={() => {
                                nextPosition();
                            }}
                        />
                    </div>
                </div>
                <img
                    src={decoration}
                    alt="Decoration Benefits"
                    className="benefits-decoration"
                />
            </div>
        </div>
    );
};

export default Benefits;
