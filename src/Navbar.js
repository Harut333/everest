import React from 'react';
import Link from 'next/link';
import styles from '../styles/_navbar.module.scss'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbarMenu}>
                <li className={styles.navbarMenuItem}>
                    <Link href="/">
                        <span className={styles.navbarMenuLink}>Home</span>
                    </Link>
                </li>
                <li className={styles.navbarMenuItem}>
                    <Link href="/About">
                        <span className={styles.navbarMenuLink}>About</span>
                    </Link>
                </li>
                <li className={styles.navbarMenuItem}>
                    <Link href="/Pricing">
                        <span className={styles.navbarMenuLink}>Pricing</span>
                    </Link>
                </li>
                <li className={styles.navbarMenuItem}>
                    <Link href="/contact/ContactForm">
                        <span className={styles.navbarMenuLink}>Contact Form</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
