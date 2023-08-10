import About from "./components/About";
import Navbar from "./components/Navbar";
import {  Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import Register from "./components/Register";
import User from "./components/User";
import OldExpense from "./components/OldExpense";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
    <Navbar/>
    
      <Routes>

      <Route path="/about" element={<About/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/user" element={<User/>} />
      <Route path="/oldexpense" element={<OldExpense/>} />
      
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
