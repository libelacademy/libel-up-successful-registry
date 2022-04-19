/** @format */

import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

import '../css/Header.css';

import escuelaDominaBlender from '../images/header/escuela-domina-blender.jpg';
import escuelaZBrush from '../images/header/escuela-zbrush.jpg';
import masterBlender from '../images/header/master-blender.jpg';
import esculturaImpresion from '../images/header/escultura-impreison.jpg';
import rigAnimacionVideojuegos from '../images/header/rig-animacion-videojuegos.jpg';
import imprimePersonaje from '../images/header/imprime-personaje.jpg';
import membresiaRecargada from '../images/header/membresia-recargada.jpg';

import membresiaRecargada570 from '../images/header/membresia-recargada-570.jpg';
import escuelaDominaBlender570 from '../images/header/escuela-domina-blender-570.jpg';
import rigAnimacionVideojuegos570 from '../images/header/rig-animacion-videojuegos-570.jpg';

import decoration from '../images/decorations/counseling_decoration_2.png'

const sliderList = [
  {
    id: 0,
    image: masterBlender,
    title: 'Máster Blender',
    description: 'Curso de Blender',
    link: 'https://libel.academy/master-blender/',
  },
  {
    id: 1,
    image: escuelaDominaBlender570,
    title: 'Escuela Domina Blender',
    description: 'Curso de Blender',
    link: 'https://libel.academy/escuela-domina-blender/',
  },
  {
    id: 2,
    image: membresiaRecargada570,
    title: 'Membresía Recargada',
    description: 'Acceso por un año',
    link: 'https://cursos.libel.academy/bundles/membresia-recargada',
  },
  {
    id: 3,
    image: rigAnimacionVideojuegos570,
    title: 'Rig para Animacion de Videojuegos',
    description: 'Máster Online en vivo',
    link: 'https://libel.academy/master-rigging/',
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Header = () => {
  const [progress, setProgress] = useState(0);

  const progressBar = () => {
    const start = 50;
    let interval = start;
    const progressCount = setInterval(() => {
      if (interval >= 0) {
        setProgress((start - interval) * 3);
        interval--;
      } else {
        clearInterval(progressCount);
        setProgress(0);
      }
    }, 100);
  };

  const sliderComponents = sliderList.map((slider) => (
    <a
      href={slider.link}
      key={slider.id}
      className='header-inner-cart'
      target={'_blank'}
      rel='noreferrer'
      style={{ display: 'block' }}>
      <div className='header-overlay'></div>
      <img src={slider.image} alt='master-blender' />
      <div className='header-item-content'>
        <div className='fs-16'>
          <a href={slider.link} target={'_blank'} rel='noreferrer'>
            {slider.title}
          </a>
        </div>
        <p>{slider.description}</p>
      </div>
      <div className='header-progress'>
        <div
          className='header-progress-bar'
          style={{ width: `${progress}%` }}></div>
      </div>
    </a>
  ));

  useEffect(() => {
    progressBar();
  }, []);

  return (
    <section className='Header' id='home'>
      <div className='header-container container padding'>
      <img src={decoration} alt='decoration' className='header-decoration' />
        <div className='header-row'>
          <div className='header-column'>
            <div className='header-wrap-cart'>
              <div className='header-cart-item'>
                <a
                  href='https://libel.academy/escuela-domina-blender/'
                  className='header-inner-cart'
                  target={'_blank'}
                  rel='noreferrer'
                  style={{ display: 'block' }}>
                  <div className='header-overlay'></div>
                  <img
                    src={escuelaDominaBlender}
                    alt='escuela-domina-blender'
                  />
                  <div className='header-item-content'>
                    <div className='fs-16'>
                      <a
                        href='https://libel.academy/escuela-domina-blender/'
                        target={'_blank'}
                        rel='noreferrer'>
                        Domina Blender
                      </a>
                    </div>
                    <p>Plan Mensual</p>
                  </div>
                </a>
                <a
                  href='https://cursos.libel.academy/bundles/membresia-plus-escuela-zbrush'
                  className='header-inner-cart'
                  target={'_blank'}
                  rel='noreferrer'
                  style={{ display: 'block' }}>
                  <div className='header-overlay'></div>
                  <img src={escuelaZBrush} alt='escuela-zbrush' />
                  <div className='header-item-content'>
                    <div className='fs-16'>
                      <a
                        href='https://cursos.libel.academy/bundles/membresia-plus-escuela-zbrush'
                        target={'_blank'}
                        rel='noreferrer'>
                        Escuela ZBrush
                      </a>
                    </div>
                    <p>Plan Mensual</p>
                  </div>
                </a>
              </div>
              <div className='header-cart-item style2'>
                <Slider
                  {...settings}
                  afterChange={() => {
                    progressBar();
                  }}>
                  {sliderComponents}
                </Slider>
              </div>
              <div className='header-cart-item'>
                <a
                  href='https://libel.academy/master-escultura-para-impresion/'
                  className='header-inner-cart'
                  target={'_blank'}
                  rel='noreferrer'
                  style={{ display: 'block' }}>
                  <div className='header-overlay'></div>
                  <img
                    src={esculturaImpresion}
                    alt='escultura-impresion'
                  />
                  <div className='header-item-content'>
                    <div className='fs-16'>
                      <a
                        href='https://libel.academy/master-escultura-para-impresion/'
                        target={'_blank'}
                        rel='noreferrer'>
                        Escultura Impresión
                      </a>
                    </div>
                    <p>Máster en ZBrush</p>
                  </div>
                </a>
                <a
                  href='https://libel.academy/master-rigging/'
                  className='header-inner-cart'
                  target={'_blank'}
                  rel='noreferrer'
                  style={{ display: 'block' }}>
                  <div className='header-overlay'></div>
                  <img
                    src={rigAnimacionVideojuegos}
                    alt='rig-animacion-videojuegos'
                  />
                  <div className='header-item-content'>
                    <div className='fs-16'>
                      <a
                        href='https://libel.academy/master-rigging/'
                        target={'_blank'}
                        rel='noreferrer'>
                        Rig para Animación
                      </a>
                    </div>
                    <p>Máster online en vivo</p>
                  </div>
                </a>
              </div>
              <div className='header-cart-item'>
                <a
                  href='https://libel.academy/impresion-3d-con-blender/'
                  target={'_blank'}
                  rel='noreferrer'
                  className='header-inner-cart'
                  style={{ display: 'block' }}>
                  <div className='header-overlay'></div>
                  <img
                    src={imprimePersonaje}
                    alt='imprime-personaje'
                  />
                  <div className='header-item-content'>
                    <div className='fs-16'>
                      <a
                        href='https://libel.academy/impresion-3d-con-blender/'
                        target={'_blank'}
                        rel='noreferrer'>
                        Crea e imprime personajes
                      </a>
                    </div>
                    <p>Curso en vivo Blender</p>
                  </div>
                </a>
                <a
                  href='https://cursos.libel.academy/bundles/membresia-recargada'
                  target={'_blank'}
                  rel='noreferrer'
                  className='header-inner-cart'
                  style={{ display: 'block' }}>
                  <div className='header-overlay'></div>
                  <img
                    src={membresiaRecargada}
                    alt='mebresia-recargada'
                  />
                  <div className='header-item-content'>
                    <div className='fs-16'>
                      <a
                        href='https://cursos.libel.academy/bundles/membresia-recargada'
                        target={'_blank'}
                        rel='noreferrer'>
                        Membresía Recargada
                      </a>
                    </div>
                    <p>Acceso un año</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
