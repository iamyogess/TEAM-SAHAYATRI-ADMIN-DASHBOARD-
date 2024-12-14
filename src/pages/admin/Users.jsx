import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaLinsOaUhap_vidOsea1iUfgtGoRsbSw",
  authDomain: "saha-yatri-d87a7.firebaseapp.com",
  projectId: "saha-yatri-d87a7",
  storageBucket: "saha-yatri-d87a7.appspot.com",
  databaseURL: "https://saha-yatri-d87a7.firebaseio.com",
  appId: "1:432369063180:android:e7511b952d754fd0f32529",
  messagingSenderId: "432369063180",
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const UsersComponent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const userCollectionRef = collection(db, "users");
        const querySnapshot = await getDocs(userCollectionRef);
        const usersData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(usersData);
        console.log(usersData);
      } catch (error) {
        console.error("Error fetching users: ", error);
      }
    };
    getUsers();
  }, []);

  const handleDelete = async (userId) => {
    try {
      const userDocRef = doc(db, "users", userId);
      await deleteDoc(userDocRef);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
      alert("User deleted successfully!");
    } catch (error) {
      console.error("Error deleting user: ", error);
    }
  };

  const handleUpdate = (userId) => {
    alert(`Update functionality for user ID: ${userId} coming soon!`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-center mb-6">User List</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200 shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Email
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Role
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Actions
              </th>
            </tr> 
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                className={
                  index % 2 === 0 ? "bg-white" : "bg-gray-50 hover:bg-gray-100"
                }
              >
                <td className="border border-gray-300 px-4 py-2">
                  {user.name || "N/A"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.email || "N/A"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.role || "N/A"}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-1 px-3 rounded mr-2"
                    onClick={() => handleUpdate(user.id)}
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white font-medium py-1 px-3 rounded"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersComponent;
