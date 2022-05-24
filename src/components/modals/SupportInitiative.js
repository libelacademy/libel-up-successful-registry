/** @format */

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../css/modals/SupportInitiative.css';
import { closeSupport } from '../../features/support';

import underline from '../../images/Vector 39.png';
import paypal from '../../images/Paypal.png';
import { IoLogoWhatsapp, IoClose } from 'react-icons/io5';

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
        <div className='support-elipse-1'></div>
        <div className='support-elipse-2'></div>
        <div className='support-elipse-3'></div>
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
            Realizar donaciones <span>desde 3 USD</span> para que esta
            iniciativa siga creciendo.
          </p>
          <div className='support-buttons'>
            <a
              className='support-btn support-btn-paypal'
              href='https://www.paypal.com/donate/?hosted_button_id=AP5FYG2WBNA4Y'
              target={'_blank'}
              rel='noreferrer'>
              <img src={paypal} alt='paypal' />
            </a>
            <button className='support-btn support-btn-card'>
              <form
                id='frm_ePaycoCheckoutOpen'
                name='frm_ePaycoCheckoutOpen'
                method='POST'
                action='https://secure.payco.co/checkoutopen.php'>
                <input
                  name='p_cust_id_cliente'
                  type='hidden'
                  value='59528'
                />
                <input
                  name='p_key'
                  type='hidden'
                  value='cf0c43c42fa90aac5370f658af87c06f60d27379'
                />
                <input name='p_id_factura' type='hidden' value='' />
                <input
                  name='p_description'
                  type='hidden'
                  value='Donación a Libel Up'
                />
                <input
                  name='p_detalle'
                  type='hidden'
                  value='¡Muchas gracias! Con tu ayuda podremos continuar enseñando 3D gratis'
                />
                <input name='p_referencia' type='hidden' value='' />
                <input
                  name='p_test_request'
                  type='hidden'
                  value='false'
                />
                <input
                  name='p_url_respuesta'
                  type='hidden'
                  value='https://libel.academy/libel-up'
                />
                <input
                  name='p_url_confirmacion'
                  type='hidden'
                  value='https://libel.academy/libel-up'
                />
                <input
                  type='image'
                  id='imagen'
                  src='https://multimedia.epayco.co/dashboard/btns/btn7.png'
                  alt=''
                />
                <input
                  type='hidden'
                  id='idboton'
                  name='idboton'
                  value='45821'
                />
              </form>
            </button>
            <a
              className='support-btn support-btn-other'
              href='https://wa.link/d9w6dg'
              target={'_blank'}
              rel='noreferrer'>
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
