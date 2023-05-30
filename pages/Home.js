import React from 'react';
import styles from '../styles/_home.module.scss';

const Home = () => {
    return (
        <section className={styles.hero}>
            <h1>Welcome to Everest Academy</h1>
            <p>Learn the latest web technologies with our expert instructors.</p>
            <a href="/contact" className={styles.heroButton}>
                Get Started
            </a>
        </section>
    );
};

export default Home;
