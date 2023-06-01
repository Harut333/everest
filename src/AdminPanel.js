import { db } from './firebase';
import { useEffect, useState } from 'react';
import { firestore } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

const AdminPanel = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersCollection = collection(db, 'users'); // Make sure 'users' is the correct collection name in your Firestore
                const usersSnapshot = await getDocs(usersCollection);
                const users = [];
                usersSnapshot.forEach((doc) => {
                    users.push({ id: doc.id, ...doc.data() });
                });
                setUsers(users);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Admin Panel</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.uid}>
                        {user.name}
                        {user.isAdmin && <span style={{ color: 'green' }}> (Admin)</span>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminPanel;
