import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";

const Home = () => {
  const users = useSelector((state) => state.users);
  const dipatch = useDispatch();
  const [name, setName] = useState("");


  const onUserAdd = () => {
    dipatch(
      addUser({
        id: users.length + 1,
        name: name,
      })
    );
  };

  return (
    <div>
      {users.map((user) => (
        <div>
          <p>Id - {user.id}</p>
          <p>Name - {user.name}</p>
        </div>
      ))}
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onUserAdd}>Add User</button>
    </div>
  );
};

export default Home;
