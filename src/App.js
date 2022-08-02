import React from 'react';
import HookUseState from './components/HookUseState';
import Extra from './components/Extra';
import Navbar from './components/Navbar';
import Movie from './components/Movie';

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="HookUseState" element={<HookUseState />} />
        <Route path="Extra" element={<Extra />} />
        <Route path="Movie" element={<Movie />} />v
      </Routes>
    </>
  )
}

export default App