import React from "react";
import { Layout } from "antd";
import Login from "./Auth/Login";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Signup from "./Auth/Signup";

const { Content } = Layout;

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
