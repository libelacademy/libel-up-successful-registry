import React, { useState } from "react";
import "../css/FAQ.css";

import questions from "../utils/questions";
import Question from "./cards/Question";

import Image from "react-image-webp";

import image from "../images/faq-image.png";
import imageWebp from "../images/faq-image.webp"
import line from "../images/line.png";
import { IoChevronForward } from "react-icons/io5";

const FAQ = () => {

    const [question, setQuestion] = useState();
    const handleQuestion = (id) => {
        setQuestion(id)
    }

    return (
        <div className="FAQ">
            <div className="faq-container container">
                <div className="faq-title">
                    <h1>
                        PREGUNTAS <span>FRECUENTES</span>
                        <img src={line} alt="underline" />
                    </h1>
                </div>
                <div className="faq-content">
                    <div className="faq-imagen ">
                        <Image src={image} webp={imageWebp} alt="FAQ" />
                    </div>
                    <div className="faq-questions">
                        <div className="faq-questions-container">
                            <Question
                                id={questions[0].id}
                                question={questions[0].question}
                                answer={questions[0].answer}
                                handleQuestion={handleQuestion}
                                active={
                                    question === questions[0].id ? true : false
                                }
                            />
                            <Question
                                id={questions[1].id}
                                question={questions[1].question}
                                answer={questions[1].answer}
                                handleQuestion={handleQuestion}
                                active={
                                    question === questions[1].id ? true : false
                                }
                            />
                            <Question
                                id={questions[2].id}
                                question={questions[2].question}
                                answer={questions[2].answer}
                                handleQuestion={handleQuestion}
                                active={
                                    question === questions[2].id ? true : false
                                }
                            />
                            <Question
                                id={questions[3].id}
                                question={questions[3].question}
                                answer={questions[3].answer}
                                handleQuestion={handleQuestion}
                                active={
                                    question === questions[3].id ? true : false
                                }
                            />
                        </div>
                        <a
                            href="https://libel.academy/preguntas-frecuentes/"
                            target={"_blank"}
                            rel="noreferrer"
                            className="more-questions"
                        >
                            VER MAS PREGUNTAS&nbsp;&nbsp;
                            <IoChevronForward />
                        </a>
                        <a
                            href="https://calendly.com/libel"
                            target={"_blank"}
                            rel="noreferrer"
                            className="request-advice"
                        >
                            SOLICITAR ASESORÍA
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
