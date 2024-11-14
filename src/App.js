import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './login/login';
import Signup from './signup/signup';

function App() {
    return (
        <Router>
            <div>
                <h1>Welcome to Travel Kit</h1>
                <Link to="/login">
                    <button>Go to Login</button>
                </Link>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
