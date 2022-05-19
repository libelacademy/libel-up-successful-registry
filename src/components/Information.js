/** @format */

import '../css/Information.css';

import { IoLogoWhatsapp } from 'react-icons/io5';
import underline from '../images/underline.png';

import ZBrush from '../images/technologies/zbrush.png';
import substance from '../images/technologies/substance.png';
import photoshop from '../images/technologies/photoshop.png';
import blender from '../images/technologies/blender.png';

const Information = () => {


  return (
    <section className='information' id="information">
      <div className='information-container container padding'>
        <h3 className='information-head'>
          Bienvenido a <b>LIBEL UP</b>
        </h3>
        <h2 className='information-title'>
          <span>Apoya</span> este programa para que podamos continuar
          con la{' '}
          <span>
            enseñanza gratuita
            <img src={underline} alt='underline' />
          </span>
        </h2>
        <p className='information-paragraph'>
          Puedes realizar donaciones <span>desde 3 USD</span> para que
          esta iniciativa siga creciendo y podamos brindar enseñanza
          gratuita de calidad.
        </p>
        <div className='information-buttons'>
          <button className='information-btn btn-degrade'>
            Apoya esta iniciativa
          </button>
          <button className='information-btn btn-dark'>
            <IoLogoWhatsapp style={{ marginRight: 16 }} />
            Dona un curso
          </button>
        </div>
        <span className='information-next'>Próximos cursos</span>
        <div className='information-technologies'>
          <img src={ZBrush} alt='ZBrush' />
          <img src={substance} alt='Substance' />
          <img src={photoshop} alt='Photoshop' />
          <img src={blender} alt='Blender' />
        </div>
      </div>
      <div className='information-filter'></div>
    </section>
  );
};

export default Information;
