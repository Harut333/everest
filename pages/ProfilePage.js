import React, { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { firebaseConfig } from '../src/firebase';

const db = getFirestore(firebaseConfig);
const auth = getAuth(firebaseConfig);

const ProfilePage = () => {
    const [userProfile, setUserProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const currentUser = auth.currentUser;
                if (currentUser) {
                    const userId = currentUser.uid;
                    const userRef = doc(db, 'users', userId);
                    const userSnapshot = await getDoc(userRef);
                    if (userSnapshot.exists()) {
                        const userData = userSnapshot.data();
                        setUserProfile(userData);
                    } else {
                        // User document does not exist
                        console.log('User document does not exist');
                        setUserProfile(null); // Reset the userProfile state to null
                    }
                } else {
                    // No user is currently signed in
                    console.log('No user is currently signed in');
                    setUserProfile(null); // Reset the userProfile state to null
                }
            } catch (error) {
                // Handle error
                console.error('Error fetching user profile:', error);
                setUserProfile(null); // Reset the userProfile state to null
            } finally {
                setLoading(false);
            }
        };

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                fetchUserProfile();
            } else {
                // No user is currently signed in
                console.log('No user is currently signed in');
                setUserProfile(null); // Reset the userProfile state to null
                setLoading(false);
            }
        });

        return () => unsubscribe();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!loading && !userProfile) {
        return <p>User profile not found.</p>;
    }

    return (
        <div>
            <h2>User Profile</h2>
            <p>Username: {userProfile.username}</p>
            <p>Email: {userProfile.email}</p>
            {/* Display other profile information as needed */}
            <h3>Attendance</h3>
            <table>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Course</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {/* Map over the user's attendance data and display each row */}
                {userProfile.attendance.map((attendanceItem) => (
                    <tr key={attendanceItem.date}>
                        <td>{attendanceItem.date}</td>
                        <td>{attendanceItem.course}</td>
                        <td>{attendanceItem.status}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProfilePage;
