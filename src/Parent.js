import React, { useState } from "react";
import Child from "./Child";
import userContext from "./User";

const Parent = () => {
  const [name, setName] = useState("Durgesh");
  const onChangeName = () => {
    if (name === "Durgesh") {
      setName("Ritesh");
    } else {
      setName("Durgesh");
    }
  };
  return (
    <userContext.Provider value={{ name, onChangeName }}>
      <div>
        <p>I am parent</p>
        <p>{name}</p>
        <button onClick={onChangeName}>Change name</button>
        <Child />
      </div>
    </userContext.Provider>
  );
};

export default Parent;
