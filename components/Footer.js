
import styles from '../styles/Footer.module.scss';
import Link from 'next/link';

function Footer() {
    return (
        <footer id='footer' className={styles.footer}>
            <p>House of Leevean </p>
            <ul className='flex flex-start justify-content-center border-left'>
                <li><address>Address: P.O. Box 40026 Blaine MN 55449</address></li>
                <li><a href='tel:612-842-7097'>612-842-7097</a></li>
            </ul>
            <p>©Copyright 2023</p>
        </footer>
    )
}
export default Footer;