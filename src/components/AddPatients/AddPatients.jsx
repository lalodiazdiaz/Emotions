import React, { useRef } from 'react';
import styles from './AddPatients.module.css';

function AddPatients() {
	const form = useRef();
	return (
		<div className={styles.contAddPatients}>
			<div className={styles.AddPatients}>
				<div className={styles.boxAddPatients}>
					<h1>Nuevo Paciente</h1>
					<div className={styles.gridPatients}>
						<form ref={form} className={styles.formAddPatients}>
							<div className={styles.dataAddPatients}>
								<p>Nombre</p>
								<input
									className={styles.inputAddPatients}
									name="name"
								/>
							</div>
							<div className={styles.dataAddPatients}>
								<p>Segundo apellido</p>
								<input
									className={styles.inputAddPatients}
									name="middleName"
								/>
							</div>
							<div className={styles.dataAddPatients}>
								<p>Primer apellido</p>
								<input
									className={styles.inputAddPatients}
									name="lastName"
								/>
							</div>
							<div className={styles.dataAddPatients}>
								<p>Email</p>
								<input
									className={styles.inputAddPatients}
									name="email"
								/>
							</div>
							<div className={styles.dataAddPatients}>
								<p>Teléfono</p>
								<input
									className={styles.inputAddPatients}
									name="phone"
								/>
							</div>
							<div className={styles.dataAddPatients}>
								<p>Fecha de nacimiento</p>
								<input
									className={styles.inputAddPatients}
									name="birthdate"
								/>
							</div>
							<div className={styles.dataAddPatients}>
								<p>Estatus civil</p>
								<input
									className={styles.inputAddPatients}
									name="maritalStatus"
								/>
							</div>
							<div className={styles.dataAddPatients}>
								<p>Rango</p>
								<input
									className={styles.inputAddPatients}
									name="range"
								/>
							</div>
						</form>
					</div>
				</div>
				<button
					className={styles.btnAdd}
					type="button"
				>
					Agregar
				</button>
			</div>
		</div>
	);
}

export default AddPatients;
