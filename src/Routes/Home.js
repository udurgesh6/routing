import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";

const Home = () => {
  const users = useSelector((state) => state.users);
  const dipatch = useDispatch();
  const [name, setName] = useState("");

  const [counterOne, setCounterOne] = useState(1);
  const [counterTwo, setCounterTwo] = useState(1);

  const incrementOne = () => {
    setCounterOne((counterOne) => counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo((counterTwo) => counterTwo + 1);
  };

  const isEven = useMemo(() => {
    console.log("I am running");
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

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
      <button onClick={incrementOne}>Button one - {counterOne}</button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <button onClick={incrementTwo}>Button two - {counterTwo}</button>
      {users.map((user) => (
        <div key={user}>
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
