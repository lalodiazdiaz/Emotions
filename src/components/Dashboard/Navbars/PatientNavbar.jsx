import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
				<button className={styles.btnEmergency} type="submit">911</button>
				<Link to="/">
					Cerrar sesion
				</Link>
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
