/** @format */

import React, { useCallback, useEffect, useRef, useState } from 'react';
import '../css/Header.css';
import Tags from './buttons/Tags';

import line from '../images/line.png';
import {
  IoArrowBack,
  IoArrowForward,
  IoChevronForward,
} from 'react-icons/io5';

import Carousel, { consts } from 'react-elastic-carousel';

import Image from 'react-image-webp';

import headerBanner1 from '../images/header-banner-1.png';
import headerBannerWebp1 from '../images/header-banner-1.webp';

// import headerBanner2 from '../images/header-banner-2.png';
// import headerBannerWebp2 from '../images/header-banner-2.webp';

import headerBanner3 from '../images/header-banner-3.png';
import headerBannerWebp3 from '../images/header-banner-3.webp';

import decorationLeft from '../images/decorations/04.png';
import decorationLeftWebp from '../images/decorations/04.webp';

import PreviousButton from './buttons/PreviousButton';
import NextButton from './buttons/NextButton';
import { useSelector } from 'react-redux';

const Header = () => {
  const [banner, setBanner] = useState(0);
  const bannerTop = useSelector((state) => state.banner.value.banner);
  const mobile = window.innerWidth <= 460;

  const intervaloSlideshow = useRef(null);

  const desktopStyle = bannerTop
    ? { paddingTop: 140 }
    : { paddingTop: 80 };
  const mobileStyle = bannerTop
    ? { height: 1170, paddingTop: 200 }
    : { height: 1050, paddingTop: 80 };

  const HeaderInformation = () => {
    return (
      <>
        <h1 className='header-title'>
          <span>
            Academia
            <br />
            online
          </span>{' '}
          aprende 3d desde cero
          <img
            src={line}
            alt='header-underline'
            className='header-underline'
          />
        </h1>
        <p className='header-paragraph'>
          Aprende a tu ritmo o con clases en vivo y logra{' '}
          <span>resultados increíbles.</span>
        </p>
        <a
          href='#results'
          className='see-results'
          onClick={handleLink}>
          VER RESULTADOS
          <span className='see-results-circle'>
            <IoChevronForward />
          </span>
        </a>
      </>
    );
  };

  const HeaderInformationBlender = () => {
    return (
      <>
        <h1 className='header-title'>
        BLENDER PARA
            <br />
          <span>
            IMPRESIÓN 3D
          </span>{' '}
          <img
            src={line}
            alt='header-underline'
            className='header-underline'
            style={{width: '100%', marginBottom: -10}}
          />
        </h1>
        <p className='header-paragraph'>
        Te enseñamos en dos meses a crear e imprimir personajes en BLENDER{' '}
          <span>"Clases Online en vivo"</span>
        </p>
        <a
          href='https://libel.academy/impresion-3d-con-blender/'
          className='see-results'
          style={{paddingLeft: 50}}
        >
          VER MAS
          <span className='see-results-circle'>
            <IoChevronForward />
          </span>
        </a>
      </>
    );
  };

  const banners = [
    <Image
      key={'banner1'}
      webp={headerBannerWebp1}
      src={headerBanner1}
      alt='Header Banner 1'
      className={
        banner === 0 ? 'heder-image-active' : 'header-image-desactive'
      }
    />,
    // <Image
    //   key={'banner2'}
    //   webp={headerBannerWebp2}
    //   src={headerBanner2}
    //   alt='Header Banner 2'
    //   className={
    //     banner === 1 ? 'heder-image-active' : 'header-image-desactive'
    //   }
    // />,
    <Image
      key={'banner3'}
      webp={headerBannerWebp3}
      src={headerBanner3}
      alt='Header Banner 3'
      className={
        banner === 1 ? 'heder-image-active' : 'header-image-desactive'
      }
    />,
  ];

  const nextBanner = useCallback(() => {
    setBanner(banner === banners.length - 1 ? 0 : banner + 1);
  }, [banner, banners.length]);


  const previousBanner = useCallback(() => {
    setBanner(banner === 0 ? banners.length - 1 : banner - 1);
  },[banner, banners.length]);

  const tagsList = [
    <Tags
      key={0}
      tag={'LICENCIA ZBRUSH'}
      url='https://libel.academy/zbrush/'
      width={215}
    />,
    <Tags
      key={1}
      tag={'ESCUELA BLENDER'}
      url='https://libel.academy/escuela-domina-blender/'
      width={215}
    />,
    <Tags
      key={2}
      tag={'ESCUELA ZBRUSH'}
      url='https://cursos.libel.academy/bundles/membresia-plus-escuela-zbrush'
      width={215}
    />,
    <Tags
      key={3}
      tag={'3D CAMP'}
      url='https://libel.academy/3d-camp/'
      width={150}
    />,
  ];

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 460, itemsToShow: 2, itemsToScroll: 1 },
    { width: 768, itemsToShow: 4, showArrows: false },
    { width: 1200, itemsToShow: 4, showArrows: false },
  ];

  const customArrows = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? <PreviousButton /> : <NextButton />;
    return (
      <div onClick={onClick} disabled={isEdge}>
        {pointer}
      </div>
    );
  };

  const handleLink = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const location = document.querySelector(target).offsetTop;
    window.scrollTo({
      left: 0,
      top: location - 80,
    });
  };

  useEffect(() => {
    intervaloSlideshow.current = setInterval(nextBanner, 5000);
    return () => clearInterval(intervaloSlideshow.current);
  }, [nextBanner])
  

  return (
    <section
      className='Header'
      id='home'
      style={mobile ? mobileStyle : desktopStyle}>
      <div className='header-container container padding'>
        <Image
          className='header-decoration'
          webp={decorationLeftWebp}
          src={decorationLeft}
          alt='Decoration Header'
        />
        <div className='header-content'>
          <div className='header-slider-control'>
            <IoArrowBack
              className='header-button'
              onClick={() => {
                previousBanner();
              }}
            />
            <div className='header-slider-nav'>
              <button
                className={
                  banner === 0
                    ? 'header-slider-dot-active'
                    : 'header-slider-dot'
                }
                onClick={() => {
                  setBanner(0);
                }}></button>
              <button
                className={
                  banner === 1
                    ? 'header-slider-dot-active'
                    : 'header-slider-dot'
                }
                onClick={() => {
                  setBanner(1);
                }}></button>

            </div>
            <IoArrowForward
              className='header-button'
              onClick={() => {
                nextBanner();
              }}
            />
          </div>
          {
              banner === 1 
              ? <HeaderInformationBlender />
              : <HeaderInformation />
          }
        </div>
        <div
          className='header-image'
          onClick={() => {
            nextBanner();
          }}>
          {banners}
        </div>
      </div>
      <div className='headers-tags'>
        <div className='header-tags-container container padding'>
          <Carousel
            breakPoints={breakPoints}
            pagination={false}
            renderArrow={customArrows}>
            {tagsList}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Header;
