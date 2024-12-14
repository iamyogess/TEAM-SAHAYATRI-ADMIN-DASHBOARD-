import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  updateDoc,
  doc,
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

const GuideVerificationRequest = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userCollectionRef = collection(db, "users");
        const querySnapshot = await getDocs(userCollectionRef);

        const usersData = querySnapshot.docs
          .map((doc) => {
            const data = doc.data();
            console.log("User Data Before Filtering:", data); // Log data for debugging
            return {
              id: doc.id,
              ...data,
            };
          })
          .filter((user) => {
            console.log("Filtering user:", user); // Log each user object before filtering
            return user.user === "user" && user.yearOfExp; // Filter users with "user" role and yearsOfExp
          });

        console.log("Fetched and Filtered Users Data:", usersData); // Log filtered users
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching users: ", error);
      }
    };

    fetchUsers();
  }, []);

  const grantGuideRole = async (userId) => {
    try {
      const userDocRef = doc(db, "users", userId);
      await updateDoc(userDocRef, { user: "guide" }); // Update role to "guide"

      // Update local state to reflect the change
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
      alert("User role updated to guide!");
    } catch (error) {
      console.error("Error updating user role: ", error);
    }
  };

  const holdGuideRole = async (userId) => {
    try {
      const userDocRef = doc(db, "users", userId);
      await updateDoc(userDocRef, { user: "onHold" });

      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
      alert("User role on hold!");
    } catch (error) {
      console.error("Error updating user role: ", error);
    }
  };

  return (
    <section className="p-6 bg-white shadow-lg rounded-lg w-full">
      <h2 className="text-2xl font-semibold mb-4">
        Guide Verification Requests
      </h2>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left font-semibold text-gray-600">
              #
            </th>
            <th className="px-4 py-2 text-left font-semibold text-gray-600">
              Name
            </th>
            <th className="px-4 py-2 text-left font-semibold text-gray-600">
              Documents
            </th>
            <th className="px-4 py-2 text-left font-semibold text-gray-600">
              Email
            </th>
            <th className="px-4 py-2 text-left font-semibold text-gray-600">
              Role
            </th>
            <th className="px-4 py-2 text-left font-semibold text-gray-600">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center py-4">
                No users found
              </td>
            </tr>
          ) : (
            users.map((user, index) => (
              <tr key={user.id} className="border-b">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{user.username}</td>
                <td className="px-4 py-2">Document Link</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.user}</td>
                <td className="px-4 py-2">
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                    onClick={() => grantGuideRole(user.id)}
                  >
                    Grant
                  </button>
                  <button
                    className="bg-yellow-800 text-white px-4 py-2 rounded"
                    onClick={() => holdGuideRole(user.id)}
                  >
                    Hold
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </section>
  );
};

export default GuideVerificationRequest;
