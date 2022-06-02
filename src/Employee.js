import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const Employee = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const submitData = (e) => {
  //   e.preventDefault();
  //   console.log("Function called");
  //   axios
  //     .post("http://localhost:8080/employees/create", {
  //       name: name,
  //       email: email,
  //       age: 24,
  //     })
  //     .then((response) => console.log(response));
  // };
  // const nameRef = useRef();
  // const emailRef = useRef();
  // controlled vs uncontrolled forms

  // const uncontrolledSubmission = () => {
  //   console.log(nameRef.current.value);
  // };
  let urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/photos",
  ];

  useEffect(() => {
    async function getRequests() {
      const fetchUrl = (url) => axios.get(url);
      const promises = urls.map((url) => fetchUrl(url));
      let responses = await Promise.all(promises);
      responses.forEach((resp) => {
        console.log(resp);
      });
    }
    getRequests();
  }, []);

  return (
    <div>
      Hello
      {/* <form onSubmit={(e) => submitData(e)}>
        <input
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form> */}
      {/* <input placeholder="Name" type="text" ref={nameRef} />
      <input placeholder="Email" type="email" ref={emailRef} />
      <button onClick={uncontrolledSubmission}>Submit</button> */}
    </div>
  );
};

export default Employee;
