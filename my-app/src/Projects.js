import React from 'react';
import './Box.css';
import Carousel from 'react-bootstrap/Carousel'
import {Container, Row, Col} from 'react-bootstrap'

function Projects() {
  return (
    <div className="Box">
      <div className="Header">
          <h>
            Projects
          </h>
      </div>
      
      <Carousel>
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

export default Projects;