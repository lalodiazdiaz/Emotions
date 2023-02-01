import React from 'react';
import { NavLink } from 'react-router-dom';
import { RANGE } from '../../constants';
import styles from './PhichologistLink.module.css';

function PhichologistLink({ onClick, Range }) {
	return (
		<div className={styles.contOptions}>
			<div className={styles.optionsAside}>
				<NavLink
					className={styles.linkNav}
					onClick={onClick}
					style={({ isActive }) => ({
						textDecoration: isActive ? 'underline' : 'none',
					})}
					to="/dashboard/"
				>
					Citas
				</NavLink>
				{Range === RANGE.admin
					? (
						<NavLink
							className={styles.linkNav}
							onClick={onClick}
							style={({ isActive }) => ({
								textDecoration: isActive ? 'underline' : 'none',
							})}
							to="/dashboard/therapist/"
						>
							Psicólogos
						</NavLink>
					)
					:					null}
				<NavLink
					className={styles.linkNav}
					onClick={onClick}
					style={({ isActive }) => ({
						textDecoration: isActive ? 'underline' : 'none',
					})}
					to="/dashboard/patients/"
				>
					Pacientes
				</NavLink>
				<NavLink
					className={styles.linkNav}
					onClick={onClick}
					style={({ isActive }) => ({
						textDecoration: isActive ? 'underline' : 'none',
					})}
					to="/dashboard/analysis/"
				>
					Análisis de video
				</NavLink>
			</div>
		</div>
	);
}

export default PhichologistLink;
