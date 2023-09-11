import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import NavbarHeader from "./components/navbar/navbar";
import Register from "./pages/register/register";
import Login from "./pages/login/login";

import Home from "./pages/home/home";
import DespreMine from "./pages/despreMine/despreMine";
import Portofoliu from "./pages/portofoliu/portofoliu";
import Meditatii from "./pages/meditatii/meditatii";
import Pseudocod from "./pages/algoritmi/pseudocod";
import CPP from "./pages/algoritmi/cpp";
import Contact from "./pages/contact/contact";
import Footer from './components/footer/footer';

import "@fontsource/open-sans";
import './App.css';

function App() {
    const [language, setLanguage] = useState(localStorage.getItem('language') || 'RO');

    const updateLanguage = (newLanguage) => {
        setLanguage(newLanguage);
        localStorage.setItem('language', newLanguage);
    };

    return (
        <div className="background" style={{fontFamily: "Open Sans"}}>
            <NavbarHeader language={language} setLanguage={updateLanguage} />
            <br/>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home language={language} />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route path="/despremine" element={<DespreMine language={language} />} />
                    <Route path="/portofoliu" element={<Portofoliu />} />
                    <Route path="/meditatii" element={<Meditatii />} />
                    <Route path="/pseudocod" element={<Pseudocod />} />
                    <Route path="/cpp" element={<CPP />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}

export default App;