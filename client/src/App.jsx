import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NavBar from "./components/NavBar";
import { useContext } from "react";
import { AuthContext } from "./context/Authcontext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={user ? <Chat /> : <Login />} />
        <Route path="/register" element={user ? <Chat /> : <Register />} />
        <Route path="/login" element={user ? <Chat /> : <Login />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
}

export default App;
