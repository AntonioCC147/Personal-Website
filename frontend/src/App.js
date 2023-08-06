import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
    return (
        <div className="background" style={{fontFamily: "Open Sans"}}>
            <NavbarHeader/>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>}></Route>
                    <Route exact path="/register" element={<Register/>}></Route>
                    <Route exact path="/login" element={<Login/>}></Route>
                    <Route path="/despremine" element={<DespreMine/>}></Route>
                    <Route path="/portofoliu" element={<Portofoliu/>}></Route>
                    <Route path="/meditatii" element={<Meditatii/>}></Route>
                    <Route path="/pseudocod" element={<Pseudocod/>}></Route>
                    <Route path="/cpp" element={<CPP/>}></Route>
                    <Route path="/contact" element={<Contact/>}></Route>
                </Routes>
            </Router>
            <Footer/>
        </div>
    );
}

export default App;