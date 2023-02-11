import React from 'react';
import styles from './Modal.module.css';

function Modal({ isVisible, onAction, title, children, typeModal }) {
	return (
		<div className={isVisible ? styles.modalOpen : styles.modalClose}>
			<div className={typeModal === 'normal' ? styles.backModal
				: styles.backModalAppointment}
			/>
			<div className={typeModal === 'normal'
				? styles.contModal : styles.contModalAppointment}
			>
				<h1>{title}</h1>
				{children}
				<div className={styles.buttons}>
					<button
						className={styles.closeModal}
						onClick={onAction}
						type="button"
					>
						Cerrar
					</button>
				</div>
			</div>
		</div>
	);
}

export default Modal;
