import React from 'react';
import styles from '../styles/About.module.scss';

const About = () => {
    return (
        <section className={styles.aboutSection}>
            <h2 className={styles.aboutTitle}>About Everest Academy</h2>
            <p className={styles.aboutDescription}>
                Everest Academy is a leading educational institution that specializes in
                providing high-quality web development courses. Our expert instructors
                are dedicated to helping students learn and excel in the field of web
                development.
            </p>
        </section>
    );
};

export default About;
