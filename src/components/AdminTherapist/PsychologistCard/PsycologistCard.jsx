import React from 'react';
import styles from './PsychologistCard.module.css';

function PsycologistCard({ onAction }) {
	return (
		<div className={styles.contCard}>
			<div className={styles.contInformation}>

				<div className={styles.dataCard}>
					<p>Psicologo: Claudia Patricia Moreno Gonzalez</p>
				</div>
			</div>

			<div className={styles.contButtons}>

				<button
					className={styles.btnDelete}
					onClick={onAction}
					type="button"
				>
					Eliminar
				</button>
			</div>
		</div>
	);
}

export default PsycologistCard;
