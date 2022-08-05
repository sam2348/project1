import React from 'react';
import HookUseState from './components/HookUseState';
import Extra from './components/Extra';
import Navbar from './components/Navbar';
import Movie from './components/Movie';
import AddUser from './components/AddUser';
import Home from './components/Home';
import NextPage from './components/NextPage';
// import Mhome from './components/Mhome';
import {Routes,Route,} from "react-router-dom";


function App() {
  return (
    <>
      <Navbar 
        name="Hook's"
        usestate="UseState"
        extra="Extra"
        movie="Movie"
        
        />
      <Routes>
        <Route path="HookUseState" element={<HookUseState />} />
        <Route path="Extra" element={<Extra />} />
        <Route path="/Movie/*" element={<Movie />}>
        {/* <Route path="/Movie/*" element={<Mhome />} /> */}
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/Movie/:MovieName" element={<NextPage />} />
        <Route path="/user/:username" element={<AddUser />} />
      </Routes>
    </>
  )
}

export default App