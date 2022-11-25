import React, { useState } from 'react';
import styles from './Login.module.css';
import logo from '../../Assets/logo.png';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Login() {
	const navigate = useNavigate();
	const [user, setUser] = useState('null');
	const {register, handleSubmit, formState: { errors } } = useForm();

	const onSubmit = (events) => {
		setTimeout(() => {
		  // TODO: Consume backend endpoint
		  if (events.email === 'luz@gmail.com' && events.password === '123456') {
				setUser(events);
				navigate('/dashboard');
		  } else {
				setUser(null);
		  }
		}, 4000);
	};
	return (
		<div className={styles.container}>
			<div className={styles.contLogo}>
				<img className={styles.imgLogo} src={logo} alt={'logo'} />
			</div>
			<div className={styles.contform}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className={styles.campo}>
						<h2>Log In</h2>
						<div className={`${styles.input}
              			${errors.email && styles.error}`}>
							<label>Username</label>
							<input
								className={styles.btnUser}
								placeholder="Username"
								type={'text'}
								
								{...register('email', {
									required: {
										value: true,
										message: 'El email es obligatorio'
									}
								})}
							/>
						</div>
						{errors.email && <span>{errors.email.message}</span>}
						<div className={`${styles.input}
              				${errors.password && styles.error}`}>
							<label>Password</label>
							<input
								className={styles.btnPass}
								placeholder="Password"
								type={'password'}
								
								{...register('password', {
									required: {
										value: true,
										message: 'La contraseña es obligatoria'
									}
								})}
							/>
						</div>
						{errors.password && <span>{errors.password.message}</span>}
						{!user && <span>Contraseña y/o email incorrecta</span>}
						<input
							className={styles.btnSend}
							type={'submit'}
							value={'Log In'}
						/>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Login;