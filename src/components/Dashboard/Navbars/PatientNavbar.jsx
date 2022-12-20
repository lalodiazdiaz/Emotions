import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Dashboard.module.css';
import logo from '../../../assets/logo.png';
import btnMenu from '../../../assets/menuIcon.png';

function PatientNavbar() {
	const [state, setState] = useState(false);

	const asideOpenAction = () => {
		if (!state) {
			setState(true);
		} else {
			setState(false);
		}
	};
	return (
		<div className={styles.contMain}>
			<div className={state ? styles.asideMenuOpen : styles.asideMenu}>
				<div className={styles.headerAside}>
					<h2>BEGINNING</h2>
					<img alt="logo" className={styles.logo} src={logo} />
					<p>Luz Elena Limón de la Cruz</p>
				</div>
				<div className={styles.optionsAside}>
					<NavLink className={styles.btnDatesHomeworks} to="/datesHomeworks">
						Citas y Tareas
					</NavLink>
					<NavLink>
						Notas
					</NavLink>
					<NavLink>
						Evidencias
					</NavLink>
					<NavLink>
						Perfil
					</NavLink>
				</div>
				<button className={styles.btnEmergency} type="submit">911</button>
				<NavLink to="/">
					Cerrar sesion
				</NavLink>
			</div>
			<div className={styles.resMenu}>
				<button
					className={styles.btnImage}
					onClick={asideOpenAction}
					type="submit"
				>
					<div className={styles.contImage}>
						<img alt="Menuicon" className={styles.menuIcon} src={btnMenu} />
					</div>
				</button>
			</div>
		</div>
	);
}

export default PatientNavbar;
