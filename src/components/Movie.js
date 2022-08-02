import React, { useState } from 'react'
import './css/Movie.css'
import { Rating } from 'react-simple-star-rating'

const item = [
    {
        MovieName: "",
        link: "",
        photoLink: "",
        rating: "",
        releseDate: "",
        description: ""
    }
]
function Movie() {
    const [name, setName] = useState(item)
    const [film, setFilm] = useState([])
    const [ratingValue, setRatingValue] = useState(0)



    const iputhandler = (event) => {
        console.log(event.target.name + " " + " " + event.target.value)
        setName((prestate) => ({
            ...prestate,
            [event.target.name]: event.target.value
        }))
    }
    console.log(name)
    //   const Addata = film.map(abc => abc )
    const AddMovie = () => {
        setFilm([...film, {
            MovieName: name.MovieName,
            link: name.link,
            photoLink: name.photoLink,
            rating: name.rating,
            releseDate: name.releseDate,
            description: name.description
        }])
    }
    return (
        <>
            <div className='bg-dark text-light'>
                <div className='container py-5 bg-dark text-light'>
                    <h1>Add Movie</h1>
                    <h2> Movie name is :</h2>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" name='MovieName' placeholder="Enter Movie Name" aria-label="Recipient's username" aria-describedby="basic-addon2"
                            onChange={(event) => { iputhandler(event) }} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="link" className="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder="Enter Link"
                            name='link' onChange={(event) => { iputhandler(event) }} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="link" className="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder="Upload Image Link"
                            name='photoLink' onChange={(event) => { iputhandler(event) }} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="link" className="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder="Rating"
                            name='rating' onChange={(event) => { iputhandler(event) }} />

                    </div>
                    <div className="input-group mb-3">
                        <input type="date" className="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder="Date Of Relese"
                            name='releseDate' onChange={(event) => { iputhandler(event) }} />
                    </div>
                    <div className="input-group">
                        <textarea className="form-control" aria-label="With textarea" defaultValue={""} placeholder="Enter Discription"
                            name='description' onChange={(event) => { iputhandler(event) }} />
                    </div>

                    <div className="d-grid gap-2 mt-3">
                        <button className="btn btn-secondary" type="button" onClick={AddMovie}>Button</button>
                    </div>
                    <br />
                    <div>
                        <ul>
                            {
                                film.map((abc, sk) => (<li key={sk}>

                                    {/* <img src={abc.link}></img> */}
                                    <div className="card me-3 text-light bg-dark rounded-5" style={{ width: '21rem' }}>
                                        <div className='d-flex justify-content-between p-1 pb-0'>
                                            <h6 className="card-title">Movie</h6>
                                            <h6 className="card-title">{abc.releseDate}</h6></div>
                                        <a href={abc.photoLink} target="_blank" rel="noopener noreferrer">
                                            <img src={abc.link} href={abc.photoLink} target="_blank" className="card-img-top rounded-5" alt="..." /></a>
                                        <Rating initialValue={ratingValue} size="25px" />
                                        <div className="card-title ms-1">
                                            <h4>{abc.MovieName}</h4>
                                            <p className="card-text">{abc.description}</p>
                                            <h5 className="card-title">{abc.rating}</h5>
                                            {/* <a href={abc.photoLink} target="_blank" rel="noopener noreferrer">{abc.photoLink}</a> */}
                                        </div>
                                    </div>




                                </li>
                                ))
                            }
                        </ul>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Movie