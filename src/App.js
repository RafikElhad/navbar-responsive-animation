 import React from 'react'; 
import './css/App.css'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { motion, AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Service from './pages/Service';
import Galerie from './pages/Galerie';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <AnimatePresence mode='wait'>  
          <Routes>  
            <Route path="/" element={<motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2 }}><Home /></motion.div>} />
            <Route path="/contact" element={<motion.div key="contact" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2 }}><Contact /></motion.div>} />
            <Route path="/about" element={<motion.div key="about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2 }}><About /></motion.div>} />
            <Route path="/service" element={<motion.div key="service" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2 }}><Service /></motion.div>} />
            <Route path="/galerie" element={<motion.div key="galerie" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2 }}><Galerie /></motion.div>} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
