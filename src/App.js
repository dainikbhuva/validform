import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import Forgot from "./Forgot";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Login/>}> </Route>
          <Route path="/Signup" element={<Signup/>}> </Route>
          <Route path="/Forgot" element={<Forgot/>}> </Route>
        </Routes>
    </div>
  );
}

export default App;
