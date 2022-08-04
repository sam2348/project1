import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// const item = [ ];
function AddUser() {
  const navigate = useNavigate();
  const url = "http://localhost:3003/users"
  const [name, setName] = useState({
    MovieName: "",
    link: "",
    photoLink: "",
    rating: "",
    releseDate: "",
    description: ""
  });

  const onClick = (e) => {
    e.preventDefault();
    axios.post(url, {
        MovieName: name.MovieName,
        link: name.link,
        photoLink: name.photoLink,
        rating: name.rating,
        releseDate: name.releseDate,
        description: name.description,
    });
    navigate("/Movie");
  };

  const inputhandler = (event) => {
    var value = event.target.value;
    var rate = value * 1;
    if (value < 1) {
      alert("zero will be not consider");
      setName((prestate) => ({
        ...prestate,
        [event.target.name]: "1",
      }));
    }

    if (rate >= 5) {
      alert("yes");
      setName((prestate) => ({
        ...prestate,
        [event.target.name]: "1",
      }));
    } else {
      setName((prestate) => ({
        ...prestate,
        [event.target.name]: event.target.value,
      }));
    }
  };
  const iputhandler = (event) => {
    setName((prestate) => ({
      ...prestate,
      [event.target.name]: event.target.value,
    }));
  };

  const innputhandler = (event) => {
    const date = new Date(event.target.value);
    const yearOfDate = date.getFullYear();
    setName((prestate) => ({
      ...prestate,
      [event.target.name]: yearOfDate,
    }));
  };

  return (
    <>
      <div className="bg-dark text-light">
        <div className="container py-5 bg-dark text-light">
          <h1>Add Movie</h1>
          <h2> Movie name is :</h2>
          <form className="needs-validation">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                name="MovieName"
                placeholder="Enter Movie Name"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={(event) => {
                  iputhandler(event);
                }}
                required
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
                placeholder="Enter Link"
                name="link"
                onChange={(event) => {
                  iputhandler(event);
                }}
                required
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
                placeholder="Upload Image Link"
                name="photoLink"
                onChange={(event) => {
                  iputhandler(event);
                }}
                required
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
                placeholder="Rating"
                name="rating"
                onChange={(event) => {
                  inputhandler(event);
                }}
                required
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="date"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
                placeholder="Date Of Relese"
                name="releseDate"
                onChange={(event) => {
                  innputhandler(event);
                }}
                required
              />
            </div>
            <div className="input-group">
              <textarea
                className="form-control"
                aria-label="With textarea"
                defaultValue={""}
                placeholder="Enter Discription"
                name="description"
                onChange={(event) => {
                  iputhandler(event);
                }}
                required
              />
            </div>

            <div className="d-grid gap-2 mt-3">
              <button
                className="btn btn-secondary"
                type="button"
                onClick={(e) => onClick(e)}
                >
                Button
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddUser;
