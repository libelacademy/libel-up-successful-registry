import React from 'react';
import "../../css/cards/SeeMoreFeatures.css"

import Tags from "../buttons/Tags"

const SeeMoreFeatures = () => {
    return (
        <div className="SeeMoreFeatures">
            <h1>
                Te invitamos
                <br /> a ver más <br />
                resultados aquí:
            </h1>
            <Tags
                tag={"VER MAS"}
                url="https://www.youtube.com/watch?v=jMMKMVidCMM&list=PLK9UG5le_PO-0BOFa1CysBEcR2yVNgwZd&index=18&ab_channel=LIBELACADEMY"
                width={150}
            />
        </div>
    );
};

export default SeeMoreFeatures;
