import React from "react";
import { useParams } from "react-router-dom";
const Name = () => {
  const { my_name, age } = useParams();
  return (
    <div>
      <p>
        This is my name {my_name} and age is {age}
      </p>
    </div>
  );
};

export default Name;
