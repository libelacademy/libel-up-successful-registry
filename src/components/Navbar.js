import React, { useState, useEffect} from 'react'
import "../css/Navbar.css"

import { IoSearch, IoCaretDown, IoCaretUp, IoMenu } from "react-icons/io5";

import logo from "../images/logo.png"

import bulletPoint1 from "../images/courses-list/002-gantt chart.png";
import bulletPoint2 from "../images/courses-list/021-mail.png";
import bulletPoint3 from "../images/courses-list/029-video marketing.png";
import bulletPoint4 from "../images/courses-list/040-Branching.png";
import bulletPoint5 from "../images/courses-list/063-heart.png";
import bulletPoint6 from "../images/courses-list/078-internet.png";
import bulletPoint7 from "../images/courses-list/093-idea.png";

import coursesPreviewList from "../utils/previewCourses";
import SlideShow from "./sliders/SlideShow";

const Navbar = () => {
        const [menu, setMenu] = useState(false);
        const [showMenu, setShowMenu] = useState("none");
        const [courses, setCourses] = useState(false);
        const [coursesMenu, setCoursesMenu] = useState({
            visibility: "hidden",
            opacity: 0,
        });
        const [courseColor, setCourseColor] = useState("#ffffff");
        const [top, setTop] = useState("-100%");

        useEffect(() => {
            if (menu) {
                setShowMenu("flex");
            } else {
                setShowMenu("none");
            }
        }, [menu]);

        useEffect(() => {
            if (courses) {
                setCoursesMenu({ visibility: "visible", opacity: 1 });
                setCourseColor("#8f8f8f");
                setTop("0");
            } else {
                setCoursesMenu({ visibility: "hidden", opacity: 0 });
                setCourseColor("#ffffff");
                setTop("-100%");
            }
        }, [courses]);

        const handleCloseCourseMenu = (event) => {
            if (event.target.className === "courses-menu-container") {
                setCourses(false);
            }
        };
    
    return (
        <div className="Navbar">
            <div className="navbar-container container">
                <div className="home">
                    <a className="logo" href="/#">
                        <img src={logo} alt="Libel Academy" />
                    </a>
                </div>
                <div className="navigation">
                    <div className="search">
                        {/* <IoSearch className="search-icon" />
                        <input type="text" name="search" placeholder="Buscar" /> */}
                    </div>
                    <div className="shortcuts">
                        <a href="https://libel.academy/zbrush/">Licencias</a>

                        <button
                            style={{ color: `${courseColor}` }}
                            className="nav-courses"
                            onClick={() => {
                                setCourses(!courses);
                            }}
                        >
                            Cursos
                            {courses ? (
                                <IoCaretUp
                                    style={{
                                        marginLeft: "10px",
                                        fontSize: "12 px",
                                    }}
                                />
                            ) : (
                                <IoCaretDown
                                    style={{
                                        marginLeft: "10px",
                                        fontSize: "12 px",
                                    }}
                                />
                            )}
                        </button>
                    </div>
                </div>
                <div className="academy">
                    <a
                        href="https://cursos.libel.academy/users/sign_up"
                        target={"_blank"}
                        rel="noreferrer"
                        className="register"
                    >
                        Crear cuenta
                    </a>
                    <a
                        href="https://cursos.libel.academy/users/sign_in"
                        target={"_blank"}
                        rel="noreferrer"
                        className="login"
                    >
                        ENTRAR
                    </a>
                    <div className="menu-icon">
                        <IoMenu
                            onClick={() => {
                                setMenu(!menu);
                            }}
                        />
                    </div>
                </div>
                <ul className="menu-list" style={{ display: `${showMenu}` }}>
                    <div className="menu-academy">
                        <li>Crear cuenta</li>
                        <li>Entrar</li>
                    </div>
                    <div className="menu-shortcuts">
                        <li>Licencias</li>
                        <li>Cursos</li>
                    </div>
                </ul>
            </div>
            <div
                className="courses-menu-container"
                style={coursesMenu}
                onClick={handleCloseCourseMenu}
            >
                <div className="courses-menu" style={{ top: `${top}` }}>
                    <div className="courses-list">
                        <div className="courses-column">
                            <h3>TODOS LOS CURSOS</h3>
                            <ul>
                                <li>
                                    <div className="corses-bullet-point">
                                        <img
                                            src={bulletPoint7}
                                            alt="bullet point"
                                        />
                                    </div>
                                    <a href="/#">Curso de Rigging</a>
                                </li>
                                <li>
                                    <div className="corses-bullet-point">
                                        <img
                                            src={bulletPoint6}
                                            alt="bullet point"
                                        />
                                    </div>
                                    <a href="/#">Curso de Blender</a>
                                </li>
                                <li>
                                    <div className="corses-bullet-point">
                                        <img
                                            src={bulletPoint5}
                                            alt="bullet point"
                                        />
                                    </div>
                                    <a href="/#">Curso de ZBrush</a>
                                </li>
                                <li>
                                    <div className="corses-bullet-point">
                                        <img
                                            src={bulletPoint4}
                                            alt="bullet point"
                                        />
                                    </div>
                                    <a href="/#">Curso de ilustración</a>
                                </li>
                            </ul>
                        </div>
                        <div className="courses-column">
                            <h3>ENTRENAMIENTOS</h3>
                            <ul>
                                <li>
                                    <div className="corses-bullet-point">
                                        <img
                                            src={bulletPoint1}
                                            alt="bullet point"
                                        />
                                    </div>
                                    <a href="/#">Masters</a>
                                </li>
                                <li>
                                    <div className="corses-bullet-point">
                                        <img
                                            src={bulletPoint2}
                                            alt="bullet point"
                                        />
                                    </div>
                                    <a href="/#">Membresías</a>
                                </li>
                                <li>
                                    <div className="corses-bullet-point">
                                        <img
                                            src={bulletPoint3}
                                            alt="bullet point"
                                        />
                                    </div>
                                    <a href="/#">3D Camp</a>
                                </li>
                                <li>
                                    <div className="corses-bullet-point">
                                        <img
                                            src={bulletPoint4}
                                            alt="bullet point"
                                        />
                                    </div>
                                    <a href="/#">Aprende a tu ritmo</a>
                                </li>
                                <li>
                                    <div className="corses-bullet-point">
                                        <img
                                            src={bulletPoint5}
                                            alt="bullet point"
                                        />
                                    </div>
                                    <a href="/#">Licencias ZBrush</a>
                                </li>
                                <li>
                                    <div className="corses-bullet-point">
                                        <img
                                            src={bulletPoint6}
                                            alt="bullet point"
                                        />
                                    </div>
                                    <a href="/#">Reallusion</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="courses-preview">
                        {courses ? (
                            <SlideShow courses={coursesPreviewList} />
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar
