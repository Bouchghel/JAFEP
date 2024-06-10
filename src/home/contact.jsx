import React from 'react';

const Contact = () => {
  return (
    <>
      <section className="mt-5" id='contact'>
        <div className="bg-success bg-opacity-25 py-2">
          <div className="container">
            <div className="d-flex justify-content-between flex-column flex-md-row">
              <h1 className="fw-bold">Contactez Nous</h1>
            </div>
          </div>
        </div>
      </section>

      <main>
        <div className="container py-5">
          <div className="row g-5">
            {/* Contact Information Block */}
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="aos-item" data-aos="fade-up" data-aos-delay="200">
                  <div className="aos-item__inner">
                    <div className="bg-light hvr-shutter-out-horizontal d-block p-3">
                      <div className="d-flex justify-content-start">
                        <i className="fa-solid fa-envelope h3 pe-2"></i>
                        <span className="h5">Email</span>
                      </div>
                      <span>example@jafep.com</span>
                    </div>
                  </div>
                </div>
                <div className="aos-item" data-aos="fade-up" data-aos-delay="400">
                  <div className="aos-item__inner">
                    <div className="bg-light hvr-shutter-out-horizontal d-block p-3">
                      <div className="d-flex justify-content-start">
                        <i className="fa-solid fa-phone h3 pe-2"></i>
                        <span className="h5">Phone</span>
                      </div>
                      <span>+0123456789, +9876543210</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="aos-item mt-4" data-aos="fade-up" data-aos-delay="600">
                <div className="aos-item__inner">
                  <div className="bg-light hvr-shutter-out-horizontal d-block p-3">
                    <div className="d-flex justify-content-start">
                      <i className="fa-solid fa-location-pin h3 pe-2"></i>
                      <span className="h5">Office location</span>
                    </div>
                    <span>Morroco</span>
                  </div>
                </div>
              </div>
              <div className="aos-item" data-aos="fade-up" data-aos-delay="800">
                <div className="mt-4 w-100 aos-item__inner">
                  <iframe className="hvr-shadow" width="100%" height="345" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103664.45618278987!2d-6.041773756640625!3d35.7135692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b80b4df7c5e61%3A0xab9001f4ca8261d2!2sPeintures%20Jafep%20Maroc%20Sarl!5e0!3m2!1sfr!2sma!4v1717883143512!5m2!1sfr!2sma"><a href="https://www.maps.ie/distance-area-calculator.html">measure acres/hectares on map</a></iframe>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <h2 className="pb-4">Envoyer Un Message</h2>
              <div className="row g-4">
                <div className="col-12 col-md-6 mb-3">
                  <label htmlFor="firstName" className="form-label">Prenom</label>
                  <input type="text" className="form-control" id="firstName" placeholder="Entrer Votre Prenom" />
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <label htmlFor="lastName" className="form-label">Nom</label>
                  <input type="text" className="form-control" id="lastName" placeholder="Entrer Votre Nom" />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="tel" className="form-control" id="phone" placeholder="+2124567890" />
              </div>
              <div className="mb-3">
                <label htmlFor="country" className="form-label">Pays</label>
                <select className="form-select" id="country" aria-label="Default select example">
                  <option value="1">Maroc</option>
                  <option value="2">Non USA</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="3"></textarea>
              </div>
              <button type="button" className="btn btn-dark">Envoyer Le Message</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
