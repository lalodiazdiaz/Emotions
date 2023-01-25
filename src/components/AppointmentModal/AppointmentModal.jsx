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
	const [userSelected, setUserSelected] = useState({});

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

	const filteringUsers = (value) => {
		const inputValue = value.trim().toLowerCase();
		const inputLength = inputValue.length;

		const filtering = data.filter((user) => {
			const fullText = user.fullName;

			if (fullText.toLowerCase()
				.normalize('NFD')
				.replace(/[\u0300-\u036f]/g, '')
				.includes(inputValue)) {
				return user;
			}
			return 0;
		});
		return inputLength <= 2 ? [] : filtering;
	};

	const onSuggestionsFetchRequested = ({ value }) => {
		setUsers(filteringUsers(value));
	};

	const onSuggestionsClearRequested = () => {
		setUsers([]);
	};

	const getSuggestionValue = (suggestion) => `${suggestion.fullName}`;

	const selectUser = (user) => {
		setUserSelected(user);
	};

	const renderSuggestion = (suggestion) => (
		<div
			className={styles.suggestion}
			onChange={() => selectUser(suggestion)}
		>
			{`${suggestion.fullName}`}
		</div>
	);

	const eventEnter = (e) => {
		if (e.key === 'Enter') {
			const userCurrent = data.filter((u) => u.fullName === e.target.value.trim());
			const user = {
				id: userCurrent[0].id,
			};
			selectUser(user);
		}
	};

	const loggedUser = window.localStorage.getItem('user');
	const userLogged = JSON.parse(loggedUser);
	const dispatch = useDispatch();

	const initialAppointmentState = {
		date: '',
		hour: '',
		idPacient: userSelected.id,
		idUser: userLogged.data.id,
	};

	const [appointment, setAppointment] = useState(initialAppointmentState);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setAppointment({ ...appointment, [name]: value });
	};

	const [value, setValue] = useState('');

	const onChange = (e, { newValue }) => {
		setValue(newValue);
	};

	const inputProps = {
		className: styles.btnAutocomplete,
		onChange,
		placeholder: 'Nombre del usuario',
		value,
	};

	const saveAppointment = () => {
		const { date, hour, idPacient, idUser } = appointment;

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
