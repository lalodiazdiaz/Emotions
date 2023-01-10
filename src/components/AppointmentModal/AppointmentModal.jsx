import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import Alertify from 'alertifyjs';
import { useForm } from 'react-hook-form';
import Modal from '../Modal/Modal';
import 'alertifyjs/build/css/alertify.css';
import styles from './AppointmentModal.module.css';
import { appointments } from '../../slices/appointments';

function AppointmentModal({ onAction, isVisible }) {
	const loggedUser = window.localStorage.getItem('user');
	const userLogged = JSON.parse(loggedUser);
	const idUser = userLogged.data.id;
	const form = useRef();
	const [dateData, setDateData] = useState();
	const [time, setTime] = useState();
	const date = `${dateData} ${time}:00`;
	console.log(date);
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();

	const onChangeDate = (e) => {
		const changeDate = e.target.value;
		setDateData(changeDate);
	};

	const onChangeTime = (e) => {
		const changeTime = e.target.value;
		setTime(changeTime);
	};
	const idPatient = '63ab303d9523e22c9ca14';
	const { handleSubmit, formState: { errors } } = useForm();
	const handleAppointments = () => {
		setLoading(true);
		dispatch(appointments({ date, idPatient, idUser }))
			.unwrap()
			.then(() => {
				// window.location.reload();
				Alertify.success(`<b style='color:white;'>Se registro su cita correctamente.
					</b>`);
			})
			.catch(() => {
				Alertify.error(`<b style='color:white;'>No se logro registrar su cita.
					</b>`);
				setLoading(false);
			});
	};
	return (
		<Modal
			isVisible={isVisible}
			onAction={onAction}
			title="Agendar Cita"
		>
			<form ref={form} onSubmit={handleSubmit(handleAppointments)}>
				<div className={styles.data}>
					{/* <div className={styles.form}>
					<h2>Nombre:</h2>
					<input
						className={styles.input}
						name="userName"
						placeholder="Nombre del Usuario"
						type="text"
					/>
				</div> */}
					<div className={styles.form}>
						<h2>Fecha:</h2>
						<input
							className={styles.input}
							name="date"
							onChange={onChangeDate}
							placeholder="Fecha de la cita"
							type="date"
						/>
					</div>
					<div className={styles.form}>
						<h2>Hora:</h2>
						<input
							className={styles.input}
							name="time"
							onChange={onChangeTime}
							placeholder="Hora de la cita"
							type="time"
						/>
					</div>
					<input
						className={styles.btnAdd}
						disabled={loading}
						type="submit"
						value="Agregar"
					/>
				</div>
			</form>
		</Modal>
	);
}

export default AppointmentModal;
