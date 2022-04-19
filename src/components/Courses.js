import React, { useState } from "react";
import "../css/Courses.css";

import dot from "../images/logo_dot.png";
import courses from "../utils/courses";
import Tags from "./buttons/Tags";
import Course from "./cards/Course";

const Courses = () => {
    const [buttonNav, setButtonNav] = useState({
        cursos: 0,
        master: 0,
        camp: 0,
    });
    const [filter, setFilter] = useState("cursos");
    const filtered = courses.filter((course) => course.tag === filter);
    const [seeMore, setSeeMore] = useState("https://cursos.libel.academy/")

    return (
        <section className="Courses" id="courses">
            <div className="courses-container container padding">
                <div className="courses-header">
                    <div className="courses-title">
                        <img src={dot} alt="Libel Dot" />
                        <h1>
                            NUESTROS
                            <br />
                            PROGRAMAS
                        </h1>
                    </div>
                    <div className="courses-navigation">
                        <button
                            className={buttonNav.cursos ? "bActive" : ""}
                            onClick={() => {
                                if (buttonNav.cursos === 0) {
                                    setButtonNav({
                                        cursos: 1,
                                        master: 0,
                                        camp: 0,
                                    });
                                    setFilter("cursos");
                                    setSeeMore("https://cursos.libel.academy/")
                                } else {
                                    setButtonNav({
                                        cursos: 0,
                                        master: 0,
                                        camp: 0,
                                    });
                                    setFilter("cursos");
                                    setSeeMore("https://cursos.libel.academy/")
                                }
                            }}
                        >
                            CURSOS
                        </button>
                        <button
                            className={buttonNav.master ? "bActive" : ""}
                            onClick={() => {
                                if (buttonNav.master === 0) {
                                    setButtonNav({
                                        cursos: 0,
                                        master: 1,
                                        camp: 0,
                                    });
                                    setFilter("master");
                                    setSeeMore("https://libel.academy/master")

                                } else {
                                    setButtonNav({
                                        cursos: 0,
                                        master: 0,
                                        camp: 0,
                                    });
                                    setFilter("cursos");
                                    setSeeMore("https://cursos.libel.academy/")
                                }
                            }}
                        >
                            MASTERS
                        </button>
                        <button
                            className={buttonNav.camp ? "bActive" : ""}
                            onClick={() => {
                                if (buttonNav.camp === 0) {
                                    setButtonNav({
                                        cursos: 0,
                                        master: 0,
                                        camp: 1,
                                    });
                                    setFilter("camp");
                                    setSeeMore("https://libel.academy/3d-camp")

                                } else {
                                    setButtonNav({
                                        cursos: 0,
                                        master: 0,
                                        camp: 0,
                                    });
                                    setFilter("cursos");
                                    setSeeMore("https://cursos.libel.academy/")
                                }
                            }}
                        >
                            3D CAMP
                        </button>
                    </div>
                </div>
                <div className="courses-content">
                    {filter
                        ? filtered.map((course, index) => (
                              <Course
                                  key={index}
                                  avatar={course.avatar}
                                  image={course.image}
                                  info={course.info}
                                  price={course.price}
                                  software={course.software}
                                  start={course.start}
                                  title={course.title}
                                  url={course.url}
                                  video={course.video}
                              />
                          ))
                        : courses.map((course, index) => (
                              <Course
                                  key={index}
                                  avatar={course.avatar}
                                  image={course.image}
                                  info={course.info}
                                  price={course.price}
                                  software={course.software}
                                  start={course.start}
                                  title={course.title}
                                  url={course.url}
                                  video={course.video}
                              />
                          ))}
                </div>
                <div className="courses-see-more">
                    <Tags
                        tag={"VER MAS"}
                        url={seeMore}
                        width={150}
                    />
                </div>
            </div>
        </section>
    );
};

export default Courses;
