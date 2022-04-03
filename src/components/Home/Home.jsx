import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';
import './index.css';
import Type from './Type';
import myLogo from '../../assets/images/chintan_logo.jpg'
import About from '../About/About';

function Home() {
  return (
      <section>
          <Container fluid className="home-section" id="home">
              <Particle></Particle>
              <Container className="home-content">
              <Row>
                  <Col md={7} className="home-header">
                  <h1 style={{ paddingBottom: 15, color: 'white' }} className="heading">
                        Hi There!{" "}
                        <span className="wave" role="img" aria-labelledby="wave">
                        👋🏻
                        </span>
                  </h1>
                  <h1 className="heading-name">
                        I'M
                    <strong className="main-name"> Chintan Thakkar</strong>
                  </h1>
                  <div style={{ padding: 50, textAlign: "left" }}>
                      <Type />
                    </div>
                  </Col>
                  <Col md={5} style={{ paddingBottom: 20 }}>
                    <img src={myLogo} 
                      alt="home pic"       
                      className="img-fluid"
                      style={{ maxHeight: "250px", borderRadius: '10px' }}>
                    </img> 
                  </Col>
              </Row>
              </Container>
          </Container>
          <About></About>
      </section>
  )
}

export default Home;