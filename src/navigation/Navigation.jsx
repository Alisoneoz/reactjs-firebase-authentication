import { BrowserRouter, Routes, Route } from "react-router-dom";
//Pages importation
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PasswordReset from "../pages/PasswordReset";
import NavBar from "./NavBar";

import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase";

const Navigation = () => {
  initializeApp(firebaseConfig);
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/resetpassword" element={<PasswordReset />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation