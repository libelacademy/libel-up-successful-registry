/** @format */

import image1 from '../images/courses/Image1.png';
import image3 from '../images/courses/Image3.jpg';
import image7 from '../images/courses/Image7.png';
import image8 from '../images/courses/Image8.jpeg';
import image9 from '../images/courses/Image9.png';

import avatar1 from '../images/courses/Avatars1.png';
import avatar2 from '../images/courses/Avatars2.png';
import avatar3 from '../images/courses/Avatars3.png';


import blender_videojuegos from "../images/courses/blender_videojuegos.jpeg"
import Blender from "../images/courses/blender.jpeg"
import escultura_impresion from '../images/courses/escultura_impresion.jpeg'
import personajes_videojuegos from '../images/courses/personajes_videojuegos.jpeg'
import rigging from '../images/courses/rigging.jpeg'
import ZBrush from '../images/courses/zbrush.jpeg'

import camp1 from '../images/courses/01.jpeg'
import camp2 from '../images/courses/02.jpeg'
import camp3 from '../images/courses/03.jpeg'
import camp4 from '../images/courses/04.jpeg'

import wizard from '../images/courses/miguel-pacheco-libel-chico.jpg'

import zbrush from '../images/professional3d/Imagen 1.png';
import blender from '../images/professional3d/Imagen 7.png';
import maya from '../images/professional3d/Imagen 4.png';

const courses = [
  //CURSOS
  {
    title: 'Aprende Blender en 15 días',
    price: '14.99',
    info: 'Es tu gran oportunidad para crear un personaje en BLENDER “No necesitas conocimientos previos”',
    image: wizard,
    avatar: avatar2,
    software: blender,
    start: false,
    url: 'https://libel.academy/curso-blender/',
    video: 'https://www.youtube.com/watch?v=NkWKBcjp5To',
    tag: 'cursos',
  },
  {
    title: 'Escuela ZBrush',
    price: '39.00',
    info: 'Aprende ZBrush desde cero y descubre lo qu puedes lograr con este software de escultura digital.',
    image: image1,
    avatar: avatar1,
    software: zbrush,
    start: false,
    url: 'https://cursos.libel.academy/bundles/membresia-plus-escuela-zbrush',
    video: 'https://www.youtube.com/watch?v=x4p2eu-6U_Q',
    tag: 'cursos',
  },
  {
    title: 'Soldado de Elite',
    price: '49.00',
    info: 'Descubre las últimas técnicas de la industria y crea personajes realistas para videojuegos AAA.',
    image: image3,
    avatar: avatar3,
    software: zbrush,
    start: false,
    url: 'https://cursos.libel.academy/',
    video: 'https://www.youtube.com/watch?v=I2bpfjTQ2Rw',
    tag: 'cursos',
  },
  {
    title: ' Aprende RIG en maya',
    price: '39.00',
    info: 'Es tu gran oportunidad de aprender Rigging y hacer tu primera animación.',
    image: image9,
    avatar: avatar1,
    software: maya,
    start: false,
    url: 'https://cursos.libel.academy/courses/rigging-de-personajes-para-animacion-3d-camp',
    video: 'https://www.youtube.com/watch?v=3E2ul4jfTPo&t=17s',
    tag: 'cursos',
  },
  {
    title: 'Salamandra en ZBRUSH',
    price: '39.9',
    info: 'Aprende paso a paso y crea personajes para concept en ZBRUSH.',
    image: image8,
    avatar: avatar2,
    software: zbrush,
    start: false,
    url: 'https://cursos.libel.academy/courses/personajes-en-zbrush-3d-camp',
    video: 'https://www.youtube.com/watch?v=-q3P4ZM7b0I&t=24s',
    tag: 'cursos',
  },
  {
    title: 'Escultura y modelado en Blender',
    price: '49.00',
    info: 'Unimos la escultura y el modelado en Blender para desarrollar este fantástico personaje con accesorios HARDSURFACE.',
    image: image7,
    avatar: avatar3,
    software: blender,
    start: false,
    url: 'https://cursos.libel.academy/courses/personaje-en-blender-para-impresion-3d-camp',
    video: 'https://www.youtube.com/watch?v=GYBX6d1pETs',
    tag: 'cursos',
  },

  // MASTERS ##############################################################################
  {
    title: 'Máster en Rigging para Videojuegos y Animación',
    price: '399.00',
    info: 'Vamos paso a paso y  crea Rig para animación y videojuegos desde cero.',
    image: rigging,
    avatar: avatar1,
    software: maya,
    start: "Sat, 4 Jun 2022 10:00:00 GMT-5",
    url: 'https://libel.academy/master-rigging',
    video: 'https://www.youtube.com/watch?v=chJJRqvsQWE',
    tag: 'master',
  },
  {
    title: 'Máster en Escultura para Impresión 3D',
    price: '475.00',
    info: 'Crea personajes en ZBrush y déjalos listos para el proceso de impresión 3D.',
    image: escultura_impresion,
    avatar: avatar2,
    software: zbrush,
    start: "Sat, 4 Jun 2022 17:00:00 GMT-5",
    url: 'https://libel.academy/mastes-escultura-para-impresion',
    video: 'https://www.youtube.com/watch?v=8Gp-xi3XMjc',
    tag: 'master',
  },
  {
    title: 'Máster en Blender para Videojuegos y Animación',
    price: '475.00',
    info: 'Aprende dese cero a nivel avanzado con mas de 10 entrenamientos especializados.',
    image: blender_videojuegos,
    avatar: avatar3,
    software: blender,
    start: "Sat, 4 Jun 2022 21:00:00 GMT-5",
    url: 'https://libel.academy/master-blender/',
    video: 'https://www.youtube.com/watch?v=qxU8WhJZlb0',
    tag: 'master',
  },
  {
    title: 'Máster Personaje Videojuegos AAA',
    price: '849.00',
    info: 'Crea personajes para videojuegos AAA donde usaremos ZBrush, Maya, Substance Painter entre otro software.',
    image: personajes_videojuegos,
    avatar: avatar3,
    software: blender,
    start: "Sat, 4 Apr 2021 16:00:00 GMT-5",
    url: 'https://libel.academy/master-personajes-para-videojuegos/',
    video: 'https://www.youtube.com/watch?v=I2bpfjTQ2Rw',
    tag: 'master',
  },
  {
    title: 'Escuela Domina Blender',
    price: '29.00',
    info: 'Sigue una curva de aprendizaje y domina Blender desde cero con acompañamiento online en vivo',
    image: Blender,
    avatar: avatar2,
    software: blender,
    start: false,
    url: 'https://libel.academy/escuela-domina-blender',
    video: 'https://www.youtube.com/watch?v=9y0Zec0i-Pc',
    tag: 'master',
  },
  {
    title: 'Escuela ZBrush',
    price: '39.00',
    info: 'Llego el momento de aprender a dominar ZBrush desde cero con acompañamiento online en vivo.',
    image: ZBrush,
    avatar: avatar1,
    software: zbrush,
    start: false,
    url: 'https://cursos.libel.academy/bundles/membresia-plus-escuela-zbrush',
    video: 'https://www.youtube.com/watch?v=x4p2eu-6U_Q',
    tag: 'master',
  },

  // CAMP ##############################################################################
  {
    title: 'The Guardian',
    price: '36.99',
    info: 'Creemos juntos este grandioso personaje en ZBrush, asume el reto y demuestra que puedes lograrlo.',
    image: camp1,
    avatar: avatar1,
    software: zbrush,
    start: "Sat, 19 Mar 2022 16:00:00 GMT-5",
    url: 'https://libel.academy/3d-camp',
    video: 'https://www.youtube.com/watch?v=1-AWvUlYT6c',
    tag: 'camp',
  },
  {
    title: 'The Fisher',
    price: '36.99',
    info: 'Vive una experiencia con la última versión de Blender y libera el gran talento que hay en ti.',
    image: camp2,
    avatar: avatar1,
    software: blender,
    start: "Sat, 19 Mar 2022 16:00:00 GMT-5",
    url: 'https://libel.academy/3d-camp',
    video: 'https://www.youtube.com/watch?v=6T2lh60kE5U',
    tag: 'camp',
  },
  {
    title: 'Warrior Bear',
    price: '36.99',
    info: 'Aprende a crear personajes en Maya desde cero renderízalo en Arnold, aplica texturas en substance y más.',
    image: camp3,
    avatar: avatar3,
    software: maya,
    start: "Sat, 19 Mar 2022 16:00:00 GMT-5",
    url: 'https://libel.academy/3d-camp',
    video: 'https://youtu.be/SvQ6coGR-OE',
    tag: 'camp',
  },
  {
    title: 'Rig Warrior Bear',
    price: '39.9',
    info: 'Crea este fantástico Rig desde cero en Maya y llevémoslo juntos a Unreal.',
    image: camp4,
    avatar: avatar2,
    software: maya,
    start: "Sat, 19 Mar 2022 16:00:00 GMT-5",
    url: 'https://cursos.libel.academy/courses/personajes-en-zbrush-3d-camp',
    video: 'https://youtu.be/KiEUJxCWLB4',
    tag: 'camp',
  },

  // ##############################################################################3
];

export default courses;
