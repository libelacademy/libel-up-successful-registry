/** @format */

import '../css/Learn.css';

import libelUp from '../images/libel-up.png';

import ZBrush from '../images/Zbrush.png';
import zoom from '../images/zoom.png';
import discord from '../images/discord.png';
import libel from '../images/libel.png';

import classOnline from '../images/Clases en video icon.png';
import discordIcon from '../images/Discord Icon.png';
import feedbackIcon from '../images/Feedback icon.png';
import tabletsIcon from '../images/Tabletas icon.png';
import internetIcon from '../images/Internet icon.png';
import computerIcon from '../images/Computador icon.png';

const Learn = () => {
  return (
    <section className='learn'>
      <div className='learn-icons'>
        <img src={ZBrush} alt='ZBrush' />
        <img src={zoom} alt='zoom' />
        <img src={discord} alt='discord' />
        <img src={libel} alt='libel' />
      </div>
      <img src={libelUp} alt='libel up' className='learn-character' />
      <div className='learn-container container padding'>
        <h2 className='learn-title'>Aprende ZBrush GRATIS</h2>
        <div className='learn-separator'></div>
        <p className='learn-paragraph'>
          Realizaremos el siguiente modelo con acompañamiento en vivo
        </p>
        <div className='learn-subjects'>
          <div className='learn-first-part'>
            <div className='learn-item'>
              <img
                src={classOnline}
                alt='class online'
                className='learn-subject-icon'
              />
              <div className='learn-subject'>
                <h4 className='learn-subject-title'>
                  Obtén Clases en Video
                </h4>
                <p className='learn-subject-content'>
                  para que puedas verlas cuando y donde quieras
                </p>
              </div>
            </div>
            <div className='learn-item'>
              <img
                src={discordIcon}
                alt='class online'
                className='learn-subject-icon'
              />
              <div
                className='learn-subject'
                style={{ paddingRight: 50 }}>
                <h4 className='learn-subject-title'>
                  Acceso a Discord privado
                </h4>
                <p className='learn-subject-content'>
                  Accede de igual forma a nuestro Discord privado
                </p>
              </div>
            </div>

            <div className='learn-item'>
              <img
                src={feedbackIcon}
                alt='class online'
                className='learn-subject-icon'
              />
              <div
                className='learn-subject'
                style={{ marginBottom: 0, width: 290 }}>
                <h4 className='learn-subject-title'>
                  Feedback en vivo
                </h4>
                <p className='learn-subject-content'>
                  Tendrás 3 feedback en vivo por zoom (1 por semana)
                </p>
              </div>
            </div>
          </div>
          <div className='learn-separator-two'></div>
          <div className='learn-second-part'>
            <div className='learn-item'>
              <img
                src={tabletsIcon}
                alt='class online'
                className='learn-subject-icon'
              />
              <div className='learn-subject'>
                <h4 className='learn-subject-title'>
                  Requieres Tableta Digitalizadora
                </h4>
                <p className='learn-subject-content'>
                  Para un mejor aprendizaje, requerirás de una tableta
                  Digitalizadora
                </p>
              </div>
            </div>

            <div className='learn-item'>
              <img
                src={internetIcon}
                alt='class online'
                className='learn-subject-icon'
              />
              <div
                className='learn-subject'
                style={{ paddingLeft: 50 }}>
                <h4 className='learn-subject-title'>
                  Acceso a Internet Estable
                </h4>
                <p className='learn-subject-content'>
                  Necesitarás acceso a una red de internet estable
                  para tus feedbacks
                </p>
              </div>
            </div>

            <div className='learn-item'>
              <img
                src={computerIcon}
                alt='class online'
                className='learn-subject-icon'
              />
              <div
                className='learn-subject'
                style={{ marginBottom: 0 }}>
                <h4 className='learn-subject-title'>
                  Computadora Gama Media
                </h4>
                <p className='learn-subject-content'>
                  Core i5 de 8GB a 16GB con tarjeta de vídeo (como
                  mínimo)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learn;
