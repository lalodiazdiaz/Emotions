import React, { useCallback, useState } from 'react';
import Modal from '../Modal/Modal';
import Navbar from '../Navbar/Navbar';
import styles from './Home.module.css';

const url = ' https://wa.me/526145153963';

function contModal() {
	return (
		<div className={styles.contact}>
			<h2>Lic. Claudia Patricia Gonzalez Moreno </h2>
			<a href={url} target="_blanket">
				<button
					className={styles.llamarPsicologo}
					type="button"
				>Contactar
				</button>
			</a>
		</div>
	);
}

function Home() {
	const [modal, setModal] = useState(styles.modalClose);

	const modalOpenAction = useCallback(() => {
		setModal(styles.modalOpen);
	 }, []);
	const modalCloseAction = useCallback(() => {
	 setModal(styles.modalClose);
	}, []);

	return (
		<>
			<div className={styles.contHome}>
				<Navbar />
				<div className={styles.bodyHome}>
					<button
						className={styles.agendar}
						onClick={modalOpenAction}
						type="button"
					>Agendar
					</button>
				</div>

			</div>
			<Modal
				Content={contModal}
				onAction={modalCloseAction}
				style={modal}
				title="Consulta a tu psicologo"
			/>
		</>
	);
}

export default Home;
