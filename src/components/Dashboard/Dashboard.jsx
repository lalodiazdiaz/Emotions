import React, { useCallback, useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Alertify from 'alertifyjs';
import styles from './Dashboard.module.css';
import logo from '../../assets/logo1.png';
import btnMenu from '../../assets/menuIcon.png';
import PatientLink from '../PatientLink/PatientLink';
import PhichologistLink from '../PsychologistLink/PhichologistLink';
import EmergencyModal from '../EmergencyModal/EmergencyModal';
import { RANGE } from '../../constants';
import logout from '../../slices/Logout';

function Dashboard() {
	const loggedUser = window.localStorage.getItem('user');
	const userLogged = JSON.parse(loggedUser);
	const { range } = userLogged.data;
	const [state, setState] = useState(false);
	const NAME = userLogged.data.fullName;
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const asideOpenAction = () => {
		if (!state) {
			setState(true);
		} else {
			setState(false);
		}
	};
	const [modal, setModal] = useState(false);

	const closeMenu = useCallback(() => {
		setState(false);
	}, []);

	const modalOpenAction = useCallback(() => {
		setModal(true);
	}, []);

	const modalCloseAction = useCallback(() => {
		setModal(false);
	}, []);

	const logoutSession = async () => {
		await dispatch(logout())
			.then((result) => {
				setState(false);
			}).catch((err) => {
			}).finally(() => {
				localStorage.removeItem('user');
				navigate('/login');
				navigate(0);
			});
	};

	return (
		<div className={styles.contMain}>
			<EmergencyModal isVisible={modal} onAction={modalCloseAction} />
			<div className={state ? styles.asideMenuOpen : styles.asideMenu}>
				<div className={styles.headerAside}>
					<img alt="logo" className={styles.logo} src={logo} />
					<p>{NAME}</p>
				</div>
				<div className={styles.options}>
					{userLogged.data.range === RANGE.patient
						? (
							<PatientLink onAction={modalOpenAction} onClick={closeMenu} />
						)
						: (
							<PhichologistLink onClick={closeMenu} Range={range} />
						)}
				</div>
				<button className={styles.btnLogout} onClick={logoutSession} type="button">
					Cerrar sesion
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
