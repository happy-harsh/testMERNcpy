import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./screens/Home";
import View from "./screens/View";
import Create from "./screens/Create";
import UpdateUser from "./screens/UpdateUser"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/createUser" element={<Create/>}/>
        <Route path="/viewUser" element={<View/>}/>
        <Route path="/updateUser/:id" element={<UpdateUser/>}/>
      </Routes>
    </Router>
  );
}

export default App;
