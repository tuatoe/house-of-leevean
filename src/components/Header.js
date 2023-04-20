import styles from '../styles/Header.module.scss';
import Link from 'next/link';

function Header() {
    return (
        <header className={`container ${styles.header}`}>
            <h2 className={styles.headerTitle}>House of Leevean</h2>
            <h3 className={styles.headerSubTitle}>The perfect place for you.</h3>
        </header>
    )
}
export default Header;