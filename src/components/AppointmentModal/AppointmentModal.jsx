import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import Modal from '../Modal/Modal';
import styles from './AppointmentModal.module.css';
import { createAppointment } from '../../slices/appointments';
import searchService from '../../services/Users/usersServices';

function AppointmentModal({ onAction, isVisible }) {
	const currentDate = new Date().toJSON().slice(0, 10);
	const [data, setData] = useState([]);
	const [users, setUsers] = useState([]);
	const [userSelected, setUserSelected] = useState({});
	const loggedUser = window.localStorage.getItem('user');
	const userLogged = JSON.parse(loggedUser);
	const dispatch = useDispatch();

	const getDataUsers = () => {
		searchService.searchUsers()
			.then((response) => {
				setUsers(response.data.data);
				setData(response.data.data);
			})
			.catch((e) => {
			});
	};

	useEffect(() => {
		getDataUsers();
	}, []);

	const options = users.map((element) => ({ label: `${element.fullName}`,
		value: `${element.id}` }));

	const handleSelectChange = ({ value }) => {
		setUserSelected(value);
	};

	const [appointment, setAppointment] = useState({
		date: '',
		hour: '',
		idPacient: userSelected.id,
		idUser: userLogged.data.id,
	});

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setAppointment({ ...appointment, [name]: value });
	};

	const saveAppointment = () => {
		const { date, hour, idUser } = appointment;
		dispatch(createAppointment(appointment))
			.unwrap()
			.then(() => {
				setAppointment({
					date,
					hour,
					idPacient: userSelected.id,
					idUser,
				});
			});
	};
	return (
		<Modal
			isVisible={isVisible}
			onAction={onAction}
			title="Agendar Cita"
		>
			<div className={styles.data}>
				<div className={styles.dataAppointment}>
					<div className={styles.form}>
						<p className={styles.name}>Nombre:</p>
						<Select
							className={styles.inputName}
							name="idPacient"
							onChange={handleSelectChange}
							options={options}
							type="submit"
						/>
					</div>
					<div className={styles.form}>
						<p>Fecha:</p>
						<input
							className={styles.inputDate}
							min={currentDate}
							name="date"
							onChange={handleInputChange}
							required
							type="date"
							value={appointment.date || ''}
						/>
					</div>
					<div className={styles.form}>
						<p>Hora:</p>
						<input
							className={styles.inputHour}
							name="hour"
							onChange={handleInputChange}
							required
							step="30"
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
