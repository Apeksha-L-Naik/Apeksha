
import Home from './Components/Home'
import About from './Components/About'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import MainHeading from './Components/MainHeading';
import Edu from './Components/Edu'
import Project from './Components/Project'
import Contact from './Components/Contact'


function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<MainHeading/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='project' element={<Project/>}/>
      <Route path='contact' element={<Contact/>}/>
      </Route>
      <Route path='Edu' element={<Edu/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
