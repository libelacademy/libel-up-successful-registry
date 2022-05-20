/** @format */

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../css/modals/SupportInitiative.css';
import { closeSupport } from '../../features/support';

import underline from '../../images/Vector 39.png';
import paypal from '../../images/Paypal.png';
import {
  IoLogoWhatsapp,
  IoCardOutline,
  IoClose,
} from 'react-icons/io5';

const SupportInitiative = () => {
  const [visibility, setVisibility] = useState('hidden');
  const [container, setContainer] = useState('support-closed');

  const dispatch = useDispatch();
  const modal = useSelector((state) => state.support.value.modal);

  useEffect(() => {
    if (modal) {
      setVisibility('visible');
      setTimeout(() => {
        setContainer('');
      }, 100);
    }
  }, [modal]);

  const handleCloseModal = (event) => {
    if (event.target.className === 'support-initiative') {
      setContainer('support-closed');
      setTimeout(() => {
        dispatch(closeSupport());
        setVisibility('hidden');
      }, 200);
    }
  };

  return (
    <div
      className='support-initiative'
      style={{ visibility: `${visibility}` }}
      onClick={handleCloseModal}>
      <div className={`support-container ${container}`}>
        <div className="support-elipse-1"></div>
        <div className="support-elipse-2"></div>
        <div className="support-elipse-3"></div>
        <div className='support-content'>
          <button
            className='support-closer'
            onClick={() => {
              setContainer('support-closed');
              setTimeout(() => {
                // handleOpenModal(false);
                dispatch(closeSupport());
                setVisibility('hidden');
              }, 200);
            }}>
            <IoClose />
          </button>
          <span className='support-head'>Apoya a la iniciativa</span>
          <h2 className='support-title'>
            <span className='support-title-degrade'>LIBEL</span>
            &nbsp;
            <span className='support-title-up'>
              UP
              <img src={underline} alt='underline' />
            </span>
          </h2>
          <p className='support-paragraph'>
            realizar donaciones <span>desde 3 USD</span> para que esta
            iniciativa siga creciendo.
          </p>
          <div className='support-buttons'>
            <a className='support-btn support-btn-paypal' href='/#'>
              <img src={paypal} alt='paypal' />
            </a>
            <a className='support-btn support-btn-card' href='/#'>
              <IoCardOutline style={{ marginRight: 6 }} />
              Tarjetas
            </a>
            <a className='support-btn support-btn-other' href='/#'>
              <IoLogoWhatsapp style={{ marginRight: 6 }} />
              Otros medios
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportInitiative;
