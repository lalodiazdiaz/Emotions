import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Dashboard.module.css';
import logo from '../../assets/logo.png';
import btnMenu from '../../assets/menuIcon.png';

function Dashboard({ rol }) {
	const [state, setState] = useState(false);

	const asideOpenAction = () => {
		if (!state) {
			setState(true);
		} else {
			setState(false);
		}
	};
	const Pshycologist = (
		<div className={styles.optionsAside}>
			<Link>
				Citas
			</Link>
			<Link className={styles.btnPatients} to="patients">
				Pacientes
			</Link>
			<Link className={styles.btnanVideo} to="analysis">
				Analisis de video
			</Link>
		</div>
	);
	const Patient = (
		<><div className={styles.optionsAside}>
			<Link>
				Citas y Tareas
			</Link>
			<Link>
				Notas
			</Link>
			<Link>
				Evidencias
			</Link>
			<Link>
				Perfil
			</Link>
		</div>
		<button className={styles.btnEmergency}>911</button>
		</>
	);
	return (
		<div className={styles.contMain}>
			<div className={state ? styles.asideMenuOpen : styles.asideMenu}>
				<div className={styles.headerAside}>
					<h2>BEGINNING</h2>
					<img alt="logo" className={styles.logo} src={logo} />
					<p>Luz Elena Limón de la Cruz</p>
				</div>
				{rol === 1
					? Patient
					: Pshycologist}
				<Link to="/home">
					Cerrar sesion
				</Link>
			</div>
			<div className={styles.resMenu}>
				<div onClick={asideOpenAction}>
					<img alt="Menuicon" className={styles.menuIcon} src={btnMenu} />
				</div>

			</div>
			<div className={styles.contPshycologist}>
				<h2>Proximas Citas</h2>
				<p>Paciente: Luz Elena Limón de la Cruz</p>
			</div>
		</div>
	);
}

export default Dashboard;
