import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import styles from './Dates.module.css';
import 'react-calendar/dist/Calendar.css';
import appointmentsService from '../../../services/Appointments/appointmentsServices';

function Dates() {
	const [data, setData] = useState([]);
	const [tgl, setTgl] = useState(new Date());

	useEffect(() => {
		const getAppointments = () => {
			appointmentsService.getappointments()
				.then((response) => {
					const aux = response.data.data.map((x) => x.date);
					setData(aux);
				});
		};
		getAppointments();
	}, []);

	return (
		<div className={styles.contAppointments}>
			<div className={styles.Appointments}>
				<div className={styles.calendar}>
					<Calendar
						onChange={setTgl}
						tileClassName={({ date }) => {
							let day = date.getDate();
							let month = date.getMonth() + 1;
							if (date.getMonth() < 10) {
								month = `0${month}`;
							}
							if (date.getDate() < 10) {
								day = `0${day}`;
							}
							const realDate = `${date.getFullYear()}/${month}/${day}`;
							if (data.find((val) => val === realDate)) {
								return styles.highlight;
							}
							return 0;
						}}
						value={tgl}
					/>
					<div className={styles.indicators}>
						<div className={styles.box} />
						<p>•Días inhábiles.</p>
						<div className={styles.box} />
						<p>•Días con citas registradas.</p>
						<div className={styles.box} />
						<p>•Días disponibles.</p>
					</div>
				</div>

			</div>
		</div>
	);
}

export default Dates;
