import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Spinner, Alert } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formState, setFormState] = useState({
    Prenom: '',
    Nom: '',
    raisonSocial: '',
    email: '',
    phone: '',
    country: 'maroc', // Initialiser avec "maroc"
    objet: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;

    // Si le champ est "phone", valider les entrées pour ne permettre que les chiffres
    if (id === 'phone') {
      const onlyNums = value.replace(/[^0-9]/g, '');
      setFormState({ ...formState, [id]: onlyNums });
    } else {
      setFormState({ ...formState, [id]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formState.Prenom || !formState.Nom || !formState.email || !formState.phone || !formState.country || !formState.objet || !formState.message) {
      setAlert({ type: 'danger', message: 'Veuillez remplir tous les champs obligatoires.' });
      return;
    }

    setLoading(true);
    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formState,
      process.env.REACT_APP_EMAILJS_USER_ID
    ).then((response) => {
      setLoading(false);
      setAlert({ type: 'success', message: 'Votre message a été envoyé avec succès.' });
      setFormState({
        Prenom: '',
        Nom: '',
        raisonSocial: '',
        email: '',
        phone: '',
        country: 'maroc', // Réinitialiser avec "maroc"
        objet: '',
        message: '',
      });
    }).catch((err) => {
      setLoading(false);
      setAlert({ type: 'danger', message: 'Une erreur est survenue. Veuillez réessayer.' });
    });
  };

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
                    <span>Maroc</span>
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
              <Form onSubmit={handleSubmit}>
                {alert && (
                  <Alert variant={alert.type}>
                    {alert.message}
                  </Alert>
                )}
                <Row className="g-4">
                  <Col xs={12} md={6} mb={3}>
                    <Form.Group controlId="Prenom">
                      <Form.Label>Prenom</Form.Label>
                      <Form.Control type="text" placeholder="Entrer Votre Prenom" value={formState.Prenom} onChange={handleChange} required />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6} mb={3}>
                    <Form.Group controlId="Nom">
                      <Form.Label>Nom</Form.Label>
                      <Form.Control type="text" placeholder="Entrer Votre Nom" value={formState.Nom} onChange={handleChange} required />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId="raisonSocial" className="mt-3 mb-3">
                  <Form.Label>Raison Social</Form.Label>
                  <Form.Control type="text" placeholder="Raison Sociale" value={formState.raisonSocial} onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="email" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" value={formState.email} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="phone" className="mb-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="tel" placeholder="+2124567890" value={formState.phone} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="country" className="mb-3">
                  <Form.Label>Pays</Form.Label>
                  <Form.Select aria-label="Select country" value={formState.country} onChange={handleChange}>
                    <option value="maroc">Maroc</option>
                    <option value="autre">Autre</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group controlId="objet" className="mb-3">
                  <Form.Label>Objet</Form.Label>
                  <Form.Control type="text" placeholder="Objet" value={formState.objet} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="message" className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} value={formState.message} onChange={handleChange} required />
                </Form.Group>
                <Button variant="dark" type="submit" disabled={loading}>
                  {loading ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : 'Envoyer Le Message'}
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default Contact;
