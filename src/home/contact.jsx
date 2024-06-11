import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <>
      <section className="mt-5" id='contact'>
        <div className="bg-success bg-opacity-25 py-2">
          <Container>
            <Row className="justify-content-center">
              <h1 className="fw-bold">Contactez Nous</h1>
            </Row>
          </Container>
        </div>
      </section>

      <main>
        <Container className="py-5">
          <Row className="g-5">
            {/* Contact Information Block */}
            <Col xl={6} lg={6} md={12}>
              <Row className="row-cols-1 row-cols-md-2 g-4">
                <Col className="aos-item" data-aos="fade-up" data-aos-delay="200">
                  <div className="aos-item__inner">
                    <div className="bg-light hvr-shutter-out-horizontal d-block p-3">
                      <div className="d-flex justify-content-start">
                        <i className="fa-solid fa-envelope h3 pe-2"></i>
                        <span className="h5">Email</span>
                      </div>
                      <span>example@jafep.com</span>
                    </div>
                  </div>
                </Col>
                <Col className="aos-item" data-aos="fade-up" data-aos-delay="400">
                  <div className="aos-item__inner">
                    <div className="bg-light hvr-shutter-out-horizontal d-block p-3">
                      <div className="d-flex justify-content-start">
                        <i className="fa-solid fa-phone h3 pe-2"></i>
                        <span className="h5">Phone</span>
                      </div>
                      <span>+0123456789, +9876543210</span>
                    </div>
                  </div>
                </Col>
              </Row>
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
            </Col>
            <Col xl={6} lg={6} md={12}>
              <h2 className="pb-4">Envoyer Un Message</h2>
              <Row className="g-4">
                <Col xs={12} md={6} mb={3}>
                  <Form.Group controlId="firstName">
                    <Form.Label>Prenom</Form.Label>
                    <Form.Control type="text" placeholder="Entrer Votre Prenom" />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6} mb={3}>
                  <Form.Group controlId="lastName">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control type="text" placeholder="Entrer Votre Nom" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="email" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group controlId="phone" className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="tel" placeholder="+2124567890" />
              </Form.Group>
              <Form.Group controlId="country" className="mb-3">
                <Form.Label>Pays</Form.Label>
                <Form.Select aria-label="Select country">
                  <option value="1">Maroc</option>
                  <option value="2">Autre</option>
                </Form.Select>
              </Form.Group>
              <Form.Group controlId="message" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button variant="dark" type="submit">Envoyer Le Message</Button>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default Contact;
