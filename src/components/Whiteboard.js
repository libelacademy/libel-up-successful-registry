/** @format */

import '../css/Whiteboard.css';

// import backgroundImg from '../images/Marcos - render-final-con-mas-luz 1.png';
import listIcon from '../images/list-icon.png';
import character from '../images/Marcos - render.png';

import decoration from '../images/decorations/image 32.png';
import { useDispatch } from 'react-redux';
import { openAccess } from '../features/access';
import { openVideo } from '../features/video';
import { IoPlay } from 'react-icons/io5';

const items = [
  'Feedback online en vivo',
  'Aprende desde cero',
  'Duración un mes',
  'Software ZBrush',
];

const Whiteboard = () => {
  const dispatch = useDispatch();

  return (
    <section className='whiteboard'>
      <img
        src={decoration}
        alt='whiteboard-decoration'
        className='whiteboard-decoration'
      />
      <div className='whiteboard-container container padding'>
        <div className='whiteboard-content'>
          <div className='whiteboard-heading'>
            <div className='whiteboard-line'></div>
            <h3 className='whiteboard-head'>
              Participa por BECAS DEL 100%
            </h3>
          </div>
          <h2 className='whiteboard-title'>
            Domina la escultura en ZBrush
          </h2>
          <p className='whiteboard-paragraph'>
            Libel premiara los resultados más destacados y dará Becas
            del 100% en este excelente entrenamiento con
            acompañamiento especializado.
          </p>
          <div className='whiteboard-items'>
            {items.map((item, index) => (
              <div className='whiteboard-item' key={index}>
                <img src={listIcon} alt='whiteboard-item' />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className='whiteboard-buttons'>
            <button
              className='whiteboard-button'
              onClick={() => {
                dispatch(openAccess());
              }}>
              Ver curso
            </button>
            <button
              className='whiteboard-trailer'
              onClick={() =>
                dispatch(
                  openVideo({
                    modal: true,
                    url: 'https://www.youtube.com/watch?v=BO4sQALaWn8',
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
        <div className='whiteboard-character-container'>
          <div className='whiteboard-character-elipse'></div>
          <img
            src={character}
            alt='whiteboard-character'
            className='whiteboard-character'
          />
        </div>
      </div>
    </section>
  );
};

export default Whiteboard;
