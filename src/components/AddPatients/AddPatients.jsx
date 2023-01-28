import React, { useRef } from 'react';
import styles from './AddPatients.module.css';

function AddPatients() {
	const form = useRef();
	return (
		<div className={styles.contAddPatients}>
			<div className={styles.AddPatients}>
				<div className={styles.boxAddPatients}>
					<h1>Nuevo Paciente</h1>
					<div>
						<form ref={form} className={styles.formAddPatients}>
							<div className={styles.dataAddPatients}>
								<p>Nombre</p>
								<input
									className={styles.inputAddPatients}
									name="name"
								/>
							</div>
							<div className={styles.dataAddPatients}>
								<p>Edad</p>
								<input
									className={styles.inputAddPatients}
									name="age"
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
								<p>Fecha de nacimiento</p>
								<input
									className={styles.inputAddPatients}
									name="date"
								/>
							</div>
							<div className={styles.dataAddPatients}>
								<p>Dirección</p>
								<input
									className={styles.inputAddPatients}
									name="address"
								/>
							</div>
							<div className={styles.dataAddPatients}>
								<p>Sexo</p>
								<input
									className={styles.inputAddPatients}
									name="gender"
								/>
							</div>
							<div className={styles.dataAddPatients}>
								<p>Escolaridad</p>
								<input
									className={styles.inputAddPatients}
									name="schooling"
								/>
							</div>
							<div className={styles.dataAddPatients}>
								<p>Motivo de consulta</p>
								<input
									className={styles.inputAddPatients}
									name="reason"
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
