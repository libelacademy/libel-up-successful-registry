import React from 'react'
import "../css/Countdown.css"

const Countdown = () => {
    return (
        <div className="Countdown">
            <h3>COMIENZA EN</h3>
            <div className="countdown-timer">
                <div className="segment">
                    <div className="number">5</div>
                    <div className="text">DÍAS</div>
                </div>
                <div className="segment">
                    <div className="number">15</div>
                    <div className="text">HOR</div>
                </div>
                <div className="segment">
                    <div className="number">22</div>
                    <div className="text">MIN</div>
                </div>
                <div className="segment">
                    <div className="number">45</div>
                    <div className="text">SEG</div>
                </div>
            </div>
            <h4>- 19 DICIEMBRE 2022 -</h4>
        </div>
    );
}

export default Countdown
