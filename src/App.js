import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import DisorderList from "./components/Disorders";
import DisorderDetail from "./components/DisorderDetail";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
    return (
        <>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/disorders" element={<DisorderList />} />
                    <Route path="/disorders/:name" element={<DisorderDetail />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;
