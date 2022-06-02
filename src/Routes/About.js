import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const [entry, setEntry] = useState("home");
  const navigate = useNavigate();
  const routeMeTo = () => {
    if (entry === "home") {
      navigate("/");
    } else if (entry === "blogs") {
      navigate("/blogs");
    } else if (entry === "about") {
      navigate("/about");
    } else {
      alert("Route does not exists");
    }
  };
  return (
    <div>
      <h3>This is my About Component</h3>
      <input
        placeholder="Enter route"
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
      />
      <button onClick={routeMeTo}>Route</button>
    </div>
  );
};

export default About;
