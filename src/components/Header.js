/** @format */

import '../css/Header.css';

import underline from '../images/underline.png';
import headerCharacter from '../images/head-character.png';
import headerCharacterWebp from '../images/head-character.webp';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Image from 'react-image-webp';

const Header = () => {
  const { banner } = useSelector((state) => state.banner.value);

  useEffect(() => {
    setTimeout(() => {
      window.location = 'https://libel.academy/';
    }, 5000);
  }, [])
  
  return (
    <header
      className={`header ${
        banner ? 'header-padding-top-banner' : 'header-padding-top'
      }`}>
      <div className='header-filter'></div>
      <div className='header-container container'>
        <div className='header-content'>
          <div className='header-heading'>
            <h1 className='header-title'>
              <span className='header-title-degrade'>LIBEL</span>
              &nbsp;
              <span className='header-title-up'>
                UP
                {/* <img src={underline} alt='underline' /> */}
              </span>
            </h1>
          </div>
          <h2
            className='header-subtitle'
            style={{ color: '#00ffff', textAlign: 'center' }}>
            CURSOS 100% GRATIS
            <img src={underline} alt='underline' />
          </h2>
        </div>
        <div className='header-registry'>
          <IoCheckmarkCircle
            style={{ color: '00ffff', fontSize: 62, marginRight: 10 }}
          />
          <span>Registro Exitoso</span>
        </div>
        <h3>
          Dudas a:{' '}
          <span style={{ color: '#00ffff' }}>info@libel.academy</span>
        </h3>
        <a className='header-home-btn' href='https://libel.academy'>
          Regresar al inicio
        </a>
        <div className='header-character'>
          <div className='header-degrade-elipse-2'></div>
          <div className='header-degrade-elipse-3'></div>
          <div className='header-degrade-elipse-4'></div>
          <Image webp={headerCharacterWebp} src={headerCharacter} alt='character' />
        </div>
      </div>
    </header>
  );
};

export default Header;
