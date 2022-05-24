/** @format */

import '../css/Header.css';

import underline from '../images/Vector 39.png';
import headerCharacter from '../images/head-character.png';
import characterMobile from '../images/mobile-character.png';
import libelLine from '../images/libel-line.png';
import ring from '../images/ring.png';
import anyText from '../images/text.png';
import libelDot from '../images/logo_dot.png';

import Image from 'react-image-webp';

import { IoPlay } from 'react-icons/io5';

import { getRemainingTimeUntilMsTimestamp } from '../utils/countdown';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import backgroundRight from '../images/2-resize.jpg';
import backgroundRightWebp from '../images/2-resize.webp';

import backgroundLeftResize from '../images/1-resize.jpg';
import backgroundLeftWebpResize from '../images/1-resize.webp';
import { openAccess } from '../features/access';
import { openVideo } from '../features/video';

const defaultRemainingTime = {
  seconds: '00',
  minutes: '00',
  hours: '00',
  days: '00',
};

const Header = () => {
  const dispatch = useDispatch();

  const [remainingTime, setRemainingTime] = useState(
    defaultRemainingTime
  );
  const start = 'Mon, 4 Jul 2022 19:00:00 GMT-5';

  const { banner } = useSelector((state) => state.banner.value);

  const updateRemainingTime = (countdown) => {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
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
    const intervalId = setInterval(() => {
      updateRemainingTime(start);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [start]);

  return (
    <header
      className={`header ${
        banner ? 'header-padding-top-banner' : 'header-padding-top'
      }`}>
      <img src={ring} className='header-ring-1' alt='ring' />
      <div className='header-background'>
        <div className='left'>
          <Image
            src={backgroundLeftResize}
            webp={backgroundLeftWebpResize}
            alt='background'
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'cover',
              position: 'relative',
              left: '-10%',
            }}
          />
        </div>
        <div className='right'>
          <Image
            src={backgroundRight}
            webp={backgroundRightWebp}
            alt='background'
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
      <div className='header-filter'></div>
      <div className='header-container container'>
        <div className='header-content'>
          <div className='header-heading'>
            <div className='header-degrade-elipse-1'></div>
            <div className='header-degrade-elipse-2'></div>
            <div className='header-degrade-elipse-3'></div>
            <img src={libelDot} alt='help' className='header-dot' />
            <span className='header-welcome'>Bienvenido a</span>
            <h1 className='header-title'>
              <span className='header-title-degrade'>LIBEL</span>
              &nbsp;
              <span className='header-title-up'>
                UP
                <img src={underline} alt='underline' />
              </span>
            </h1>
            <img
              src={characterMobile}
              alt='character'
              className='header-character-mobile'
            />
            <p>
              Aprende ZBrush en 15 días online en vivo y lo
              mejor&nbsp;
              <b>"GRATIS"</b>
            </p>
            <div className='header-content-buttons-mobile'>
              <button
                className='btn-free-access'
                onClick={() => {
                  console.log('access');
                  dispatch(openAccess());
                }}>
                Accede Gratis
              </button>
              <button
                className='btn-trailer'
                onClick={() =>
                  dispatch(
                    openVideo({
                      modal: true,
                      url: 'https://www.youtube.com/watch?v=7lIiam941vw',
                    })
                  )
                }>
                <span>
                  <IoPlay />
                </span>
                Ver trailer
              </button>
            </div>
          </div>
          <div className='header-class'>
            <p>
              Las clases inician el <b>4 de Julio</b>
            </p>
            <div className='header-countdown'>
              <div className='header-countdown-item'>
                <div className='header-countdown-number'>
                  <div className='header-countdown-number-elipse-1'></div>
                  <div className='header-countdown-number-elipse-2'></div>
                  <span>{remainingTime.days}</span>
                </div>
                <span>Días</span>
              </div>
              <div className='header-countdown-item'>
                <div className='header-countdown-number'>
                  <div className='header-countdown-number-elipse-1'></div>
                  <div className='header-countdown-number-elipse-2'></div>
                  <span>{remainingTime.hours}</span>
                </div>
                <span>Horas</span>
              </div>
              <div className='header-countdown-item'>
                <div className='header-countdown-number'>
                  <div className='header-countdown-number-elipse-1'></div>
                  <div className='header-countdown-number-elipse-2'></div>
                  <span>{remainingTime.minutes}</span>
                </div>
                <span>Minutos</span>
              </div>
              <div className='header-countdown-item'>
                <div className='header-countdown-number'>
                  <div className='header-countdown-number-elipse-1'></div>
                  <div className='header-countdown-number-elipse-2'></div>
                  <span>{remainingTime.seconds}</span>
                </div>
                <span>Segundos</span>
              </div>
            </div>
          </div>
          <div className='header-content-buttons'>
            <button
              className='btn-free-access'
              onClick={() => {
                console.log('access');
                dispatch(openAccess());
              }}>
              Accede Gratis
            </button>
            <button
              className='btn-trailer'
              onClick={() =>
                dispatch(
                  openVideo({
                    modal: true,
                    url: 'https://www.youtube.com/watch?v=7lIiam941vw',
                  })
                )
              }>
              <span>
                <IoPlay />
              </span>
              Ver trailer
            </button>
          </div>
        </div>
        <div className='header-character'>
          <img src={anyText} alt='text' className='header-text' />
          <img src={headerCharacter} alt='character' />
        </div>
        <div className='header-information'>
          <img
            src={libelLine}
            alt='libel-line'
            className='libel-line'
          />
          <img src={ring} className='header-ring-2' alt='ring' />
          <img src={ring} className='header-ring-3' alt='ring' />
          <div className='header-degrade-elipse-4'></div>
          <div className='header-information-item'>
            <span className='header-information-title'>
              LIBEL UP
              <img src={underline} alt='underline' />
            </span>
            <p className='header-information-content'>
              Una iniciativa de <b>enseñanza gratuita</b> que busca
              beneficiar a toda la comunidad hispanohablante
              interesada en <b>aprender 3D.</b>
            </p>
            <a className='header-information-btn' href='#learn'
              onClick={handleLink}>
              Ver cursos y requisitos
            </a>
          </div>
          <div className='header-information-item'>
            <span className='header-information-title'>
              Donaciones
              <img src={underline} alt='underline' />
            </span>
            <p className='header-information-content'>
              Puedes realizar donaciones desde 3 USD para que esta
              iniciativa siga creciendo y podamos brindar enseñanza
              gratuita de calidad.
            </p>
            <a
              href='#information'
              onClick={handleLink}
              className='header-information-btn'>
              Apoya esta iniciativa{' '}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
