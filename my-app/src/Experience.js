import React from 'react';
import ReactDOM from 'react-dom';
import './Box.css';
import Carousel from 'react-bootstrap/Carousel'
import {Container, Row, Col} from 'react-bootstrap'

function Experience() {
  return (
    <div className="Box">
        <div className="Header">
          <h>
            Experience
          </h>
        </div>
        
        <Carousel>
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
                  Focused on development on developing RESTfull API that had the function of getting data from a database
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
                  Hello, I'm Alex
                </h1>
                <p>
                  Software Developer craving to create and learn! 
                </p>
              </div>  
            </Col>
            <Col sm={5} className = "Image">
              <img src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/80203944_2859807094043966_3896791748550066176_o.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=0xtyNsRWOykAX9-701U&_nc_ht=scontent-dfw5-2.xx&oh=d6d018cebbebc7b16db0aeddfbfb7ec5&oe=5F7C700A"></img>
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
                  Hello, I'm Alex
                </h1>
                <p>
                  Software Developer craving to create and learn! 
                </p>
              </div>
                
            </Col>
            <Col sm={5} className = "Image">
              <img src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/80203944_2859807094043966_3896791748550066176_o.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=0xtyNsRWOykAX9-701U&_nc_ht=scontent-dfw5-2.xx&oh=d6d018cebbebc7b16db0aeddfbfb7ec5&oe=5F7C700A"></img>
            </Col>
          </Row>
        </Container>
        </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default Experience;