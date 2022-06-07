import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const users = useSelector((state) => state.users);
  return (
    <div>
      {users.map((user) => (
        <div>
          <p>Id - {user.id}</p>
          <p>Name - {user.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
