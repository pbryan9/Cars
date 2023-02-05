import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Cars from './components/Cars';
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="app-main">
        <Routes>
          <Route path="/cars" element={<Cars />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
