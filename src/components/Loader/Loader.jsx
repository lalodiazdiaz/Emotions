import React from 'react';
import { ClipLoader } from 'react-spinners';
import styles from './Loader.module.css';
import { RANGE } from '../../constants';

function Loader() {
	const local = JSON.parse(localStorage.getItem('user'));
	const { range } = local.data;
	return (
		<div className={range === RANGE.patient
			? styles.loaderContainer : styles.loaderContainer2}
		>
			<ClipLoader color="#000" size={70} />
		</div>
	);
}

export default Loader;
