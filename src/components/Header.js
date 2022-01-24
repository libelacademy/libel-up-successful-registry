import React, { useState } from "react";
import "../css/Header.css";
import Tags from "./buttons/Tags";

import line from "../images/line.png";
import { IoArrowBack, IoArrowForward, IoChevronForward } from "react-icons/io5";

import { Link } from "react-scroll";

import Carousel, { consts } from "react-elastic-carousel";

import headerBanner1 from "../images/header-banner-1.png";
import headerBanner2 from "../images/header-banner-2.png";

import decorationLeft from "../images/decorations/04.png";
import PreviousButton from "./buttons/PreviousButton";
import NextButton from "./buttons/NextButton";

const Header = () => {
    const [banner, setBanner] = useState(0);

    const banners = [
        <img src={headerBanner1} alt="Header Banner 1" />,
        <img src={headerBanner2} alt="Header Banner 2" />,
    ];

    const nextBanner = () => {
        setBanner(banner === banners.length - 1 ? 0 : banner + 1);
    };

    const previousBanner = () => {
        setBanner(banner === 0 ? banners.length - 1 : banner - 1);
    };

    const tagsList = [
        <Tags
            tag={"LICENCIA ZBRUSH"}
            url="https://libel.academy/zbrush/"
            width={215}
        />,
        <Tags
            tag={"ESCUELA BLENDER"}
            url="https://aprende-blender.libel.academy/"
            width={215}
        />,
        <Tags
            tag={"ESCUELA ZBRUSH"}
            url="https://libel.academy/zbrush/"
            width={215}
        />,
        <Tags
            tag={"3D CAMP"}
            url="https://libel.academy/zbrush/"
            width={150}
        />,
    ];

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 460, itemsToShow: 2, itemsToScroll: 1 },
        { width: 768, itemsToShow: 4, showArrows: false },
        { width: 1200, itemsToShow: 4, showArrows: false },
    ];

    const customArrows = ({ type, onClick, isEdge })=> {
        const pointer = type === consts.PREV ? <PreviousButton/> : <NextButton/>
        return (
            <div onClick={onClick} disabled={isEdge}>
                {pointer}
            </div>
        )
    }


        
    return (
        <div className="Header">
            <div className="header-container container padding">
                <img
                    src={decorationLeft}
                    className="header-decoration"
                    alt="Header Decoration"
                />
                <div className="header-content">
                    <div className="header-slider-control">
                        <IoArrowBack
                            className="header-button"
                            onClick={() => {
                                previousBanner();
                            }}
                        />
                        <div className="header-slider-nav">
                            <button
                                className={
                                    banner === 0
                                        ? "header-slider-dot-active"
                                        : "header-slider-dot"
                                }
                                onClick={() => {
                                    setBanner(0);
                                }}
                            ></button>
                            <button
                                className={
                                    banner === 1
                                        ? "header-slider-dot-active"
                                        : "header-slider-dot"
                                }
                                onClick={() => {
                                    setBanner(1);
                                }}
                            ></button>
                        </div>
                        <IoArrowForward
                            className="header-button"
                            onClick={() => {
                                nextBanner();
                            }}
                        />
                    </div>
                    <h1 className="header-title">
                        <span>
                            Academia
                            <br />
                            online
                        </span>{" "}
                        aprende 3d desde cero
                        <img
                            src={line}
                            alt="header-underline"
                            className="header-underline"
                        />
                    </h1>
                    <p className="header-paragraph">
                        Aprende a tu ritmo o con clases en vivo y logra{" "}
                        <span>resultados increíbles.</span>
                    </p>
                    <Link
                        to="results"
                        hashSpy={true}
                        spy={true}
                        smooth={true}
                        duration={700}
                        offset={-80}
                        className="see-results"
                    >
                        VER RESULTADOS
                        <span className="see-results-circle">
                            <IoChevronForward />
                        </span>
                    </Link>
                </div>
                <div
                    className="header-image"
                    onClick={() => {
                        nextBanner();
                    }}
                >
                    {banners[banner]}
                </div>
            </div>
            <div className="headers-tags">
                <div className="header-tags-container container padding">

                    <Carousel breakPoints={breakPoints} pagination={false} renderArrow={customArrows}>
                        {tagsList}
                    </Carousel>
                    
                </div>
            </div>
        </div>
    );
};

export default Header;
