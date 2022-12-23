import React, { useCallback, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './Dashboard.module.css';
import logo from '../../assets/logo.png';
import btnMenu from '../../assets/menuIcon.png';
import PatientLink from '../PatientLink/PatientLink';
import PhichologistLink from '../PsychologistLink/PhichologistLink';
import EmergencyModal from '../EmergencyModal/EmergencyModal';

function Dashboard() {
	const loggedUser = window.localStorage.getItem('user');
	const userLogged = JSON.parse(loggedUser);
	const [state, setState] = useState(false);
	const NAME = userLogged.data.fullName;

	const asideOpenAction = () => {
		if (!state) {
			setState(true);
		} else {
			setState(false);
		}
	};
	const [modal, setModal] = useState(false);

	const modalOpenAction = useCallback(() => {
		setModal(true);
	}, []);

	const modalCloseAction = useCallback(() => {
		setModal(false);
	 }, []);

	return (
		<div className={styles.contMain}>
			<EmergencyModal isVisible={modal} onAction={modalCloseAction} />
			<div className={state ? styles.asideMenuOpen : styles.asideMenu}>
				<div className={styles.headerAside}>
					<h2>BEGINNING</h2>
					<img alt="logo" className={styles.logo} src={logo} />
					<p>{NAME}</p>
				</div>
				<div>
					{userLogged.data.range === 1
						? (
							<PatientLink onAction={modalOpenAction} />
						)
						: (
							<PhichologistLink />
						)}
				</div>
				<NavLink to="/">
					Cerrar sesion
				</NavLink>
			</div>
			<div className={styles.resMenu}>
				<button onClick={asideOpenAction} type="button">
					<img alt="Menuicon" className={styles.menuIcon} src={btnMenu} />
				</button>
			</div>
			<div className={styles.resMenu}>
				<button
					className={styles.btnImage}
					onClick={asideOpenAction}
					type="button"
				>
					<div className={styles.contImage}>
						<img alt="Menuicon" className={styles.menuIcon} src={btnMenu} />
					</div>
				</button>
			</div>
			<main>
				<Outlet />
			</main>

		</div>
	);
}

export default Dashboard;
