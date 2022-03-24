import React, { useEffect, useState } from "react";
import "../css/FloatingSidebar.css";

import libel from "../images/logo_dot.png"
import { useSelector } from "react-redux";

import {
    IoClose,
    IoWalletOutline,
} from "react-icons/io5";


import {
    AiOutlineHome,
    AiOutlineFire,
    AiOutlineQuestionCircle,
    AiOutlineHdd,
    AiOutlineFolderOpen,
    AiOutlineLike,
    AiOutlineStar,
} from "react-icons/ai";

const links = [
    {
        id: 1,
        title: "Inicio",
        Icon: AiOutlineHome,
        url: "#home",
        location: 0,
    },
    {
        id: 2,
        title: "Masters",
        Icon: AiOutlineHdd,
        url: "#masters",
        location: 936,
    },
    {
        id: 3,
        title: "Programas",
        Icon: AiOutlineFolderOpen,
        url: "#courses",
        location: 936,
    },
    {
        id: 4,
        title: "Membresías",
        Icon: AiOutlineFire,
        url: "#memberships",
        location: 936,
    },
    {
        id: 5,
        title: "Resultados",
        Icon: AiOutlineStar,
        url: "#results",
        location: 936,
    },
    {
        id: 6,
        title: "Beneficios",
        Icon: AiOutlineLike,
        url: "#benefits",
        location: 2436,
    },
    {
        id: 7,
        title: "Financiación",
        Icon: IoWalletOutline,
        url: "#financing",
        location: 3186,
    },
    {
        id: 8,
        title: "Preguntas",
        Icon: AiOutlineQuestionCircle,
        url: "#faq",
        location: 3706,
    },
];

const FloatingSidebar = () => {

    const sideMenu = useSelector((state) => state.sideMenu.value.menu);
    const bannerTop = useSelector((state) => state.banner.value.banner);

    const [expanded, setExpanded] = useState(true);
    const [appear, setAppear] = useState({ opacity: 0 });
    const [top, setTop] = useState(null)
    

    const showMenu = sideMenu
    ? {
          transform: "translateX(-200%)",
          visibility: "hidden",
          opacity: 0,
      }
    : {
          transform: "translateX(0)",
          visibility: "visible",
          opacity: 1,
      }

    const handleLink = (e) => {
        e.preventDefault();
        const target = e.target.getAttribute("href");
        const location = document.querySelector(target).offsetTop;
        window.scrollTo({
            left: 0,
            top: location - 80,
        });
    };

    useEffect(() => {
        if (expanded) {
            setTimeout(() => {
                setAppear({ opacity: 1 });
            }, 300);
        } else {
            setAppear({ opacity: 0 });
        }
    }, [expanded]);

    useEffect(() => {
      if(!expanded) {
        setTop(bannerTop ? {top: 150}: {top: 90})
      } else {
          setTop({top: 'calc(50% - 100px)'})
      }
    }, [bannerTop, expanded])
    

    return (
        <div
            className={
                expanded ? "FloatingSidebar expanded" : "FloatingSidebar"
            }
            style={{...showMenu, ...top} }
        >
            <div
                className={
                    expanded ? "sidebar-icon-close" : "sidebar-icon-open"
                }
                onClick={() => {
                    setExpanded(!expanded);
                }}
            >
                {expanded ? (
                    <IoClose />
                ) : (
                    <img src={libel} alt="Libel Academy" />
                )}
            </div>
            {expanded ? (
                <div className="sidebar-links" style={appear}>
                    {links.map(({ id, title, url, Icon }) => (
                        <span key={id}>
                            <Icon />{" "}
                            <a href={url} onClick={handleLink}>
                                {title}
                            </a>
                        </span>
                    ))}
                </div>
            ) : null}
        </div>
    );
};

export default FloatingSidebar;
