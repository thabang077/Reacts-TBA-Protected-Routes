import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Navbar from "./components/shared/Navbar";
import useAuth from "./hooks/useAuth"; // 👈 Import the custom hook

function AppWrapper() {
  const isLoggedIn = useAuth(); // 👈 Use it
  const location = useLocation();

  return (
    <>
      {isLoggedIn && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;
