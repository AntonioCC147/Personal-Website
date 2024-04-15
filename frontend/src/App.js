import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import NavbarHeader from "./components/navbar/navbar";

import Home from "./pages/home/home";
import DespreMine from "./pages/despreMine/despreMine";
import Profesor from "./pages/profesor/profesor";
import Portofoliu from "./pages/portofoliu/portofoliu";
import Meditatii from "./pages/meditatii/meditatii";
import Pseudocod from "./pages/algoritmi/pseudocod";
import CPP from "./pages/algoritmi/cpp";
import Contact from "./pages/contact/contact";
import Footer from './components/footer/footer';
import Error404 from "./pages/error404/error404";

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
                    <Route exact path="/" element={<Home language={language}/>} />
                    <Route path="/despre" element={<DespreMine language={language}/>}/>
                    <Route path="/about" element={<DespreMine language={language}/>}/>
                    <Route path="/portofoliu" element={<Portofoliu language={language}/>}/>
                    <Route path="/portofolio" element={<Portofoliu language={language}/>}/>
                    <Route path="/profesor" element={<Profesor language={language}/>}/>
                    <Route path="/teacher" element={<Profesor language={language}/>}/>
                    <Route path="/meditatii" element={<Meditatii language={language}/>}/>
                    <Route path="/pseudocod" element={<Pseudocod language={language}/>}/>
                    <Route path="/cpp" element={<CPP language={language}/>} />
                    <Route path="/contact" element={<Contact language={language}/>}/>
                    <Route path="*" element={<Error404 language={language}/>}/>
                </Routes>
            </Router>
            <Footer language={language}/>
        </div>
    );
}

export default App;