import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Blogs from "./Routes/Blogs";
import Error from "./Routes/Error";
import Navigation from "./Routes/Navigation";
import Technology from "./Routes/Technology";
import Biology from "./Routes/Biology";
import Name from "./Routes/Name";
import Login from "./Routes/Login";
import Logout from "./Routes/Logout";

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />}>
            <Route path="technology" element={<Technology />} />
            <Route path="biology" element={<Biology />} />
          </Route>
          <Route path="/name/:my_name/:age" element={<Name />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
