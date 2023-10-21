import React from "react";
import "./styles/styles.css";
import { Routes, Route } from "react-router-dom";
import { AppLayout } from "./components/layouts/AppLayout";
import { Login } from "./pages/auth/Login";
import { Register } from "./pages/auth/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
