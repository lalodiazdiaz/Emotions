import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPatient } from '../../slices/patients';
import styles from './AddPatients.module.css';

function AddPatients() {
	const dispatch = useDispatch();

	const initialPatientState = {
		birthdate: '',
		email: '',
		lastName: '',
		maritalStatus: '',
		middleName: '',
		name: '',
		phone: '',
		range: '2',
	};

	const [patient, setPatient] = useState(initialPatientState);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setPatient({ ...patient, [name]: value });
	};

	const savePatient = () => {
		const { name, middleName, lastName, email,
			phone, birthdate, maritalStatus, range } = patient;

		dispatch(createPatient(patient))
			.unwrap()
			.then(() => {
				setPatient({
					birthdate,
					email,
					lastName,
					maritalStatus,
					middleName,
					name,
					phone,
					range,
				});
			});
	};
	const form = useRef();
	return (
		<div className={styles.contAddPatients}>
			<div className={styles.AddPatients}>
				<div className={styles.boxAddPatients}>
					<h1>Nuevo Paciente</h1>
					<div className={styles.gridAddPatients}>
						<form ref={form} className={styles.formAddPatients}>
							<div className={styles.dataAddPatients}>
								<p>Nombre</p>
								<input
									className={styles.inputAddPatients}
									name="name"
									onChange={handleInputChange}
									value={patient.name || ''}
								/>
							</div>
							<div className={styles.dataAddPatients}>
								<p>Segundo apellido</p>
								<input
									className={styles.inputAddPatients}
									name="middleName"
									onChange={handleInputChange}
									value={patient.middleName || ''}
								/>
							</div>
							<div className={styles.dataAddPatients}>
								<p>Primer apellido</p>
								<input
									className={styles.inputAddPatients}
									name="lastName"
									onChange={handleInputChange}
									value={patient.lastName || ''}
								/>
							</div>
							<div className={styles.dataAddPatients}>
								<p>Email</p>
								<input
									className={styles.inputAddPatients}
									name="email"
									onChange={handleInputChange}
									value={patient.email || ''}
								/>
							</div>
							<div className={styles.dataAddPatients}>
								<p>Teléfono</p>
								<input
									className={styles.inputAddPatients}
									name="phone"
									onChange={handleInputChange}
									value={patient.phone || ''}
								/>
							</div>
							<div className={styles.dataAddPatients}>
								<p>Fecha de nacimiento</p>
								<input
									className={styles.inputAddPatients}
									name="birthdate"
									onChange={handleInputChange}
									value={patient.birthdate || ''}
								/>
							</div>
							<div className={styles.dataAddPatients}>
								<p>Estatus civil</p>
								<input
									className={styles.inputAddPatients}
									name="maritalStatus"
									onChange={handleInputChange}
									value={patient.maritalStatus || ''}
								/>
							</div>
						</form>
					</div>
				</div>
				<button
					className={styles.btnAdd}
					onClick={savePatient}
					type="submit"
				>
					Agregar
				</button>
			</div>
		</div>
	);
}

export default AddPatients;
