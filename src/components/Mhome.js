import React, { useState } from "react";
import axios from 'axios';
import "./css/Movie.css";
import { Rating } from "react-simple-star-rating";

function Mhome() {
    // const [film, setFilm] = useState([]);
  // const AddMovie = () => {
  //   setFilm([
  //     ...film,
  //     {
  //       MovieName: name.MovieName,
  //       link: name.link,
  //       photoLink: name.photoLink,
  //       rating: name.rating,
  //       releseDate: name.releseDate,
  //       description: name.description,
  //     },
  //   ]);
  // };
  return (
    <>
    <hi>Mhome</hi>
     {/* <div>
              {film.map((abc, id) => (
                <div key={id}>
                  <div
                    className="card me-3 text-light bg-dark rounded-5"
                    style={{ width: "21rem" }}
                  >
                    <div className="d-flex justify-content-between p-1 pb-0">
                      <h6 className="card-title">Movie</h6>
                      <h6 className="card-title">{abc.releseDate}</h6>
                    </div>
                    <a
                      href={abc.photoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={abc.link}
                        href={abc.photoLink}
                        target="_blank"
                        className="card-img-top rounded-5"
                        alt="..."
                      />
                    </a>
                    <Rating initialValue={abc.rating} size="25px" />
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
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
    </>
  )
}

export default Mhome;