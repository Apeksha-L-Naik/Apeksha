
import './App.css';
import Navbar from "./Components/Navbar"
import TextForm from './Components/TextForm';


function App() {
  
  return (
    <>
    <Navbar title="Blog" about="About Us"/> 
    <div className='container'>
    <TextForm/>
    </div>
    </>
  );
}

export default App;


