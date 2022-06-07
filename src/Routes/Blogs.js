import React, { useEffect } from "react";
import {
  Link,
  Outlet,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { removeUser } from "../redux/userSlice";
import { useDispatch } from "react-redux";
const Blogs = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const location = useLocation();

  const navigate = useNavigate();
  useEffect(() => {
    if (sessionStorage.getItem("email") === "udurgesh6@gmail.com") {
      console.log("A valid user");
    } else {
      navigate("/login");
    }
  });
  const onRemoveUser = (id) => {
    dispatch(
      removeUser({
        id: id,
      })
    );
  };

  return (
    <div style={{ width: "400px", border: "1px solid red", height: "300px" }}>
      {1 !== 1 && <Navigate to="/" />}
      <h3>This is my Blogs Component</h3>
      <p>This are the users</p>
      {users.map((ele) => (
        <div>
          <p>Id - {ele.id}</p>
          <p>Name - {ele.name}</p>
          <button onClick={() => onRemoveUser(ele.id)}>
            Remove {ele.name}
          </button>
        </div>
      ))}
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
