import React, { useState } from 'react';
import axios from 'axios';
import Alertify from 'alertifyjs';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styles from './Login.module.css';
import logo from '../../assets/logo.png';

const URL = 'http://localhost:5000/api/login';

function Login() {
	const navigate = useNavigate();
	const [user] = useState('null');
	const { register, handleSubmit, formState: { errors } } = useForm();
	const [body, setBody] = useState({ email: '', password: '' });

	const inputChange = ({ target }) => {
		const { name, value } = target;
		setBody({
			...body,
			[name]: value,
		});
	};

	const onSubmit = () => {
		axios.post(URL, body)
			.then(({ data }) => {
				if (data.data.error === false) {
					localStorage.setItem('UserLogged', JSON.stringify(data.data.loginData));
					navigate('/dashboard');
					Alertify.success(`<b style='color:white;'>Bienvenido
						${data.data.loginData.fullName}</b>`);
				} else if (data.data.error === true) {
					Alertify.error(`<b style='color:white;'>${data.data.msg}</b>`);
				}
			})
			// eslint-disable-next-line no-unused-vars
			.catch(({ response }) => {
			});
	};

	return (
		<div className={styles.container}>
			<div className={styles.contLogo}>
				<img alt="logo" className={styles.imgLogo} src={logo} />
				<div className={styles.contform}>
					<div className={styles.campo}>
						<h2 onSubmit={handleSubmit(onSubmit)}>Log In</h2>
						<div
							className={`${styles.input}
              			${errors.email && styles.error}`}
						>
							<div className={styles.contInput}>
								<p>Email</p>
								<input
									className={styles.btnUser}
									name="email"
									{...register('email', {
										required: {
											message: 'El email es obligatorio',
											value: true,
										},
									})}
									onChange={inputChange}
									placeholder="Username"
									type="text"
									value={body.email}
								/>
							</div>
						</div>
						{errors.email && <span>{errors.email.message}</span>}
						<div className={`${styles.input} ${errors.password && styles.error}`}>
							<div className={styles.contInput}>
								<p>Password</p>
								<input
									className={styles.btnPass}
									name="password"
									{...register('password', {
										required: {
											message: 'La contraseña es obligatoria',
											value: true,
										},
									})}
									onChange={inputChange}
									placeholder="Password"
									type="password"
									value={body.password}
								/>
							</div>
						</div>
						{errors.password && <span>{errors.password.message}</span>}
						{!user && <span>Contraseña y/o email incorrecta</span>}
						<input
							className={styles.btnSend}
							type="submit"
							value="Iniciar sesion"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
