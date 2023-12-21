import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Menu from './Components/Menu';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='menu' element={<Menu/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
