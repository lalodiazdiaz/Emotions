import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Autosuggest from 'react-autosuggest';
import Modal from '../Modal/Modal';
import styles from './AppointmentModal.module.css';
import { createAppointment } from '../../slices/appointments';
import searchService from '../../services/Users/usersServices';

function AppointmentModal({ onAction, isVisible }) {
	const [data, setData] = useState([]);
	const [users, setUsers] = useState([]);
	const [value, setValue] = useState('');
	const [userSeleccionado, setUserSeleccionado] = useState({});
	const getDataUsers = () => {
		searchService.searchUsers()
			.then((response) => {
				setUsers(response.data.data);
				setData(response.data.data);
			})
			.catch((e) => {
				console.log(e);
			});
	};

	useEffect(() => {
		getDataUsers();
	}, []);

	// eslint-disable-next-line no-shadow
	const onSuggestionsFetchRequested = ({ value }) => {
		// eslint-disable-next-line no-use-before-define
		setUsers(filtrarUsers(value));
	};

	// eslint-disable-next-line no-shadow
	const filtrarUsers = (value) => {
		const inputValue = value.trim().toLowerCase();
		const inputLength = inputValue.length;

		const filtrado = data.filter((user) => {
			const textoCompleto = user.name;

			if (textoCompleto.toLowerCase()
				.normalize('NFD')
				.replace(/[\u0300-\u036f]/g, '')
				.includes(inputValue)) {
				return user;
			}
			return 0;
		});
		return inputLength <= 2 ? [] : filtrado;
	};

	const onSuggestionsClearRequested = () => {
		setUsers([]);
	};

	const getSuggestionValue = (suggestion) => `${suggestion.name}`;

	const renderSuggestion = (suggestion) => (
		<div
			className="sugerencia"
			// eslint-disable-next-line no-use-before-define
			onChange={() => seleccionarUser(suggestion)}
		>
			{`${suggestion.name} ${suggestion.middleName} ${suggestion.lastName}`}
		</div>
	);

	const seleccionarUser = (user) => {
		setUserSeleccionado(user);
	};

	const onChange = (e, { newValue }) => {
		setValue(newValue);
	};

	const inputProps = {
		onChange,
		placeholder: 'Nombre del usuario',
		value,
		styles: 
	};

	const eventEnter = (e) => {
		if (e.key === 'Enter') {
			const userActual = data.filter((u) => u.name === e.target.value.trim());
			const user = {
				// eslint-disable-next-line no-underscore-dangle
				id: userActual[0]._id,
			};
			seleccionarUser(user);
		}
	};

	const loggedUser = window.localStorage.getItem('user');
	const userLogged = JSON.parse(loggedUser);
	const dispatch = useDispatch();

	const initialAppointmentState = {
		date: '',
		hour: '',
		idPacient: '',
		// idPacient: '63b70b02c58705e228d6c34a',
		idUser: userLogged.data.id,
	};

	const [appointment, setAppointment] = useState(initialAppointmentState);

	const handleInputChange = (event) => {
		// eslint-disable-next-line no-shadow
		const { name, value } = event.target;
		setAppointment({ ...appointment, [name]: value });
	};

	const saveAppointment = () => {
		const { date, hour, idPacient, idUser } = appointment;

		dispatch(createAppointment(appointment))
			.unwrap()
			.then(() => {
				setAppointment({
					date,
					hour,
					idPacient,
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
				<div className={styles.data}>
					<div className={styles.form}>
						<h2>Nombre:</h2>
						<Autosuggest
							className={styles.autocomplete}
							getSuggestionValue={getSuggestionValue}
							inputProps={inputProps}
							onChange={handleInputChange}
							onSuggestionsClearRequested={onSuggestionsClearRequested}
							onSuggestionSelected={eventEnter}
							onSuggestionsFetchRequested={onSuggestionsFetchRequested}
							renderSuggestion={renderSuggestion}
							suggestions={users}
						/>
					</div>
					<div className={styles.form}>
						<h2>Fecha:</h2>
						<input
							className={styles.input}
							name="date"
							onChange={handleInputChange}
							required
							type="date"
							value={appointment.date || ''}
						/>
					</div>
					<div className={styles.form}>
						<h2>Hora:</h2>
						<input
							className={styles.input}
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
