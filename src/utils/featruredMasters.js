import masterImage1 from "../images/master_blender.jpg"
import masterImage2 from "../images/master_escultura.jpg"
import masterImage3 from "../images/master_rigging.jpg"
import masterImage4 from "../images/master_zbrush.jpg"

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
        master: "https://libel.academy/libel/master-en-blender/",
    },
    {
        image: masterImage2,
        title: "Máster en Escultura para Impresión 3D",
        professor: "Oscar Fernández ",
        technology: ZBrush,
        url: "https://www.youtube.com/watch?v=QxBoSd1ckqc",
        master: "https://libel.academy/libel/master-escultura-para-impresion-3d/",
    },
    {
        image: masterImage3,
        title: "Máster en Rigging para animación y videojuegos ",
        professor: "Fernando Saltos",
        technology: Maya,
        url: "https://www.youtube.com/watch?v=chJJRqvsQWE",
        master: "https://libel.academy/libel/rigging-para-videojuegos/",
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