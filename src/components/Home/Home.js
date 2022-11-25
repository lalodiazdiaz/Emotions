import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './Home.module.css';
import Modal from 'react-modal';

const CUSTOMSTYLES = {
  content: {
    width: '70%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
  },
};

function Home() {

  const [modalIsOpen, setIsOpen] = useState(false);
  const url = ' https://wa.me/526145153963';

  return (
    <div className={styles.contHome}>
      <Navbar />
      <div className={styles.bodyHome}>
        <div className={styles.agendar} onClick={() => setIsOpen(true)}>Agendar</div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        style={CUSTOMSTYLES}
      >
        <div className={styles.modalCont}>
          <text>Lic. Claudia Patricia González Moreno</text>
          <hr />
          <a href={url} target="_blank" rel="noreferrer">
            <input type={'submit'} value={'Agendar'} className={styles.inputCita} />
          </a>
        </div>
        <hr />
        <div className={styles.btnCont}>
          <button className={styles.btnCloseModal} onClick={() => setIsOpen(false)}>Cerrar</button>
        </div>

      </Modal>
    </div>
  );
}

export default Home;