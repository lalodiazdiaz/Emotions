import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Alertify from 'alertifyjs';
import Modal from '../Modal/Modal';
import 'alertifyjs/build/css/alertify.css';
import styles from './AppointmentModal.module.css';
import { createAppointment } from '../../slices/appointments';

function AppointmentModal({ onAction, isVisible }) {
	const loggedUser = window.localStorage.getItem('user');
	const userLogged = JSON.parse(loggedUser);
	const dispatch = useDispatch();

	const initialAppointmentState = {
		date: '',
		hour: '',
		idPacient: '63ab303d9523e22c9ca14583',
		idUser: userLogged.data.id,
	};

	const [appointment, setAppointment] = useState(initialAppointmentState);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setAppointment({ ...appointment, [name]: value });
	};

	const saveAppointment = () => {
		const { date, hour, idPacient, idUser } = appointment;
		console.log(hour);
		console.log(appointment);

		dispatch(createAppointment(appointment))
			.unwrap()
			.then(() => {
				setAppointment({
					date,
					hour,
					idPacient,
					idUser,
				});
				Alertify.success(`<b style='color:white;'>Se registro su cita correctamente.
				</b>`);
			})
			.catch((e) => {
				console.log(e);
				Alertify.error(`<b style='color:white;'>No se logro registrar su cita.
				</b>`);
			});
	};
	return (
		<Modal
			isVisible={isVisible}
			onAction={onAction}
			title="Agendar Cita"
		>
			<div className={styles.data}>
				<div className={styles.data}>
					{/* <div className={styles.form}>
						<h2>Nombre:</h2>
						<input
							className={styles.input}
							name="pacient"
							placeholder="Nombre del Usuario"
							type="text"
						/>
					</div> */}
					<div className={styles.form}>
						<h2>Fecha:</h2>
						<input
							className={styles.input}
							name="date"
							onChange={handleInputChange}
							type="date"
							value={appointment.date || ''}
						/>
					</div>
					<div className={styles.form}>
						<h2>Hora:</h2>
						<input
							className={styles.input}
							// defaultValue="hh:mm:ss"
							format="hh:mm:ss"
							name="hour"
							onChange={handleInputChange}
							type="time"
							value={appointment.hour || ''}
						/>
					</div>
					<input
						className={styles.btnAdd}
						onClick={saveAppointment}
						type="submit"
						value="Agregar"
					/>
				</div>
			</div>
		</Modal>
	);
}

export default AppointmentModal;
