import Dashboard from "./pages/Dashboard";
// import { Login } from "./pages/Login";
// import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
// import { Register } from "./pages/Register";
// import { AuthLayout } from "./layouts/AuthLayout";
// import { GuestLayout } from "./layouts/GuestLayout";

const App: React.FC = () => {
  return (
    <>
      {/* <Navbar/> */}
      <Routes>
          <Route path="/" element={<Dashboard />}/>
        {/* <Route element={<AuthLayout />}>
        </Route>
        <Route element={<GuestLayout />}>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Route> */}
      </Routes>
    </>
  );
};

export default App;
