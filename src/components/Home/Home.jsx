import React, { useCallback, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './Home.module.css';

function Home() {
	const url = ' https://wa.me/526145153963';

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
			<div className={modal}>
				<div className={styles.backModal} />
				<div className={styles.contModal}>
					<h1>Contactar con tu psicologo</h1>
					<div className={styles.contact}>
						<h2>Lic. Claudia Patricia Gonzalez Moreno </h2>
						<a href={url} target="_blanket">
							<button
								className={styles.llamarPsicologo}
								onClick={modalCloseAction}
								type="button"
							>Contactar
							</button>
						</a>
					</div>
					<button
						className={styles.closeModal}
						onClick={modalCloseAction}
						type="button"
					>Cerrar
					</button>
				</div>
			</div>
		</>
	);
}

export default Home;
