import React from "react";
import "../css/Counseling.css";

import decorationLeft from "../images/decorations/counseling_decoration_1.png";
import decorationRight from "../images/decorations/counseling_decoration_2.png";

const Counseling = () => {
    return (
        <div className="Counseling">
            <div className="counseling-container container padding">
                <img
                    src={decorationLeft}
                    alt="Decoration Left"
                    className="counseling-decoration-left"
                />
                <h1>
                    Asiste a una <span>asesoría</span>
                    <br /> grupal gratuita
                    <span>.</span>
                </h1>
                <div className="counseling-content">
                    <a
                        href="https://calendly.com/libel"
                        target={"_blank"}
                        rel="noreferrer"
                        className="agenda"
                    >
                        AGENDA ASESORÍA
                    </a>
                    <a
                        href="https://wa.link/1wru1w "
                        target={"_blank"}
                        rel="noreferrer"
                        className="write"
                    >
                        ESCRÍBENOS AHORA
                    </a>
                    <p>Te ayudamos y orientamos en tu curva de aprendizaje.</p>
                </div>
                <img
                    src={decorationRight}
                    alt="Decoration Right"
                    className="counseling-decoration-right"
                />
            </div>
        </div>
    );
};

export default Counseling;
