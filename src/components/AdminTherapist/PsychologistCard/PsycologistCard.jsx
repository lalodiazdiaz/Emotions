import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Alertify from 'alertifyjs';
import styles from './PsychologistCard.module.css';
import 'alertifyjs/build/css/alertify.css';
import { deleteTherapist } from '../../../slices/psychologist';

function PsycologistCard({ onAction, data, id, userId }) {
	const [isVisible, setIsVisible] = useState(false);
	const dispatch = useDispatch();

	const handleDeleteAppointment = async () => {
		setIsVisible(true);
		await dispatch(deleteTherapist({ id }))
			.then((res) => {
				if (res.payload.isValid) {
					Alertify.success(`<b style='color:white;'>Usuario eliminado
					</b>`);
				}
			});
		onAction();
		setIsVisible(false);
	};

	return (
		<div className={styles.contCard}>
			<div className={styles.contInformation}>

				<div className={styles.dataCard}>
					<p>Psicologo: {data.fullName}</p>
				</div>
			</div>
			<div className={styles.contButtons}>
				{id !== userId
					?			(
						<button
							className={styles.btnDelete}
							disabled={isVisible}
							onClick={handleDeleteAppointment}
							type="button"
						>
							Eliminar
						</button>
					)
					: null}

			</div>
		</div>
	);
}

export default PsycologistCard;
