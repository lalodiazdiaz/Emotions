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

	const [form, setForm] = useState({
		birthdate: '',
		email: '',
		gender: '',
		lastName: '',
		maritalStatus: '',
		middleName: '',
		name: '',
		phone: '',
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
			gender: '',
			lastName: '',
			maritalStatus: '',
			middleName: '',
			name: '',
			phone: '',
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
			.catch((error) => {
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
								onChange={handleChange}
								type="text"
								value={form.name}
							/>
							{errors.name && (<strong>{errors.name.message}</strong>
							)}
						</div>
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
								onChange={handleChange}
								value={form.lastName}
							/>
							{errors.lastName && <strong>{errors.lastName.message}</strong>}
						</div>
					</div>
					<div className={styles.contInput}>
						<p>Email</p>
						<div className={styles.inputValid}>
							<input
								id="email"
								name="email"
								{...register('email', {
									pattern: {
										message: 'El formato del E-mail es incorrecto',
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
									},
									required: {
										message: 'El email es un campo obligatorio',
										value: true,
									},
								})}
								onChange={handleChange}
								type="text"
								value={form.email}
							/>
							{errors.email && <strong>{errors.email.message}</strong>}
						</div>
					</div>
					<div className={styles.contInput}>
						<p>Teléfono</p>
						<div className={styles.inputValid}>
							<input
								id="phone"
								name="phone"
								{...register('phone', {
									pattern: {
										message: 'El formato es incorrecto',
										value: /^[0-9]+$/i,
									},
									required: {
										message: 'El teléfono es un campo obligatorio',
										value: true,
									},
								})}
								onChange={handleChange}
								type="number"
								value={form.phone}
							/>
							{errors.phone && <strong>{errors.phone.message}</strong>}
						</div>
					</div>
					<div className={styles.contInput}>
						<p>Fecha de nacimiento</p>
						<div className={styles.inputValid}>
							<input
								id="birthdate"
								max={currentDate}
								name="birthdate"
								{...register('birthdate', {
									required: {
										message: 'La fecha de nacimiento es un campo obligatorio',
										value: true,
									},
								})}
								onChange={handleChange}
								value={form.birthdate}
							/>
							{errors.birthdate && <strong>{errors.birthdate.message}</strong>}
						</div>
					</div>
					<div className={styles.contInput}>
						<p>Estado civil</p>
						<div className={styles.inputValid}>
							<input
								id="maritalStatus"
								name="maritalStatus"
								{...register('maritalStatus', {
									required: {
										message: 'El estado civil es un campo obligatorio',
										value: true,
									},
								})}
								onChange={handleChange}
								type="text"
								value={form.maritalStatus}
							/>
							{errors.maritalStatus && <strong>{errors.maritalStatus.message}</strong>}
						</div>
					</div>
					<div className={styles.contInput}>
						<p>Género</p>
						<div className={styles.inputValid}>
							<input
								id="gender"
								name="gender"
								{...register('gender', {
									required: {
										message: 'El género es un campo obligatorio',
										value: true,
									},
								})}
								onChange={handleChange}
								type="text"
								value={form.gender}
							/>
							{errors.gender && <strong>{errors.gender.message}</strong>}
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
