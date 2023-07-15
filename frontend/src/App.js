import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'typeface-roboto';
import "@fontsource/open-sans";
import "@fontsource/roboto";

import NavbarHeader from "./components/navbar/navbar";

import Home from "./pages/home/home";
import DespreMine from "./pages/despreMine/despreMine";
import Portofoliu from "./pages/portofoliu/portofoliu";
import Meditatii from "./pages/meditatii/meditatii";
import Atestate from "./pages/atestate/atestate";
import Pseudocod from "./pages/algoritmi/pseudocod";
import CPP from "./pages/algoritmi/cpp";
import Contact from "./pages/contact/contact";

import Footer from './components/footer/footer';

import './App.css';

function App() {
    return (
        <div className="background" style={{fontFamily: "Open Sans"}}>
            <NavbarHeader/>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>}></Route>
                    <Route path="/despremine" element={<DespreMine/>}></Route>
                    <Route path="/portofoliu" element={<Portofoliu/>}></Route>
                    <Route path="/meditatii" element={<Meditatii/>}></Route>
                    <Route path="/atestate" element={<Atestate/>}></Route>
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