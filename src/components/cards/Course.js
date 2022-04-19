import React, { useEffect, useState } from "react";
import "../../css/cards/Course.css";

import { IoCaretForwardOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";

import { openVideo } from "../../features/video";

import { getRemainingTimeUntilMsTimestamp } from "../../utils/countdown";

const defaultRemainingTime = {
    seconds: "00",
    minutes: "00",
    hours: "00",
    days: "00",
};


const Course = ({image, avatar, software, title, price, info, start, url, video }) => {

    const dispatch = useDispatch();
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);


    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(start);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [start]);

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

    return (
        <div className="Course">
            <div
                className="course-banner"
                style={{
                    backgroundImage: `url(${image})`,
                }}
            >
                <div className="course-banner-filter"></div>
                <button
                    className="course-play"
                    onClick={() => {
                        // handleOpenModal(true);
                        dispatch(
                            openVideo({ modal: true, url: video, type: "common" })
                        );
                    }}
                >
                    <IoCaretForwardOutline style={{ marginLeft: 2 }} />
                </button>
                <a href={url} className="course-start-now">
                    EMPEZAR AHORA
                </a>
            </div>
            <div className="course-information">
                <div className="course-information-title">
                    <h4>{title}</h4>
                    <img src={avatar} alt="teacher" />
                </div>
                <div className="course-information-price">
                    <span className="price">${price} USD</span>
                    <div className="line"></div>
                </div>
                <div className="course-information-text">
                    <p>{info}</p>
                </div>
                <div className="course-information-start">
                    {start ? (
                        <>
                            <h5>EMPIEZA EN</h5>
                            <div className="course-date">
                                <div className="segment">
                                    <div className="numbers">{remainingTime.days}</div>
                                    <div className="letters">DÍAS</div>
                                </div>
                                <div className="segment">
                                    <div className="numbers">{remainingTime.hours}</div>
                                    <div className="letters">HOR</div>
                                </div>
                                <div className="segment">
                                    <div className="numbers">{remainingTime.minutes}</div>
                                    <div className="letters">MIN</div>
                                </div>
                                <div className="segment">
                                    <div className="numbers">{remainingTime.seconds}</div>
                                    <div className="letters">SEG</div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <h5>INICIA CUANDO QUIERAS</h5>
                            <img src={software} alt="software" />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Course;
