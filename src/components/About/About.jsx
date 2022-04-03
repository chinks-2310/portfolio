import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import '../Home/index.css';
import TimeLine from '../Home/TimeLine';

function About() {
  return (
          <Container fluid className="home-about-section" id="about">
              <Container>
                  <Row>
                      <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            LET ME <span className="purple"> INTRODUCE </span> MYSELF
                        </h1>
                        <p className="home-about-body">I'm a Software Engineer. Currently I am working at HashedIn By Deloitte. 
                        <br />
                        <br />
                        I am having an experience of designing and building Web applications with <span className='purple'>JavaScript / Reactjs, Python, Django, GraphQL </span>
                        and some other cool libraries and frameworks.  
                        <br />
                        <br />
                        I have completed my <span className='purple'>B.Tech</span> in <span className='purple'>Information and Communication Technology</span> from DA-IICT Gandhinagar.
                        </p>
                      </Col>
                  </Row>
                  <Row>
                      <TimeLine />
                  </Row>
              </Container>
          </Container>
  )
}

export default About;