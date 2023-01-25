import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PsycologistCard from '../PsychologistCard/PsycologistCard';
import styles from './PsychologistScreen.module.css';
import { getTherapist } from '../../../slices/psychologist';
import Loader from '../../Loader/Loader';

function PsychologistScreen() {
	const navigate = useNavigate();
	const [therapist, setTherapist] = useState('');
	const [loading, setloading] = useState(false);
	const [page, setPage] = useState(1);
	const dispatch = useDispatch();
	const params = `/user?page=${page}&size=10&order=date&way=1`;

	useEffect(() => {
		dispatch(getTherapist({ params }))
			.unwrap()
			.then((res) => {
				setTherapist(res.data);
			}).finally(() => setloading(true));
	}, [setTherapist]);

	const updateList = () => {
		dispatch(getTherapist({ params }))
			.unwrap()
			.then((res) => {
				setTherapist(res.data);
			}).finally(() => setloading(true));
	};

	const navigateScreen = () => {
		navigate('/dashboard/addPsychologist/');
	};

	if (!loading) {
		return (
			<div className={styles.mainContainer}>
				<div className={styles.Psychologist}>
					<h1>Psicologos</h1>
					<div className={styles.loaderContainer}>
						<Loader />
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className={styles.mainContainer}>
			<div className={styles.Psychologist}>
				<h1>Psicologos</h1>
				<div className={styles.gridPsychologist}>
					{therapist.map((data) => (
						<PsycologistCard
							key={data.id}
							data={data}
							id={data.id}
							onAction={updateList}
						/>
					))}
				</div>
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

export default PsychologistScreen;
