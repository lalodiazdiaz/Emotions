import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Patients.module.css';
import patientsService from '../../../services/Patients/patientsService';
import Loader from '../../Loader/Loader';

function Patients() {
	const navigate = useNavigate();
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

	const navigatePatients = () => {
		navigate('/dashboard/DetailsPatients/');
	};

	const navigateScreen = () => {
		navigate('/dashboard/AddPatients/');
	};

	if (!loading) {
		return (
			<div className={styles.contPatients}>
				<div className={styles.Patients}>
					<h1>Pacientes</h1>
					<div className={styles.loaderContainer}>
						<Loader />
					</div>
				</div>
			</div>
		);
	}
	return (
		<div className={styles.contPatients}>
			<div className={styles.Patients}>
				<h1>Pacientes</h1>
				{patient.length >= 1
					? (
						<div className={styles.gridNextPatients}>
							{patient.map((item) => (
								<div className={styles.contCard}>
									<div className={styles.contInformation}>
										<div className={styles.dataCard}>
											<p>Paciente: {item.fullName}</p>
										</div>
									</div>
									<div className={styles.contButtons}>
										<button
											className={styles.btnDetails}
											onClick={navigateScreen}
											type="button"
										>
											Detalles
										</button>
									</div>
								</div>
							))}
						</div>
					)
					: (
						<div className={styles.notPatients}>
							<p>No tienes pacientes registrados.</p>
						</div>
					)}
				<button
					className={styles.btnAdd}
					onClick={navigateScreen}
					type="button"
				>
					Agregar
				</button>
			</div>
		</div>
	);
}
export default Patients;
