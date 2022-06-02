import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const login = (e) => {
    e.preventDefault();
    if (
      emailRef.current.value === "udurgesh6@gmail.com" &&
      passwordRef.current.value === "12345678"
    ) {
      sessionStorage.setItem("email", emailRef.current.value);
      navigate("/blogs");
    } else {
      alert("Email or password is incorrect");
    }
  };
  useEffect(() => {
    if (sessionStorage.getItem("email") === "udurgesh6@gmail.com") {
      navigate("/blogs");
    }
  });

  return (
    <div>
      <h3>Please login here</h3>
      <form onSubmit={(e) => login(e)}>
        <input ref={emailRef} type="email" />
        <input ref={passwordRef} type="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
