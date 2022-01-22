import React from "react";
import "../css/FAQ.css";

import questions from "../utils/questions";
import Question from "./cards/Question";

import image from "../images/faq-image.png";
import line from "../images/line.png";

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
                        <div>
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
                            <Question
                                id={questions[4].id}
                                question={questions[4].question}
                                answer={questions[4].answer}
                                handleQuestion={handleQuestion}
                            />
                            <Question
                                id={questions[5].id}
                                question={questions[5].question}
                                answer={questions[5].answer}
                                handleQuestion={handleQuestion}
                            />
                            <Question
                                id={questions[6].id}
                                question={questions[6].question}
                                answer={questions[6].answer}
                                handleQuestion={handleQuestion}
                            />
                            <Question
                                id={questions[7].id}
                                question={questions[7].question}
                                answer={questions[7].answer}
                                handleQuestion={handleQuestion}
                            />
                            <Question
                                id={questions[8].id}
                                question={questions[8].question}
                                answer={questions[8].answer}
                                handleQuestion={handleQuestion}
                            />
                            <Question
                                id={questions[9].id}
                                question={questions[9].question}
                                answer={questions[9].answer}
                                handleQuestion={handleQuestion}
                            />
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
