import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Meal from "./components/Meal/Meal";
import "./App.css";

const App = () => {
  const activeStyle = {
    color: "orange",
  };

  return (
    <BrowserRouter>
      <nav className="appNavBar navbar bg-primary">
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/meal"
          >
            meal details
          </NavLink>
        </li>
      </nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/meal/:idMeal" element={<Meal></Meal>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
