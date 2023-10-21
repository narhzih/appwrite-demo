import React from "react";
import "./styles/styles.css";
import { Routes, Route } from "react-router-dom";
import { AppLayout } from "./components/layouts/AppLayout";
import { Login } from "./pages/auth/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/login" element={<Login />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
