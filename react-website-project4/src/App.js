
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import MainHeading from './Components/MainHeading';
import Signin from './Components/Signin';
import Course from './Components/Course'

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainHeading/>}>
        <Route index element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='contact' element={<Contact/>}></Route>
      <Route path='signin' element={<Signin/>}></Route>
      </Route>
      <Route path='course' element={<Course/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
