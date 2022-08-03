import React, { useState } from "react";
import "./css/Movie.css";
import { Rating } from "react-simple-star-rating";

const item = [
  {
    MovieName: "",
    link: "",
    photoLink: "",
    rating: "",
    releseDate: "",
    description: "",
  },
];

function Movie() {
  const [name, setName] = useState(item);
  const [film, setFilm] = useState([]);

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

  const AddMovie = () => {
    setFilm([
      ...film,
      {
        MovieName: name.MovieName,
        link: name.link,
        photoLink: name.photoLink,
        rating: name.rating,
        releseDate: name.releseDate,
        description: name.description,
      },
    ]);
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
                onClick={AddMovie}
              >
                Button
              </button>
            </div>
            <br />
            <div>
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
            </div>
          </form>
          {/* <form action="/action_page.php" className="needs-validation">
  <div className="mb-3 mt-3">
    <label htmlFor="uname" className="form-label">Username:</label>
    <input type="text" className="form-control" id="uname" placeholder="Enter username" name="uname" required />
    <div className="valid-feedback">Valid.</div>
    <div className="invalid-feedback">Please fill out this field.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="pwd" className="form-label">Password:</label>
    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" required />
    <div className="valid-feedback">Valid.</div>
    <div className="invalid-feedback">Please fill out this field.</div>
  </div>
  <div className="form-check mb-3">
    <input className="form-check-input" type="checkbox" id="myCheck" name="remember" required />
    <label className="form-check-label" htmlFor="myCheck">I agree on blabla.</label>
    <div className="valid-feedback">Valid.</div>
    <div className="invalid-feedback">Check this checkbox to continue.</div>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form> */}
        </div>
      </div>
    </>
  );
}

export default Movie;
