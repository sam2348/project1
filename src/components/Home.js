import React from "react";
import Image from '../photo/pic1.jpg'
import Image1 from '../photo/pic2.jpg'
import Image2 from '../photo/pic3.jpg'

const Home = () => {
  return (
    <>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Image} className="d-block w-100" alt="photo"height="650px"/>
    </div>
    <div className="carousel-item">
      <img src={Image1} className="d-block w-100" alt="photo"height="650px"/>
    </div>
    <div className="carousel-item">
      <img src={Image2} className="d-block w-100" alt="photo"height="650px"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

      <center>
        <div className="container-fluid">
          <br /><br />
          <h1>About us</h1>
          <h2 className="text-dark">Renowned as one of the best custom bike builder of the country. Based in Jaipur, Rajasthan,
            this small motorcycle outfit builds custom bikes on order basis and modifies existing bikes. The firm also crafts
            from scratch.</h2>
          <img width="{800}" src={Image1} className="img-fluid" alt="..." />
          <br /><br />
          <br /><br />
          <button type="button" className="btn btn-dark " data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><h4>Open  to custom your vehical </h4></button>
          <button type="button" className="btn btn-dark m-2 " data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat"><h4>Open  to rent a custom vehical</h4></button>
          <button type="button" className="btn btn-dark " data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap"><h4>Open  if you want to @sale or @buy</h4></button>
          <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
                      <input type="text" className="form-control" id="recipient-name" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message-text" className="col-form-label">Message:</label>
                      <textarea className="form-control" id="message-text" defaultValue={""} />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Send message</button>
                </div>
              </div>
            </div>
          </div>
          <br /><br />
          <div className="card text-center">
            <div className="card-header">
              <img height="{500}" src={Image1} className="card-img" alt="..." />
            </div>
            <div className="card-body ">
              <h3 className="card-text">Hi and welcome to the India's fastest growing automobile web magazine.
                Motoauto is place where you can find every and each information regarding automobile industries in India as well as around the world.</h3>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            <br /><br />
          </div>
        </div>
      </center>
    </>
  );
};

export default Home;
