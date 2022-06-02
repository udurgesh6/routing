import React, { useContext } from "react";
import userContext from "./User";
import ageContext from "./Age";

const SubChild = () => {
  const data = useContext(userContext);
  console.log(data);
  return (
    <ageContext.Provider value={24}>
      <div style={{ border: "1px solid black" }}>
        <p>I am a subchild</p>
        <p>Name - {data.name}</p>
        <button onClick={data.onChangeName}>Change name</button>
      </div>
    </ageContext.Provider>
  );
};

export default SubChild;
