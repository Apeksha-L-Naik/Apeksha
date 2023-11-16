
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import MainHeading from './Components/MainHeading';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainHeading/>}>
        <Route index element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='contact' element={<Contact/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
