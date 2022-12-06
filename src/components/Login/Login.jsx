import React, { useState } from 'react';
import axios from 'axios';
// eslint-disable-next-line import/no-unresolved
import Alertify from 'alertifyjs';
// import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import logo from '../../assets/logo.png';

const URL = 'http://localhost:5000/api/login';

function Login() {
	const navigate = useNavigate();
	const [user] = useState('null');
	const { register, handleSubmit, formState: { errors } } = useForm();
	const [body, setBody] = useState({ email: '', password: '' });
	// const [data, setData] = useState();

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
			</div>
			<div className={styles.contform}>
				<form>
					<div className={styles.campo}>
						<h2 onSubmit={handleSubmit(onSubmit)}>Log In</h2>
						<div
							className={`${styles.input}
              			${errors.email && styles.error}`}
						>
							<label htmlFor="username">
								Username
								<input
									className={styles.btnUser}
									name="email"
									{...register('email', {
										required: {
											message: 'El email es obligatorio',
											value: true,
										},
									})}
									// eslint-disable-next-line react/jsx-no-bind
									onChange={inputChange}
									placeholder="Username"
									type="text"
									value={body.email}
								/>
							</label>
						</div>
						{errors.email && <span>{errors.email.message}</span>}
						<div className={`${styles.input} ${errors.password && styles.error}`}>
							<label htmlFor="password">
								Password
								<input
									className={styles.btnPass}
									name="password"
									{...register('password', {
										required: {
											message: 'La contraseña es obligatoria',
											value: true,
										},
									})}
									// eslint-disable-next-line react/jsx-no-bind
									onChange={inputChange}
									placeholder="Password"
									type="password"
									value={body.password}
								/>
							</label>
						</div>
						{errors.password && <span>{errors.password.message}</span>}
						{!user && <span>Contraseña y/o email incorrecta</span>}
						<input
							className={styles.btnSend}
							type="submit"
							value="Log In"
						/>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Login;
