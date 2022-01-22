import image1 from "../images/courses/Image1.png";
import image2 from "../images/courses/Image2.png";
import image3 from "../images/courses/Image3.png";
import image4 from "../images/courses/Image4.png";
import image5 from "../images/courses/Image5.png";
import image6 from "../images/courses/Image6.png";

import avatar1 from "../images/courses/Avatars1.png";
import avatar2 from "../images/courses/Avatars2.png";
import avatar3 from "../images/courses/Avatars3.png";
import avatar4 from "../images/courses/Avatars4.png";
import avatar5 from "../images/courses/Avatars5.png";
import avatar6 from "../images/courses/Avatars6.png";

import zbrush from "../images/professional3d/Imagen 1.png";
import blender from "../images/professional3d/Imagen 7.png";

const courses = [
    {
        title: "Escuela ZBrush",
        price: "39.00",
        info: "Aprende ZBrush desde cero y descubre lo qu puedes lograr con este software de escultura digital.",
        image: image1,
        avatar: avatar1,
        software: zbrush,
        start: false,
        url: "https://cursos.libel.academy/bundles/membresia-plus-escuela-zbrush",
        tag: "cursos",
    },
    {
        title: "Escuela Domina Blender",
        price: "19.00",
        info: "Aprende Blender desde cero y domina el mejor software gratuito de diseño 3D.",
        image: image2,
        avatar: avatar2,
        software: blender,
        start: false,
        url: "https://aprende-blender.libel.academy/",
        tag: "cursos",
    },
    {
        title: "Máster Personaje Videojuegos AAA",
        price: "849.00",
        info: "Descubre las últimas técnicas de la industria y crea personajes realistas para videojuegos AAA.",
        image: image3,
        avatar: avatar3,
        software: "",
        start: 123,
        url: "https://libel.academy/libel/personajes-para-videojuegos/",
        tag: "cursos",
    },
    //
    {
        title: "Máster Personaje Videojuegos AAA",
        price: "849.00",
        info: "Descubre las últimas técnicas de la industria y crea personajes realistas para videojuegos AAA.",
        image: image3,
        avatar: avatar3,
        software: "",
        start: 123,
        url: "https://libel.academy/libel/personajes-para-videojuegos/",

        tag: "master",
    },
    {
        title: "Escuela Domina Blender",
        price: "19.00",
        info: "Aprende Blender desde cero y domina el mejor software gratuito de diseño 3D.",
        image: image2,
        avatar: avatar2,
        software: blender,
        start: false,
        url: "https://aprende-blender.libel.academy/",
        tag: "master",
    },
    {
        title: "Escuela ZBrush",
        price: "39.00",
        info: "Aprende ZBrush desde cero y descubre lo qu puedes lograr con este software de escultura digital.",
        image: image1,
        avatar: avatar1,
        software: zbrush,
        start: false,
        url: "https://cursos.libel.academy/bundles/membresia-plus-escuela-zbrush",
        tag: "master",
    },
    //

    {
        title: "Escuela Domina Blender",
        price: "19.00",
        info: "Aprende Blender desde cero y domina el mejor software gratuito de diseño 3D.",
        image: image2,
        avatar: avatar2,
        software: blender,
        start: false,
        url: "https://aprende-blender.libel.academy/",
        tag: "camp",
    },
    {
        title: "Máster Personaje Videojuegos AAA",
        price: "849.00",
        info: "Descubre las últimas técnicas de la industria y crea personajes realistas para videojuegos AAA.",
        image: image3,
        avatar: avatar3,
        software: "",
        start: 849,
        url: "https://libel.academy/libel/personajes-para-videojuegos/",
        tag: "camp",
    },
    {
        title: "Escuela ZBrush",
        price: "39.00",
        info: "Aprende ZBrush desde cero y descubre lo qu puedes lograr con este software de escultura digital.",
        image: image1,
        avatar: avatar1,
        software: zbrush,
        start: false,
        url: "https://cursos.libel.academy/bundles/membresia-plus-escuela-zbrush",
        tag: "camp",
    },
    // ##############################################################################3
    {
        title: "Máster Personaje Videojuegos AAA",
        price: "249.00",
        info: "Descubre las últimas técnicas de la industria y crea personajes realistas para videojuegos AAA.",
        image: image3,
        avatar: avatar3,
        software: "",
        start: 123,
        tag: "master",
    },
    {
        title: "Escuela ZBrush",
        price: "39.00",
        info: "Aprende ZBrush desde cero y descubre lo qu puedes lograr con este software de escultura digital.",
        image: image3,
        avatar: avatar3,
        software: zbrush,
        start: false,
        tag: "cursos",
    },
    {
        title: "Máster en Rigging",
        price: "149.00",
        info: "Aprende Rigging de gran nivel para animación.",
        image: image6,
        avatar: avatar6,
        software: "",
        start: 5,
        tag: "cursos",
    },
    {
        title: "Máster en Blender",
        price: "189.00",
        info: "Aprende a crear models inorgánicos y escenarios para.",
        image: image5,
        avatar: avatar5,
        software: "",
        start: 1,
        tag: "cursos",
    },

    {
        title: "Máster en Blender",
        price: "189.00",
        info: "Aprende a crear models inorgánicos y escenarios para.",
        image: image5,
        avatar: avatar5,
        software: "",
        start: 1,
        tag: "master",
    },
    {
        title: "Máster en Rigging",
        price: "149.00",
        info: "Aprende Rigging de gran nivel para animación.",
        image: image6,
        avatar: avatar6,
        software: "",
        start: 5,
        tag: "master",
    },

    {
        title: "Máster Personaje Videojuegos AAA",
        price: "249.00",
        info: "Descubre las últimas técnicas de la industria y crea personajes realistas para videojuegos AAA.",
        image: image1,
        avatar: avatar2,
        software: "",
        start: 123,
        tag: "master",
    },
    {
        title: "Máster en Rigging",
        price: "149.00",
        info: "Aprende Rigging de gran nivel para animación.",
        image: image6,
        avatar: avatar6,
        software: "",
        start: 5,
        tag: "camp",
    },
    {
        title: "Escultura para impresión",
        price: "39.00",
        info: "Aprende a crear modelos para impresión 3D con procesos usados.",
        image: image4,
        avatar: avatar4,
        software: "",
        start: 159,
        tag: "camp",
    },
    {
        title: "Máster en Blender",
        price: "189.00",
        info: "Aprende a crear models inorgánicos y escenarios para.",
        image: image5,
        avatar: avatar5,
        software: "",
        start: 1,
        tag: "camp",
    },

    {
        title: "Máster Personaje Videojuegos AAA",
        price: "249.00",
        info: "Descubre las últimas técnicas de la industria y crea personajes realistas para videojuegos AAA.",
        image: image1,
        avatar: avatar2,
        software: "",
        start: 123,
        tag: "camp",
    },
];

export default courses;