/** @format */

import React, { useEffect, useState } from 'react';
import '../../css/modals/AccessFree.css';
import { useDispatch, useSelector } from 'react-redux';
import { closeAccess } from '../../features/access';

import decoration from '../../images/image 49.png';
import diamond from '../../images/image 50.png';

import { IoClose, IoCheckmarkCircle } from 'react-icons/io5';

const AccessFree = () => {
  const [visibility, setVisibility] = useState('hidden');
  const [container, setContainer] = useState('access-closed');

  const [selected, setSelected] = useState(false);
  const [typeStudent, setTypeStudent] = useState(null);
  const [url, setUrl] = useState(null);

  const dispatch = useDispatch();
  const modal = useSelector((state) => state.access.value.modal);

  useEffect(() => {
    if (modal) {
      setVisibility('visible');
      setTimeout(() => {
        setContainer('');
      }, 100);
    }
  }, [modal]);

  const handleCloseModal = (event) => {
    if (event.target.className === 'access-free') {
      setContainer('access-closed');
      setTimeout(() => {
        dispatch(closeAccess());
        setVisibility('hidden');
      }, 200);
    }
  };

  const listItems = [
    'Clases en Video',
    'Acceso a Discord Privado',
    '3 Feedbacks en Vivo',
    'Duración 15 Días',
  ];

  return (
    <div
      className='access-free'
      style={{ visibility: `${visibility}` }}
      onClick={handleCloseModal}>
      <div className={`access-container ${container}`}>
        <img
          src={decoration}
          alt='decoration'
          className='access-decoration'
        />
        <div className="access-elipse-1"></div>
        <div className="access-elipse-2"></div>
        <div className='access-content'>
          <button
            className='access-closer'
            onClick={() => {
              setContainer('access-closed');
              setTimeout(() => {
                // handleOpenModal(false);
                dispatch(closeAccess());
                setVisibility('hidden');
              }, 200);
            }}>
            <IoClose />
          </button>
          <div className='access-head'>
            <div className='access-head-icon'>
              <img
                src={diamond}
                alt='diamond'
                className='access-diamond'
              />
            </div>
            <div className='access-head-text'>
              <span>Accede Gratis</span>
              <span style={{ fontWeight: 500 }}>$0 USD</span>
            </div>
          </div>
          <div className='access-list'>
            {listItems.map((item, index) => (
              <span
                className='access-list-item'
                key={index}
                style={{ marginBottom: 15 }}>
                <IoCheckmarkCircle style={{ marginRight: 25 }} />
                {item}
              </span>
            ))}
          </div>
          <div className='access-buttons'>
            {!selected ? (
              <>
                <button
                  className='access-btn access-btn-current'
                  onClick={() => {
                    setSelected(true);
                    setTypeStudent('current');
                    setUrl('https://libel.academy/libel-up-estudiantes/');
                  }}>
                  Soy Alumno
                </button>
                <button
                  className='access-btn access-btn-new'
                  onClick={() => {
                    setSelected(true);
                    setTypeStudent('new');
                    setUrl('https://libel.academy/libel-up-nuevos-estudiantes/');  
                  }}>
                  Soy Nuevo
                </button>
              </>
            ) : (
              <>
                <p style={{ textAlign: 'center', color: '#ffffff', marginBottom: 10 }}>
                  ¿Desea continuar como estudiante{' '}
                  {typeStudent === 'current' ? 'actual' : 'nuevo'}?
                </p>
                <div className='access-buttons-options'>
                  <a
                    href={url}
                    className='access-btn access-btn-yes'
                    style={{
                      backgroundColor: '#6000de',
                      marginBottom: 10,
                      height: 38,
                      width: 150
                    }}>
                    Continuar
                  </a>
                  <button
                    className='access-btn access-btn-no'
                    style={{
                      backgroundColor: 'transparent',
                      border: '2px solid #ffffff',
                      height: 38,
                      width: 150
                    }}
                    onClick={() => {
                      setSelected(false);
                      setTypeStudent(null);
                      setUrl(null);
                    }}>
                    Cancelar
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessFree;
