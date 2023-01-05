import { BrowserRouter, Routes, Route } from "react-router-dom";
//Pages importation
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NavBar from "./NavBar";

const Navigation = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation