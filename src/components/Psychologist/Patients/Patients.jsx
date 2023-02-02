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
					<div className={styles.contNextPatients}>
						<h1>Pacientes</h1>
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
										<button
											className={styles.btnDetails}
											onClick={navigatePatients}
											type="button"
										>
											Detalles
										</button>
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
		</div>
	);
}
export default Patients;
