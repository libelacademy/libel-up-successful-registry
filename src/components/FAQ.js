import React from "react";
import "../css/FAQ.css";

import questions from "../utils/questions";
import Question from "./cards/Question";

import image from "../images/faq-image.png";
import line from "../images/line.png";
import { IoChevronForward } from "react-icons/io5";

const FAQ = () => {

    const handleQuestion = (id) => {
        console.log(questions[id]);
    };

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
                        <img src={image} alt="FAQ" />
                    </div>
                    <div className="faq-questions">
                        <div className="faq-questions-container">
                            <Question
                                id={questions[0].id}
                                question={questions[0].question}
                                answer={questions[0].answer}
                                handleQuestion={handleQuestion}
                            />
                            <Question
                                id={questions[1].id}
                                question={questions[1].question}
                                answer={questions[1].answer}
                                handleQuestion={handleQuestion}
                            />
                            <Question
                                id={questions[2].id}
                                question={questions[2].question}
                                answer={questions[2].answer}
                                handleQuestion={handleQuestion}
                            />
                            <Question
                                id={questions[3].id}
                                question={questions[3].question}
                                answer={questions[3].answer}
                                handleQuestion={handleQuestion}
                            />
                            <a href={"https://libel.academy/preguntas-frecuentes"} className="more-questions">VER MAS PREGUNTAS{" "}<IoChevronForward/></a>
                        </div>
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
