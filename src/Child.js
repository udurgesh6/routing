import React from "react";
import SubChild from "./SubChild";

const Child = () => {
  return (
    <div style={{ border: "1px solid blue" }}>
      <p>I am child</p>
      {/* <p>I have received name - {props.name}</p>
      <button onClick={props.change_name}>Change name from child</button> */}
      <SubChild />
    </div>
  );
};

export default Child;
