import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Headers from './Component/Headers/Headers';
import Home from './Component/Home/Home';
import Services from './Component/Services/Services';
import Login from './Component/Login/Login';

function App() {
  return (
    <div className='body'>
      <Headers></Headers>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
      
    </div>
  );
}

export default App;
