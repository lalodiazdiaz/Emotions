import React from 'react';
import Modal from '../Modal/Modal';
import URL from '../../constants';
import styles from './ScheduleModal.module.css';

function ScheduleModal({ style, onAction }) {
	return (
		<Modal
			onAction={onAction}
			style={style}
			title="Consulta a tu psicologo"
		>
			<div className={styles.contact}>
				<h2>Lic. Claudia Patricia Gonzalez Moreno </h2>
				<a
					className={styles.callPshychologist}
					href={URL}
					rel="noreferrer"
					target="_blank"
				>
					Contactar
				</a>
			</div>
		</Modal>
	);
}

export default ScheduleModal;
