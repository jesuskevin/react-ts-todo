import Dashboard from "./components/Dashboard";
import { Login } from "./components/Login";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Register } from "./components/Register";

const App: React.FC = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </>
  );
};

export default App;
