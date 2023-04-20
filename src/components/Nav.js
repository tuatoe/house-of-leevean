import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Nav.module.scss';
import Hamburger from './Hamburger';

function Nav() {
    const targetWidth = 767;
    const [isOpen, setMenu] = useState(false);
    const [windowWidth, setWindowWidth] = useState()
    const links = [
        { id: 1, label: 'Home', path: '/' },
        { id: 2, label: 'About us', path: '/about-us' },
        { id: 3, label: 'Services', path: '/services' },
        { id: 4, label: 'Gallery', path: '/gallery' },
        { id: 4, label: 'Contact', path: '/contact' },
    ];
    const toggle = e => {
        e.stopPropagation();
        setMenu(!isOpen)
    }
    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth)
        })
        window.addEventListener('load', () => {
            setWindowWidth(window.innerWidth)
        })

    }, [windowWidth])
    return (
        <nav className={styles.nav}>
            <h1 className={styles.logo}>
                <Link href='/'>
                    {/* <Image src={logo} width={60} height={60} alt='Benjamin Karmon Sehkar Foundation' tabIndex='1' /> */}
                    House of Leevean
                </Link>
            </h1>
            {windowWidth > targetWidth ? (
                <>
                    <ul>
                        {links.map(link =>
                            <li key={link.id}>
                                <Link href={link.path}>{link.label}</Link>
                            </li>
                        )}
                    </ul>
                </>
            ) : (
                    <>
                        <ul className={`${styles.mobileNav} ${isOpen ? styles.isOpen : ''}`}>
                            <li>
                                <Link href='/' passHref>Home</Link>
                            </li>
                            <li>
                                <Link href='/about-us' passHref>About Us</Link>
                            </li>
                            <li>
                                <Link href='/youth-ministries' passHref>Services</Link>
                            </li>
                            <li>
                                <Link href='/women-ministries' passHref>Gallery</Link>
                            </li>
                            <li>
                                <Link href='/contact' passHref>Contact</Link>
                            </li>
                        </ul>

                        <Hamburger handleHamburger={toggle} isOpen={isOpen} />
                    </>
                )}

        </nav>
    )
}

export default Nav;