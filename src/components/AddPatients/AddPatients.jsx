import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import Alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { createPatient } from '../../slices/patients';
import styles from './AddPatients.module.css';

function AddPatients() {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const { register, handleSubmit, formState: { errors } } = useForm();
	const dispatch = useDispatch();
	const forms = useRef();

	// const initialPatientState = {
	// 	birthdate: '',
	// 	email: '',
	// 	lastName: '',
	// 	maritalStatus: '',
	// 	middleName: '',
	// 	name: '',
	// 	phone: '',
	// 	range: '2',
	// };

	// const [patient, setPatient] = useState(initialPatientState);

	// const handleInputChange = (event) => {
	// 	const { name, value } = event.target;
	// 	setPatient({ ...patient, [name]: value });
	// };

	// const savePatient = () => {
	// 	const { name, middleName, lastName, email,
	// 		phone, birthdate, maritalStatus, range } = patient;

	// 	dispatch(createPatient(patient))
	// 		.unwrap()
	// 		.then(() => {
	// 			setPatient({
	// 				birthdate,
	// 				email,
	// 				lastName,
	// 				maritalStatus,
	// 				middleName,
	// 				name,
	// 				phone,
	// 				range,
	// 			});
	// 		});
	// };

	const [form, setForm] = useState({
		birthdate: '',
		email: '',
		lastName: '',
		maritalStatus: '',
		middleName: '',
		name: '',
		phone: '',
		range: '2',
	});

	const currentDate = new Date().toJSON().slice(0, 10);

	const handleChange = (event) => {
		setForm({
			...form,
			[event.target.id]: event.target.value,
		});
	};

	const resetForm = () => {
		setForm({
			birthdate: '',
			email: '',
			lastName: '',
			maritalStatus: '',
			middleName: '',
			name: '',
			phone: '',
			range: '',
		});
	};

	const handleAdd = () => {
		dispatch(createPatient({ form }))
			.unwrap()
			.then((res) => {
				setLoading(true);
				if (res.isValid === true) {
					Alertify.success(`<b style='color:white;'>Usuario Registrado 
					</b>`);
					setLoading(false);
					resetForm();
				}
				if (res.isValid === false && res.message === 'Email already exists') {
					Alertify.error(`<b style='color:white;'>Email existente
					</b>`);
					setLoading(false);
				}
			})
			.catch(() => {
				Alertify.error(`<b style='color:white;'>Error al registrar
					</b>`);
				setLoading(false);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<div className={styles.contNewTherapist}>
			<div className={styles.newTherapist}>
				<h2>Nuevo Paciente</h2>
				<form
					ref={forms}
					className={styles.contForm}
					onSubmit={handleSubmit(handleAdd)}
				>
					<div className={styles.contInput}>
						<p>Nombre</p>
						<div className={styles.inputValid}>
							<input
								id="name"
								name="name"
								onChange={handleChange}
								type="text"
								value={form.name}
								{...register('name', {
									pattern: {
										message: 'El formato es incorrecto',
										value: /^[a-zA-Z ]+$/i,
									},
									required: {
										message: 'El nombre es un campo obligatorio',
										value: true,
									},
								})}
							/>
						</div>
						{errors.name && (<strong>{errors.name.message}</strong>
						)}
					</div>
					<div className={styles.contInput}>
						<p>Segundo nombre</p>
						<div className={styles.inputValid}>
							<input
								id="middleName"
								name="middleName"
								onChange={handleChange}
								value={form.middleName}
							/>
						</div>
					</div>
					<div className={styles.contInput}>
						<p>Apellido</p>
						<div className={styles.inputValid}>
							<input
								id="lastName"
								name="lastName"
								onChange={handleChange}
								value={form.lastName}
								{...register('lastName', {
									pattern: {
										message: 'El formato es incorrecto',
										value: /^[a-zA-Z ]+$/i,
									},
									required: {
										message: 'El apellido es un campo obligatorio',
										value: true,
									},
								})}
							/>
						</div>
						{errors.lastName && <strong>{errors.lastName.message}</strong>}
					</div>
					<div className={styles.contInput}>
						<p>Email</p>
						<div className={styles.inputValid}>
							<input
								id="email"
								name="email"
								onChange={handleChange}
								type="text"
								value={form.email}
								{...register('email', {
									pattern: {
										message: 'El formato del E-mail es incorrecto',
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
									},
									required: {
										message: 'El email es obligatorio',
										value: true,
									},
								})}
							/>
						</div>
						{errors.email && <strong>{errors.email.message}</strong>}
					</div>
					<div className={styles.contInput}>
						<p>Teléfono</p>
						<div className={styles.inputValid}>
							<input
								id="phone"
								name="phone"
								onChange={handleChange}
								type="number"
								value={form.phone}
								{...register('phone', {
									pattern: {
										message: 'El formato es incorrecto',
										value: /^[0-9]+$/i,
									},
									required: {
										message: 'El teléfono  es un campo obligatorio',
										value: true,
									},
								})}
							/>
						</div>
						{errors.phone && (<strong>{errors.phone.message}</strong>
						)}
					</div>
					<div className={styles.contInput}>
						<p>Fecha de nacimiento</p>
						<div className={styles.inputValid}>
							<input
								id="birthdate"
								max={currentDate}
								name="birthdate"
								onChange={handleChange}
								value={form.birthdate}
								{...register('birthdate', {
									required: {
										message: 'La fecha de naciemiento es un campo obligatorio',
										value: true,
									},
								})}
							/>
						</div>
						{errors.birthdate && <strong>{errors.birthdate.message}</strong>}
					</div>
					<div className={styles.contInput}>
						<p>Estatus civil</p>
						<div className={styles.inputValid}>
							<input
								name="maritalStatus"
								onChange={handleChange}
								value={form.maritalStatus}
							/>
						</div>
					</div>
					<button
						className={styles.btnAdd}
						disabled={loading}
						type="submit"
					>
						Agregar
					</button>
				</form>
			</div>
		</div>
	);
}

export default AddPatients;
