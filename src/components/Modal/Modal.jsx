import React from 'react';
import styles from './Modal.module.css';

function Modal({ style, onAction, title, Content }) {
	return (
		<div className={style}>
			<div className={styles.backModal} />
			<div className={styles.contModal}>
				<h1>{title}</h1>
				<Content />
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
