import React, { useCallback, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import ScheduleModal from '../ScheduleModal/ScheduleModal';
import styles from './Home.module.css';

function Home() {
	const [modal, setModal] = useState(styles.modalClose);

	const modalOpenAction = useCallback(() => {
		setModal(styles.modalOpen);
	}, []);

	const modalCloseAction = useCallback(() => {
		setModal(styles.modalClose);
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
				<ScheduleModal onAction={modalCloseAction} style={modal} />
			</div>
		</div>
	);
}

export default Home;
