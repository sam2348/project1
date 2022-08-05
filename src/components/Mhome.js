import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/Movie.css";
import { Rating } from "react-simple-star-rating";
import { NavLink } from "react-router-dom";

function Mhome() {
  const [film, setFilm] = useState([]);
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setFilm(result.data);
  };
  return (
    <>
      <div className="bg-dark">
      <div className="container py-5 bg-dark text-light">
        <div className="row row-cols-1 row-cols-md-3">
          {film.map((abc, id) => (
            <div key={id}>
              <div
                className="card me-2 mt-3 text-light bg-dark rounded-5 "
                style={{ width: "21rem" }}
              >
                <div className=" p-1 pb-0 d-flex justify-content-between">
                  <h6 className="card-title">Movie</h6>
                  <h6 className="card-title">{abc.releseDate}</h6>
                </div>
                <NavLink
                  to={`/Movie/${abc.MovieName}`}
                >
                  <img
                    src={abc.link} height={250} width={250}
                    className="card-img-top rounded-5"
                  />
                </NavLink>
                {/* <Rating initialValue={abc.rating} size="25px" />
                <div className="card-title ms-1">
                  <h4>{abc.MovieName}</h4>
                  <p className="card-text">{abc.description}</p>
                  <a
                    href={abc.photoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {abc.photoLink}
                  </a> 
                </div>*/}
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}

export default Mhome;
