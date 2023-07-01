import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'typeface-roboto';

import Header from './components/header/header';

import Home from "./pages/home/home";
import DespreMine from "./pages/despreMine/despreMine";
import Portofoliu from "./pages/portofoliu/portofoliu";
import Meditatii from "./pages/meditatii/meditatii";
import Atestate from "./pages/atestate/atestate";

import Contact from "./pages/contact/contact";

import Algoritmi from "./pages/algoritmi/algoritmi";
    import ClasaIX from "./pages/algoritmi/clasaIX";
    import ClasaX from "./pages/algoritmi/clasaX";
    import ClasaXI from "./pages/algoritmi/clasaXI";


import Compileaza from "./pages/compileaza/compileaza";

import Footer from './components/footer/footer';

import './App.css';

function App() {
    return (
        <div className="background" style={{fontFamily: "Sans-Serif"}}>
            <Header/>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>}></Route>
                    <Route path="/despremine" element={<DespreMine/>}></Route>
                    <Route path="/portofoliu" element={<Portofoliu/>}></Route>
                    <Route path="/meditatii" element={<Meditatii/>}></Route>
                    <Route path="/atestate" element={<Atestate/>}></Route>

                    <Route path="/contact" element={<Contact/>}></Route>

                    <Route path="/algoritmi" element={<Algoritmi/>}></Route>
                        <Route path="/clasaix" element={<ClasaIX/>}></Route>
                        <Route path="/clasax" element={<ClasaX/>}></Route>
                        <Route path="/clasaxi" element={<ClasaXI/>}></Route>
                    
                    
                    <Route path="/compileaza" element={<Compileaza/>}></Route>
                </Routes>
            </Router>
            <Footer/>
        </div>
    );
}

export default App;