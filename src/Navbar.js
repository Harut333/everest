import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/_navbar.module.scss';
import Popup from './Popup';

const Navbar = () => {
    const [isSignInOpen, setSignInOpen] = useState(false);
    const [isSignUpOpen, setSignUpOpen] = useState(false);

    const openSignInPopup = () => {
        setSignInOpen(true);
    };

    const openSignUpPopup = () => {
        setSignUpOpen(true);
    };

    const closePopup = () => {
        setSignInOpen(false);
        setSignUpOpen(false);
    };

    return (
        <>
            <nav className={styles.navbar}>
                <ul className={styles.navbarMenu}>
                    <li className={styles.navbarMenuItem}>
                        <Link href="/">
                            <span className={styles.navbarMenuLink}>Home</span>
                        </Link>
                    </li>
                    <li className={styles.navbarMenuItem}>
                        <Link href="About">
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
                    <li className={styles.navbarMenuItem}>
            <span className={styles.navbarMenuLink} onClick={openSignInPopup}>
              Sign In
            </span>
                    </li>
                    <li className={styles.navbarMenuItem}>
            <span className={styles.navbarMenuLink} onClick={openSignUpPopup}>
              Sign Up
            </span>
                    </li>
                </ul>
            </nav>
            <Popup isOpen={isSignInOpen} onClose={closePopup} mode="signIn" />
            <Popup isOpen={isSignUpOpen} onClose={closePopup} mode="signUp" />
        </>
    );
};

export default Navbar;
