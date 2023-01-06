import React from 'react';
import styles from './Modal.module.css';

function Modal({ isVisible, onAction, title, children }) {
	return (
		<div className={isVisible ? styles.modalOpen : styles.modalClose}>
			<div className={styles.backModal} />
			<div className={styles.contModal}>
				<h1>{title}</h1>
				{children}
				<div className={styles.buttons}>
					<button
						className={styles.btnAdd}
						onClick={onAction}
						type="button"
					>Agregar
					</button>
					<button
						className={styles.closeModal}
						onClick={onAction}
						type="button"
					>Cerrar
					</button>
				</div>
			</div>
		</div>
	);
}

export default Modal;
