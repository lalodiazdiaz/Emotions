import React, { useCallback, useState } from 'react';
import Modal from 'react-modal';
import Navbar from '../Navbar/Navbar';
import styles from './Home.module.css';

const CUSTOMSTYLES = {
	content: {

		backgroundColor: 'white',
		bottom: 'auto',
		left: '50%',
		right: 'auto',
		top: '50%',
		transform: 'translate(-50%, -50%)',
		width: '70%',
	},
};

function Home() {
	const [modalIsOpen, setIsOpen] = useState(false);
	const url = ' https://wa.me/526145153963';

	const openModal = useCallback(
		() => {
			setIsOpen(true);
		},
		[],
	);

	const closeModal = useCallback(
		() => {
			setIsOpen(false);
		},
		[],
	);

	return (
		<div className={styles.contHome}>
			<Navbar />
			<div className={styles.bodyHome}>
				<button
					className={styles.agendar}
					onClick={openModal}
					type="button"
				>Agendar
				</button>
			</div>
			<Modal
				isOpen={modalIsOpen}
				style={CUSTOMSTYLES}
			>
				<div className={styles.modalCont}>
					<text>Lic. Claudia Patricia González Moreno</text>
					<hr />
					<a href={url} rel="noreferrer" target="_blank">
						<input className={styles.inputCita} type="submit" value="Agendar" />
					</a>
				</div>
				<hr />
				<div className={styles.btnCont}>
					<button
						className={styles.btnCloseModal}
						onClick={closeModal}
						type="button"
					>
						Cerrar
					</button>
				</div>

			</Modal>
		</div>
	);
}

export default Home;
