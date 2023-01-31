import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import { useNavigate } from 'react-router-dom';
import styles from './AddPsychologist.module.css';
import { addTherapist } from '../../../slices/psychologist';

function AddPsychologist() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { register, handleSubmit, formState: { errors } } = useForm();
	const [loading, setLoading] = useState(false);
	const forms = useRef();
	const [form, setForm] = useState({
		birthdate: '',
		email: '',
		lastName: '',
		license: '',
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
			license: '',
			middleName: '',
			name: '',
			phone: '',
		});
	};

	const handleAdd = () => {
		dispatch(addTherapist({ form }))
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
				<h2>Registro de psicólogos</h2>
				<form ref={forms} className={styles.contForm} onSubmit={handleSubmit(handleAdd)}>
					<div className={styles.contInput}>
						<p>Nombre: </p>
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
						<p>Segundo nombre: </p>
						<div className={styles.inputValid}>
							<input
								id="middleName"
								onChange={handleChange}
								type="text"
								value={form.middleName}
							/>
						</div>
					</div>
					<div className={styles.contInput}>
						<p>Apellido: </p>
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
								type="text"
								value={form.lastName}
							/>
							{errors.lastName && <strong>{errors.lastName.message}</strong>}
						</div>
					</div>
					<div className={styles.contInput}>
						<p>Email: </p>
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
						<p>Teléfono : </p>
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
										message: 'El teléfono  es un campo obligatorio',
										value: true,
									},
								})}
								onChange={handleChange}
								type="number"
								value={form.phone}
							/>
							{errors.phone && (<strong>{errors.phone.message}</strong>
							)}
						</div>
					</div>
					<div className={styles.contInput}>
						<p>Fecha de nacimiento: </p>
						<div className={styles.inputValid}>
							<input
								id="birthdate"
								max={currentDate}
								name="birthdate"
								{...register('birthdate', {
									required: {
										message: 'La fecha de naciemiento es un campo obligatorio',
										value: true,
									},
								})}
								onChange={handleChange}
								type="date"
								value={form.birthdate}
							/>
							{errors.birthdate && <strong>{errors.birthdate.message}</strong>}
						</div>
					</div>
					<div className={styles.contInput}>
						<p>Cédula : </p>
						<div className={styles.inputValid}>
							<input
								id="license"
								name="license"
								{...register('license', {
									required: {
										message: 'La cédula  profesional es un campo obligatorio',
										value: true,
									},
								})}
								onChange={handleChange}
								type="text"
								value={form.license}
							/>
							{errors.license && <strong>{errors.license.message}</strong>}
						</div>
					</div>
					<div className={styles.contInput}>
						<p>Rol: </p>
						<select
							className={styles.selectOptions}
							id="range"
							onChange={handleChange}
							value={form.range}
						>
							<option value="2">Psicólogo</option>
							<option value="3">Admin</option>
						</select>
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

export default AddPsychologist;
