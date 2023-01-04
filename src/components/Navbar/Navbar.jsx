import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../assets/logo1.png';

function Navbar() {
	return (
		<div className={styles.Navbar}>
			<img alt="Conectate" className={styles.logo} src={logo} />
			<div className={styles.navItems}>
				<Link className={styles.btnLog} to="login">
					LogIn
				</Link>
			</div>
		</div>
	);
}

export default Navbar;
