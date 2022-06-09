import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Todo from "./Todo";

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
  
  const [count, setCount] = useState(1);
  const [todos, setTodos] = useState([]);

  const onIncrement = () => {
    setCount((count) => count + 1);
    setTodos((todos) => [...todos, 1]);
  };

  const addTodo = useCallback(() => {
    console.log("Adding Todo");
  }, []);

  return (
    <div>
      <h3>This is my About Component</h3>
      <p>Count value is - {count}</p>
      <button onClick={onIncrement}>Increment</button>
      <Todo todos={todos} addTodo={addTodo} />
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
