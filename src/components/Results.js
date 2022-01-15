import React from "react";
import "../css/Results.css";

import line from "../images/line.png";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import Result from "./cards/Result";

import impressiveResults from "../utils/impressiveResults";

const Results = () => {
    return (
        <div className="Results">
            <div className="results-container container">
                <div className="results-title">
                    <h1>
                        IMPRESIONANTES
                        <br />
                        <span>RESULTADOS</span>
                        <img src={line} alt="underline" />
                    </h1>
                    <a href="/#">
                        VER MÁS{" "}
                        <IoChevronForward style={{ marginLeft: "10px" }} />
                    </a>
                </div>
                <div className="results-content">
                    <div className="previous-results">
                        <button className="results-button">
                            <IoChevronBack />
                        </button>
                    </div>
                    <div className="results-cards">
                        {impressiveResults.map((result) => (
                            <Result
                                key={result.id}
                                imagen={result.imagen}
                                avatar={result.avatar}
                                country={result.country}
                                name={result.name}
                            />
                        ))}
                    </div>
                    <div className="next-results">
                        <button className="results-button">
                            <IoChevronForward />
                        </button>
                    </div>
                </div>
                <div className="results-content-mobile">
                    <div className="previous-results">
                        <button className="results-button">
                            <IoChevronBack />
                        </button>
                    </div>
                    <div className="results-cards">
                        <Result
                            key={impressiveResults[0].id}
                            imagen={impressiveResults[0].imagen}
                            avatar={impressiveResults[0].avatar}
                            country={impressiveResults[0].country}
                            name={impressiveResults[0].name}
                        />
                    </div>
                    <div className="next-results">
                        <button className="results-button">
                            <IoChevronForward />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Results;
