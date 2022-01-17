import React, { useState, useEffect} from 'react'
import "../css/Navbar.css"

import { IoSearch, IoCaretDown, IoCaretUp, IoMenu } from "react-icons/io5";

import logo from "../images/logo.png"

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
                    <a className='logo' href="/#">
                        <img src={logo} alt="Libel Academy" />
                    </a>
                </div>
                <div className="navigation">
                    <div className="search">
                        <IoSearch className="search-icon" />
                        <input type="text" name="search" placeholder="Buscar" />
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
            </div>
        </div>
    );
}

export default Navbar
