import React from "react";
import "../css/FAQ.css";

import questions from "../utils/questions";
import Question from "./cards/Question";

import image from "../images/Imagen 51.png";
import line from "../images/line.png";

const FAQ = () => {
    
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
                        <div>
                            {questions.map((question) => (
                                <Question
                                    key={question.id}
                                    question={question.question}
                                    answer={question.answer}
                                />
                            ))}
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
