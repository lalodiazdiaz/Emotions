import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './Login.module.css';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();

  const [user, setUser] = useState('null');
  const { register, handleSubmit, formState: { errors } } = useForm();

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
        <img alt="logo" className={styles.imgLogo} src={logo} />
      </div>
      <div className={styles.contform}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.campo}>
            <h2>Log In</h2>
            <div
              className={`${styles.input}
              			${errors.email && styles.error}`}
            >
              <label htmlFor="username">
                Username
                <input
                  className={styles.btnUser}
                  id="username"
                  placeholder="Username"
                  type="text"
                  {...register('email', {
                    required: {
                      message: 'El email es obligatorio',
                      value: true,
                    },
                  })}
                />
              </label>
            </div>
            {errors.email && <span>{errors.email.message}</span>}
            <div className={`${styles.input} ${errors.password && styles.error}`}>
              <label htmlFor="password">
                Password
                <input
                  className={styles.btnPass}
                  id="password"
                  placeholder="Password"
                  type="password"
                  {...register('password', {
                    required: {
                      message: 'La contraseña es obligatoria',
                      value: true,
                    },
                  })}
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
