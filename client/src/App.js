import About from "./components/About";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import User from "./components/User";
import OldExpense from "./components/OldExpense";
import Footer from "./components/Footer";
import Logout from "./components/Logout";
import { useReducer, createContext } from "react";
import { initialState,reducer } from "./reducer/UserReducer";

export const UserContext = createContext();

const Routing = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<User />} />
      <Route path="/oldexpense" element={<OldExpense />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Routing />
      </UserContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
