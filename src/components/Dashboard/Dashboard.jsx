import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Dashboard.module.css';
import logo from '../../assets/logo.png';
import btnMenu from '../../assets/menuIcon.png';
import PatientLink from '../PatientLink/PatientLink';
import PhichologistLink from '../PsychologistLink/PhichologistLink';

function Dashboard() {
	const USER_LOGGED = JSON.parse(localStorage.getItem('user'));
	const [state, setState] = useState(false);

	const ASIDE_OPEN_ACTION = () => {
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
					<p>Claudia Patricia González Moreno</p>
				</div>
				<div>
					{USER_LOGGED.data.range === 1
						? (
							<PatientLink />
						)
						: (
							<PhichologistLink />
						)}
				</div>
				<Link to="/home">
					Cerrar sesion
				</Link>
			</div>
			<div className={styles.resMenu}>
				<button onClick={ASIDE_OPEN_ACTION} type="button">
					<img alt="Menuicon" className={styles.menuIcon} src={btnMenu} />
				</button>
			</div>
			<div className={styles.resMenu}>
				<button
					className={styles.btnImage}
					onClick={ASIDE_OPEN_ACTION}
					type="button"
				>
					<div className={styles.contImage}>
						<img alt="Menuicon" className={styles.menuIcon} src={btnMenu} />
					</div>
				</button>
			</div>
		</div>
	);
}

export default Dashboard;
