import { useState, useEffect } from "react";
import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
function App() {
  //name state
  const [name, setName] = useState("");
  // age state
  const [age, setAge] = useState(0);

  const [users, setUsers] = useState([]);
  const usersCollection = collection(db, "users");

  const createUser = async (user) => {
    await addDoc(usersCollection, { name, age: Number(age) });
  };

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFeilds = { age: age + 1 };
    await updateDoc(userDoc, newFeilds);
  };
  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollection);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="age"
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={createUser}>Create User</button>
      {users.map((user) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <h2>{user.age}</h2>
          <button
            onClick={() => {
              updateUser(user.id, user.age);
            }}
          >
            Increase Age
          </button>
          <button onClick={() => deleteUser(user.id)}>Delete User</button>
        </div>
      ))}
    </div>
  );
}

export default App;
