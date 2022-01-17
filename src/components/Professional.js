import React from "react";
import "../css/Professional.css";
import DegradeButton from "./buttons/DegradeButton";

const Professional = () => {
    return (
        <div className="Professional">
            <div className="professional-container container">
                <div className="professional-title">
                    <h1>
                        Sé un <span>profesional</span>
                        <br />
                        en menos de 1 año<span>.</span>
                    </h1>
                </div>
                <div className="professional-content">
                    <p>
                        Estudia online desde<br/>cualquier parte del mundo con<br/>FEEDBACK en Discord.
                    </p>
                    <DegradeButton name={"MÁS INFORMACIÓN"} width={250}/>
                </div>
            </div>
        </div>
    );
};

export default Professional;
