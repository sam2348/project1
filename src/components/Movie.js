import React from "react";
import {Routes,} from "react-router-dom";
import Mnav from './Mnav';
import Mhome from './Mhome';




function Movie() {
  return( 
    <>
     <Mnav />
     <Mhome />
     <Routes>
     
     </Routes>
    </>
  );
}

export default Movie;
