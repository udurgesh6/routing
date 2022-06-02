import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <div>
      <nav>
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive
              ? { color: "red", marginRight: "20px" }
              : { color: "black", marginRight: "20px" }
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) =>
            isActive
              ? { color: "red", marginRight: "20px" }
              : { color: "black", marginRight: "20px" }
          }
        >
          About
        </NavLink>
        <NavLink
          to="/blogs"
          style={({ isActive }) =>
            isActive
              ? { color: "red", marginRight: "20px" }
              : { color: "black", marginRight: "20px" }
          }
        >
          Blogs
        </NavLink>
        <NavLink
          to="/login"
          style={({ isActive }) =>
            isActive
              ? { color: "red", marginRight: "20px" }
              : { color: "black", marginRight: "20px" }
          }
        >
          Login
        </NavLink>
        <NavLink
          to="/logout"
          style={({ isActive }) =>
            isActive
              ? { color: "red", marginRight: "20px" }
              : { color: "black", marginRight: "20px" }
          }
        >
          Logout
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
