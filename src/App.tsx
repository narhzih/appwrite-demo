import React from 'react';
import './styles/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import { AppLayout } from './components/layouts/AppLayout';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { ToastContainer } from 'react-toastify';

function App() {
    return (
        <div className="App">
            <ToastContainer />
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
