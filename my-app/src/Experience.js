import React from 'react';
import './Box.css';
import {Container, Row, Col, Carousel} from 'react-bootstrap'

function Experience() {
  return (
    <div className="Box">
        <div className="Header">
          <h>
            Experience
          </h>
        </div>
        
        <Carousel interval="10000">
        
        <Carousel.Item className="Item">
        <Container>
          <Row>
            <Col sm={6}>
              <div>
                <h1>
                  Microsoft - Explorer Intern
                </h1>
                <p>
                  Worked on designing and implementing a full-stack website.
                  Focused on development on developing REST API that had the function of getting data from a database
                </p>
              </div>
                
            </Col>
            <Col sm={6}>
              <img className = "Item-Image" src="https://www.kobargo.com/wp-content/uploads/2019/05/Microsoft-Logo-1-1.jpg"></img>
            </Col>
          </Row>
        </Container>
        </Carousel.Item>
        
        <Carousel.Item className="Item">
        <Container>
          <Row>
            <Col sm={7}>
              <div>
                <h1>
                  The University of Texas at El Paso -<br></br>Instructional Assistant
                </h1>
                <p>
                  Help the UTEP instructors by helping their students to understand the course material during office hours and help with grading and developing the material that would be cover during the class and lab session.
                  Mainly covering Data Structures using Java and Python
                </p>
              </div>  
            </Col>
            <Col sm={5} className = "Image">
              <img src="https://localist-images.azureedge.net/photos/667330/square_300/b448f143a181656eda21b534aede544b9a68883f.jpg"></img>
            </Col>
          </Row>
        </Container>
        </Carousel.Item>
        
        </Carousel>
    </div>
  );
}

export default Experience;