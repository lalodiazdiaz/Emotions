import React from 'react';
import styles from './Modal.module.css';

function Modal({ isVisible, onAction, title, children }) {
	return (
		<div className={isVisible ? styles.modalOpen : styles.modalClose}>
			<div className={styles.backModal} />
			<div className={styles.contModal}>
				<h1>{title}</h1>
				{children}
				<button
					className={styles.closeModal}
					onClick={onAction}
					type="button"
				>Cerrar
				</button>
			</div>
		</div>
	);
}

export default Modal;
