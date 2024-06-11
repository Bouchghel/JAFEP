import React from 'react';

const Footer = () => {
  return (
    <footer id="site-footer">
      <div className="bg-success bg-opacity-25 py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xl-3 col-sm-12 mb-4 mb-xl-0">
              <h5 className="pb-3"><i className="fa-solid fa-user-group pe-1"></i> About us</h5>
              <span className="text-secondary">This is a wider card with supporting text below as a natural lead-in to additional content.</span>
            </div>
            <div className="col-md-6 col-xl-3 col-sm-12 mb-4 mb-xl-0">
              <h5 className="pb-3"><i className="fa-solid fa-link pe-1"></i> Important links</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-decoration-none link-secondary">About us</a></li>
                <li><a href="#" className="text-decoration-none link-secondary">Privacy policy</a></li>
                <li><a href="#" className="text-decoration-none link-secondary">Terms of services</a></li>
              </ul>
            </div>
            <div className="col-md-6 col-xl-3 col-sm-12 mb-4 mb-md-0">
              <h5 className="pb-3"><i className="fa-solid fa-location-dot pe-1"></i> Our location</h5>
              <span className="text-secondary">
                Tangier<br />
                z.i ghzenaya lot 115-117-119 <br />
                90000, Maroc<br />
              </span>
            </div>
            <div className="col-md-6 col-xl-3 col-sm-12">
              <h5 className="pb-3"><i className="fa-solid fa-paper-plane pe-1"></i> Stay updated</h5>
              <form>
                <input type="text" className="w-100 mb-2 form-control" placeholder="Email ID" />
                <button className="w-100 btn btn-dark">Subscribe now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 mb-3 mb-md-0">
              <ul className="list-inline mb-0">
                <li className="list-inline-item"><a className="btn btn-outline-secondary" href="#"><i className="icofont-facebook"></i></a></li>
                <li className="list-inline-item"><a className="btn btn-outline-secondary" href="#"><i className="icofont-youtube"></i></a></li>
                <li className="list-inline-item"><a className="btn btn-outline-secondary" href="#"><i className="icofont-brand-nexus"></i></a></li>
                <li className="list-inline-item"><a className="btn btn-outline-secondary" href="#"><i className="icofont-linkedin"></i></a></li>
                <li className="list-inline-item"><a className="btn btn-outline-secondary" href="#"><i className="icofont-github"></i></a></li>
              </ul>
            </div>
            <div className="col-md-6 col-sm-12">
              <span className="text-secondary pt-1 d-md-flex justify-content-md-end d-sm-flex justify-content-sm-start">Copyright &copy; 2024</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
