import "./App.css";
import { Navbar } from "./Components/pages/Navbar";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/pages/Home";
import { About } from "./Components/pages/About";
import { Login } from "./Components/pages/Login";
import { Logout } from "./Components/pages/Logout";
import Books from "./Components/pages/Books";
import {SingleBook} from "./Components/pages/SingleBook";
import {EditBookData} from "./Components/pages/EditBookData";
// import { RequiredAuth } from "./Components/context/RequiredAuth";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<SingleBook/>}/>
        <Route path="/books/:id/edit" element={<EditBookData/>}/>
      </Routes>
    </div>
  );
}

export default App;
