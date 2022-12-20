import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../Dashboard.module.css';
import logo from '../../../assets/logo.png';
import btnMenu from '../../../assets/menuIcon.png';

function PshycologistNavbar() {
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
			<Link className={styles.btnPatients} to="/patients">
				Pacientes
			</Link>
			<Link className={styles.btnanVideo} to="analysis">
				Analisis de video
			</Link>
		</div>
	);
	return (
		<div className={styles.contMain}>
			<div className={state ? styles.asideMenuOpen : styles.asideMenu}>
				<div className={styles.headerAside}>
					<h2>BEGINNING</h2>
					<img alt="logo" className={styles.logo} src={logo} />
					<p>Claudia Patricia González Moreno</p>
				</div>
				{Pshycologist}
				<Link to="/home">
					Cerrar sesion
				</Link>
			</div>
			<div className={styles.resMenu}>
				<button onClick={asideOpenAction} type="submit">
					<img alt="Menuicon" className={styles.menuIcon} src={btnMenu} />
				</button>
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

export default PshycologistNavbar;
