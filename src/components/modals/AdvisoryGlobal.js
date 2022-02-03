import React from 'react';
import { IoClose, IoCalendarOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import "../../css/modals/AdvisoryGlobal.css"
import { closeAdvisory } from '../../features/advisory';

const AdvisoryGlobal = () => {

    const dispatch = useDispatch()

    const modal = useSelector(state => state.advisory.value.modal)

    const mobile = window.visualViewport.width

    return (
        <div
            className="AdvisoryGlobal"
            style={
                modal && mobile > 860
                    ? { opacity: 1, visibility: "visible" }
                    : {
                          opacity: 0,
                          visibility: "hidden",
                          transform: "translateY(200px)",
                      }
            }
        >
            <IoClose
                className="ag-closer"
                onClick={() => {
                    dispatch(closeAdvisory());
                }}
            />
            <h1>¿Necesitas una asesoría?</h1>
            <a
                href="https://calendly.com/libel"
                target={"_blank"}
                rel="noreferrer"
            >
                <IoCalendarOutline className="ag-icon" />
                Programar
            </a>
        </div>
    );
};

export default AdvisoryGlobal;
