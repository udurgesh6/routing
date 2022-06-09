import React, { memo } from "react";

const Todo = ({ todos }) => {
  console.log("I am rendering");
  return <div>This is my todo list</div>;
};

export default memo(Todo);
