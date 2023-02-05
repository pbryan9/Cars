import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Cars from './components/Cars';
import NavBar from './components/Navbar';
import SingleCar from './components/SingleCar';
import SingleMessage from './components/SingleMessage';
import Messages from './components/Messages';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="app-main">
        <Routes>
          <Route path="/cars" element={<Cars />} />
          <Route path="/cars/:id" element={<SingleCar />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/messages/:id" element={<SingleMessage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
