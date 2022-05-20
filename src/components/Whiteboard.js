/** @format */

import '../css/Whiteboard.css';

// import backgroundImg from '../images/Marcos - render-final-con-mas-luz 1.png';
import listIcon from '../images/list-icon.png';
import character from '../images/Marcos - render.png';

import decoration from '../images/decorations/image 32.png';
import { useDispatch } from 'react-redux';
import { openAccess } from '../features/access';

const items = [
  'Insertar Copy nuevo',
  'Copy Aquí',
  'Ejemplo de texto',
  'Aquí Copy Nuevo',
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
            <h3 className='whiteboard-head'>Whiteboard</h3>
          </div>
          <h2 className='whiteboard-title'>Read Our Doumentes</h2>
          <p className='whiteboard-paragraph'>
            Here is our full documentes that help you to understands
            deeply about us and our operation.
          </p>
          <div className='whiteboard-items'>
            {items.map((item, index) => (
              <div className='whiteboard-item' key={index}>
                <img src={listIcon} alt='whiteboard-item' />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <button className='whiteboard-button' onClick={() => {
                dispatch(openAccess());
              }}>Accede Gratis</button>
        </div>
        <div className='whiteboard-character-container'>
          <div className="whiteboard-character-elipse"></div>
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
