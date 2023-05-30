import React from 'react';
import styles from '../styles/Pricing.module.scss';

const Pricing = () => {
    return (
        <div className={styles.pricing}>
            <div className={styles.plan}>
                <h2 className={styles['plan-title']}>HTML and CSS</h2>
                <p className={styles['plan-price']}>26000AMD/month</p>
                <div className={styles['plan-features']}>
                    <ul>
                        <li>Duration: 2 months</li>
                        <li>Group lessons</li>
                    </ul>
                </div>
                <button className={styles.button}>Enroll Now</button>
            </div>
            <div className={styles.plan}>
                <h2 className={styles['plan-title']}>JavaScript</h2>
                <p className={styles['plan-price']}>35000AMD/month</p>
                <div className={styles['plan-features']}>
                    <ul>
                        <li>Duration: 3 months</li>
                        <li>Group lessons</li>
                    </ul>
                </div>
                <button className={styles.button}>Enroll Now</button>
            </div>
            <div className={styles.plan}>
                <h2 className={styles['plan-title']}>React.JS</h2>
                <p className={styles['plan-price']}>44000AMD/month</p>
                <div className={styles['plan-features']}>
                    <ul>
                        <li>Duration: 2 months</li>
                        <li>Group lessons</li>
                    </ul>
                </div>
                <button className={styles.button}>Enroll Now</button>
            </div>
        </div>
    );
};

export default Pricing;
