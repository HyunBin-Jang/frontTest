import React from 'react';
import {BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom';
import Login from './login/login';
import Signup from './signup/signup';
import MainPage from './main/mainpage';
import StartPage from './start/start'
import SelectPage from './select/select'
import CalenPage from './calen/calen'
import Menu1 from "./menu/menu1";
import Menu2 from "./menu/menu2";
import CheckList from "./check/check"

function App() {
    return (
        <Router>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/start" element={<StartPage />} />
                    <Route path="/calen" element={<CalenPage />} />
                    <Route path="/select" element={<SelectPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/menu1" element={<Menu1 />} />
                    <Route path="/menu2" element={<Menu2 />} />
                    <Route path="/checklist/:checklistId" element={<CheckListWrapper />} />
                </Routes>
        </Router>
    );
}

const CheckListWrapper = () => {
    const { checklistId } = useParams();
    return <CheckList checklistId={checklistId} />;
};
export default App;
