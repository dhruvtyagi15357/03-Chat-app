import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import { useEffect } from "react";


function App() {
  const { authUser } = useAuthContext();
  useEffect(() => {
    console.log(authUser);
  }, []);

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={authUser ? <Navigate to='/'/> : <Signup />} />
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;
