import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PatientLink.module.css';

function PatientLink() {
	return (
		<><div className={styles.optionsAside}>
			<Link className={styles.linkNav}>
				Citas y Tareas
			</Link>
			<Link className={styles.linkNav}>
				Notas
			</Link>
			<Link className={styles.linkNav}>
				Evidencias
			</Link>
			<Link className={styles.linkNav}>
				Perfil
			</Link>
		  </div>
			<button className={styles.btnEmergency} type="submit">911</button>
		</>
	);
}

export default PatientLink;
