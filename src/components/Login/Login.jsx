import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styles from './Login.module.css';
import logo from '../../assets/logo.png';
import { login } from '../../slices/auth';

function Login(props) {
	const navigate = useNavigate();
	const form = useRef();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const { register, handleSubmit, formState: { errors } } = useForm();
	const { isLoggedIn } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const onChangeEmail = (e) => {
		const changeEmail = e.target.value;
		setEmail(changeEmail);
	};

	const onChangePassword = (e) => {
		const changePassword = e.target.value;
		setPassword(changePassword);
	};

	const handleLogin = () => {
		setLoading(true);
		dispatch(login({ email, password }))
			.unwrap()
			.then(() => {
				const range = JSON.parse(localStorage.getItem('user'));
				if (range.data.range === 1) {
					navigate('/dashboardP');
				} else {
					navigate('/dashboardT');
				}
				window.location.reload();
				Alertify.success(`<b style='color:white;'>Bienvenido
					</b>`);
			})
			.catch(() => {
				Alertify.error(`<b style='color:white;'>Email y/o password erroneos
					</b>`);
				setLoading(false);
			});
	};
	if (isLoggedIn) {
		const range = JSON.parse(localStorage.getItem('user'));
		if (range.data.range === 1) {
			return <Navigate to="/dashboardP" />;
		} if (range.data.range === 2) {
			return <Navigate to="/dashboardT" />;
		}
	}

	return (
		<div className={styles.container}>
			<div className={styles.contLogo}>
				<img alt="logo" className={styles.imgLogo} src={logo} />
			</div>
			<div className={styles.contform}>
				<form ref={form} onSubmit={handleSubmit(handleLogin)}>
					<div className={styles.campo}>
						<h2>Log In</h2>
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
										pattern: {
											message: 'El formato del E-mail es incorrecto',
											value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
										},
										required: {
											message: 'El email es obligatorio',
											value: true,
										},
									})}
									onChange={onChangeEmail}
									placeholder="Email"
									type="text"
									value={email}
								/>
							</div>
						</div>
						{errors.email && <span>{errors.email.message}</span>}
						<div className={`${styles.input}
						${errors.password && styles.error}`}
						>
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
									onChange={onChangePassword}
									placeholder="Password"
									type="password"
									value={password}
								/>
							</div>
						</div>
						{errors.password && <span>{errors.password.message}</span>}
						<input
							className={styles.btnSend}
							disabled={loading}
							type="submit"
							value="Iniciar sesion"
						/>
					</div>
				</form>
			</div>

		</div>
	);
}

export default Login;
