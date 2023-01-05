import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './PhichologistLink.module.css';

function PhichologistLink({ onClick }) {
	return (
		<div className={styles.contOptions}>
			<div className={styles.optionsAside}>
				<NavLink
					className={styles.linkNav}
					onClick={onClick}
					style={({ isActive }) => ({
						textDecoration: isActive ? 'underline' : 'none',
					})}
					to="/dashboard"
				>
					Citas
				</NavLink>
				<NavLink
					className={styles.linkNav}
					onClick={onClick}
					style={({ isActive }) => ({
						textDecoration: isActive ? 'underline' : 'none',
					})}
					to="/dashboard/patients"
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
					Analisis de video
				</NavLink>
			</div>
		</div>
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
			<NavLink
				className={styles.linkNav}
				onClick={onClick}
				style={({ isActive }) => ({
					textDecoration: isActive ? 'underline' : 'none',
				})}
				to="/dashboard/patients"
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
				Analisis de video
			</NavLink>
		</div>
	);
}

export default PhichologistLink;
