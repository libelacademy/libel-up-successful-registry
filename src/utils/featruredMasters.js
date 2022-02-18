import masterImage1 from "../images/blender_videojuegos.jpeg";
import masterImage2 from "../images/escultura_impresion.jpeg";
import masterImage3 from "../images/rigging.jpeg"
import masterImage4 from "../images/zbrush.jpeg"

import Blender from "../images/professional3d/Imagen 7.png"
import ZBrush from "../images/professional3d/Imagen 1.png"
import Maya from "../images/professional3d/Imagen 4.png"

const masters = [
    {
        image: masterImage1,
        title: "Máster en Blender para Videojuegos",
        professor: "Ricardo Díaz",
        technology: Blender,
        url: "https://www.youtube.com/watch?v=qxU8WhJZlb0",
        master: "https://libel.academy/master-blender/",
    },
    {
        image: masterImage2,
        title: "Máster en Escultura para Impresión 3D",
        professor: "Oscar Fernández ",
        technology: ZBrush,
        url: "https://www.youtube.com/watch?v=8Gp-xi3XMjc",
        master: "https://libel.academy/master-escultura-para-impresion/",
    },
    {
        image: masterImage3,
        title: "Máster en Rigging para animación y videojuegos ",
        professor: "Fernando Saltos",
        technology: Maya,
        url: "https://www.youtube.com/watch?v=chJJRqvsQWE",
        master: "https://libel.academy/master-rigging/",
    },
    {
        image: masterImage4,
        title: "Escuela ZBrush",
        professor: "Manuel Jordan",
        technology: ZBrush,
        url: "https://www.youtube.com/watch?v=x4p2eu-6U_Q",
        master: "https://libel.academy/escuela-zbrush/",
    },
];

export default masters;
