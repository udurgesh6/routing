import React from "react";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const navigate = useNavigate();
  const logout = () => {
    sessionStorage.clear();
    navigate("/login");
  };
  return (
    <div>
      <h3>Logout from here</h3>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Logout;
