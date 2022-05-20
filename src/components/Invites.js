/** @format */

import { useDispatch } from 'react-redux';
import '../css/Invites.css';
import { openAccess } from '../features/access';

import backgroundLeft from '../images/image 38.png';
import decoration from '../images/image 41.png';

const Invites = () => {
  const dispatch = useDispatch();

  const handleLink = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const location = document.querySelector(target).offsetTop;
    window.scrollTo({
      left: 0,
      top: location - 80,
    });
  };

  return (
    <div className='invites'>
      <img
        src={backgroundLeft}
        alt='backgroundLeft'
        className='invites-background-left'
      />
      <div className='invites-filter'></div>
      <div className='invites-container container padding'>
        <div className='invites-content'>
          <div className='invites-line'></div>
          <h2 className='invites-title'>
            <span>Invita a tus amigos</span> a ser parte de este
            proyecto
          </h2>
          <p className='invites-paragraph'>
            Nuestro propósito es permitir el acceso sin costo a cursos
            que impulsen el aprendizaje entorno al área de las
            industrias creativas.
          </p>
          <div className='invites-buttons'>
            <button
              className='invites-btn invites-degrade-btn'
              onClick={() => {
                dispatch(openAccess());
              }}>
              Accede Gratis
            </button>
            <a
              href='#information'
              onClick={handleLink}
              className='invites-btn invites-outline'>
              Apoya esta iniciativa
            </a>
          </div>
        </div>
      </div>
      <img
        src={decoration}
        alt='decoration'
        className='invites-decoration'
      />
    </div>
  );
};

export default Invites;
