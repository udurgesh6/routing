import React, { useState, useEffect } from "react";

function Test1() {
  const [state1, setState1] = useState("I have something to do wuth useEffect");
  const [state2, setState2] = useState(
    "I dont have anything to do with useEffect"
  );

  const changeState1 = () => {
    setState1("Something to do with useEffect");
  };
  const changeState2 = () => {
    setState2("Nothing to do with useEffect");
  };

  useEffect(() => {
    console.log("render");
    return () => {
      //clean-up function
      console.log("unmount");
    };
  }, [state1]);

  return (
    <div style={{ border: "1px solid blue" }}>
      <p>{state1}</p>
      <p>{state2}</p>
      <button onClick={changeState1}>Change state1</button>
      <button onClick={changeState2}>Change state2</button>
    </div>
  );
}

export default Test1;
