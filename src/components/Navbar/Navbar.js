import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className={styles.Navbar}>
      <span className={styles.navLogo}>BEGINNING</span>
      <div className={styles.navItems}>
        <Link className={styles.link} to={'login'}>
          <div className={styles.btnLog}>LogIn</div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;