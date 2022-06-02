import React, { useEffect } from "react";
import {
  Link,
  Outlet,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
const Blogs = () => {
  const location = useLocation();
  // useEffect(() => {
  //   console.log("I am making an api call");
  // }, [location]);
  const navigate = useNavigate();
  useEffect(() => {
    if (sessionStorage.getItem("email") === "udurgesh6@gmail.com") {
      console.log("A valid user");
    } else {
      navigate("/login");
    }
  });

  return (
    <div style={{ width: "400px", border: "1px solid red", height: "300px" }}>
      {1 !== 1 && <Navigate to="/" />}
      <h3>This is my Blogs Component</h3>
      <nav>
        <Link to="./technology" style={{ marginRight: "20px" }}>
          Technology
        </Link>
        <Link to="./biology">Biology</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Blogs;
