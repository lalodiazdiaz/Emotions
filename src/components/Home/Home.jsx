import React, { useCallback, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import ScheduleModal from '../ScheduleModal/ScheduleModal';
import styles from './Home.module.css';

function Home() {
	const [modal, setModal] = useState(false);

	const modalOpenAction = useCallback(() => {
		setModal(true);
	}, []);

	const modalCloseAction = useCallback(() => {
		setModal(false);
	 }, []);

	return (
		<div className={styles.contHome}>
			<Navbar />
			<div className={styles.bodyHome}>
				<button
					className={styles.schedule}
					onClick={modalOpenAction}
					type="button"
				>
					Agendar
				</button>
				<ScheduleModal isVisible={modal} onAction={modalCloseAction} />
			</div>
		</div>
	);
}

export default Home;
