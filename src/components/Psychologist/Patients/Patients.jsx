import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Patients.module.css';
import patientsService from '../../../services/Patients/patientsService';
import Loader from '../../Loader/Loader';

function Patients() {
	const [patient, setPatient] = useState('');
	const [loading, setloading] = useState(false);

	const getDataPatients = () => {
		patientsService.getpatients()
			.then((response) => {
				setPatient(response.data.data.patientsId);
			})
			.finally(() => setloading(true));
	};

	useEffect(() => {
		getDataPatients();
	}, []);

	if (!loading) {
		return (
			<div className={styles.contPatients}>
				<div className={styles.Patients}>
					<div className={styles.contNextPatients}>
						<h1>Obteniendo lista de pacientes</h1>
						<div className={styles.loaderContainer}>
							<Loader />
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className={styles.contPatients}>
			<div className={styles.Patients}>
				<div className={styles.contNextPatients}>
					<h1>Pacientes</h1>
					{patient.length >= 1
						? (
							<div className={styles.gridNextPatients}>
								{patient.map((item) => (
									<div key={item.id} className={styles.notPatients}>
										<p>Paciente: {item.fullName}</p>
										<Link
											to="/dashboard/DetailsPatients/"
										>
											<input
												className={styles.btnDetails}
												type="submit"
												value="Detalles"
											/>
										</Link>
									</div>
								))}
							</div>
						)
						: (
							<div className={styles.notPatients}>
								<p>No tienes pacientes registrados.</p>
							</div>
						)}
				</div>
				<Link
					to="/dashboard/AddPatients/"
				>
					<input
						className={styles.btnAdd}
						type="submit"
						value="Agregar"
					/>
				</Link>
			</div>
		</div>
	);
}

export default Patients;
