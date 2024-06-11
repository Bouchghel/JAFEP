import React from 'react';

const Footer = () => {
  return (
    <footer id="site-footer">
      <div className="bg-success bg-opacity-25 py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xl-3 col-sm-12 mb-4 mb-xl-0">
              <h5 className="pb-3"><i className="fa-solid fa-user-group pe-1"></i> À propos de nous</h5>
              <span className="text-secondary">Ceci est une carte plus large avec du texte d'accompagnement ci-dessous comme introduction naturelle à un contenu supplémentaire.</span>
            </div>
            <div className="col-md-6 col-xl-3 col-sm-12 mb-4 mb-xl-0">
              <h5 className="pb-3"><i className="fa-solid fa-link pe-1"></i> Liens importants</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-decoration-none link-secondary">À propos de nous</a></li>
                <li><a href="#" className="text-decoration-none link-secondary">Politique de confidentialité</a></li>
                <li><a href="#" className="text-decoration-none link-secondary">Conditions de service</a></li>
              </ul>
            </div>
            <div className="col-md-6 col-xl-3 col-sm-12 mb-4 mb-md-0">
              <h5 className="pb-3"><i className="fa-solid fa-location-dot pe-1"></i> Notre emplacement</h5>
              <span className="text-secondary">
                Tanger<br />
                z.i ghzenaya lot 115-117-119 <br />
                90000, Maroc<br />
              </span>
            </div>
            <div className="col-md-6 col-xl-3 col-sm-12">
              <h5 className="pb-3"><i className="fa-solid fa-paper-plane pe-1"></i> Restez informé</h5>
              <form>
                <input type="text" className="w-100 mb-2 form-control" placeholder="Adresse e-mail" />
                <button className="w-100 btn btn-dark">Abonnez-vous maintenant</button>
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
              <span className="text-secondary pt-1 d-md-flex justify-content-md-end d-sm-flex justify-content-sm-start">Droits d'auteur &copy; 2024</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
