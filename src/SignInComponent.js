import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseConfig } from './firebase';
import styles from '../styles/AuthForm.module.scss';

const auth = getAuth(firebaseConfig);

const SignInComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async () => {
        try {
            const { user } = await signInWithEmailAndPassword(auth, email, password);
            if (user) {
                if (user.emailVerified) {
                    // Redirect to the pricing link after successful sign-in
                    window.location.href = '/';
                } else {
                    // Display an error message or prevent login
                    console.log('Email not verified. Unable to login.');
                }
            }
        } catch (error) {
            // Handle error
        }
    };

    return (
        <div>
            <div className={styles.authForm}>
                <h2 className={styles.authFormTitle}>Sign In</h2>
                <div className={styles.authFormField}>
                    <label className={styles.authFormFieldLabel}>Email</label>
                    <input
                        type="email"
                        className={styles.authFormFieldInput}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={styles.authFormField}>
                    <label className={styles.authFormFieldLabel}>Password</label>
                    <input
                        type="password"
                        className={styles.authFormFieldInput}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className={styles.authFormButton} onClick={handleSignIn}>
                    Sign In
                </button>
            </div>
        </div>
    );
};

export default SignInComponent;
