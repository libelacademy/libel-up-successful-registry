import React, { useRef } from "react";

import "../css/Financing.css";
import line from "../images/underline.png";


import Carousel from "react-elastic-carousel";

import paymentMethods from "../utils/paymentMethods";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const Financing = () => {
    const carousel = useRef(null);

    const paymentMethodsList = paymentMethods.map((method, i) => (
        <img key={i} src={method.image} alt={method.name} />
    ));

    const breakPoints = [
        { width: 1, itemsToShow: 1, itemsToScroll: 1 },
        { width: 375, itemsToShow: 3, itemsToScroll: 1 },
        { width: 768, itemsToShow: 6, itemsToScroll: 1 },
        { width: 1200, itemsToShow: 6, itemsToScroll: 1 },
    ];

    return (
        <section className="Financing" id="financing">
            <div className="financing-container container padding">
                <div className="financing-header">
                    <h1 className="financing-title">
                        MÉTODOS DE
                        <br />
                        <span>FINANCIACIÓN</span>
                        <img
                            className="convert-underline"
                            src={line}
                            alt="underline"
                        />
                    </h1>

                    {/* <a href="https://calendly.com/libel ">
                        VER TODAS{" "}
                        <IoChevronForward style={{ marginLeft: "10px" }} />
                    </a> */}
                    <div className="financing-info">
                        <p>
                            Estamos comprometidos con la enseñanza y queremos
                            brindarte todas las oportunidades posibles para
                            acceder a nuestros entrenamientos.
                        </p>
                        <p>
                            Por ello, tenemos <b>planes de financiación</b> sin
                            intereses para nuestra oferta académica en vivo.
                        </p>
                        <p>
                            Que nada detenga tu aprendizaje,{" "}
                            <a
                                href="https://calendly.com/libel"
                                target={"_blank"}
                                rel="noreferrer"
                            >
                                contáctanos para más información.
                            </a>
                        </p>
                    </div>
                </div>
                <div className="financing-content">
                    <div className="payment-methods">
                        <Carousel
                            ref={carousel}
                            breakPoints={breakPoints}
                            pagination={false}
                            showArrows={false}
                            className="payment-carousel"
                        >
                            {paymentMethodsList}
                        </Carousel>

                        <button
                            className="nav-buttons payment-previous"
                            onClick={() => {
                                carousel.current.slidePrev();
                            }}
                        >
                            <IoChevronBack />
                        </button>

                        <button
                            className="results-buttons payment-next"
                            onClick={() => {
                                carousel.current.slideNext();
                            }}
                        >
                            <IoChevronForward />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Financing;
