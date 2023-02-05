import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Cars from "./components/Cars";

function App() {
  return (
    <div className="App">
      <nav className="nav-bar">
        <Link to="/cars">
          <div className="main-logo">CARS</div>
        </Link>
        <div className="navbar-info">
          <p className="navlinks">TEAM</p>
          <p className="navlinks">CONTACT</p>
          <p className="navlinks">ABOUT</p>
        </div>
      </nav>
      <main className="app-main">
        <Routes>
          <Route path="/cars" element={<Cars />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
