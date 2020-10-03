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
      
      <Carousel interval="10000">
      <Carousel.Item className="Item">
      <Container>
          <Row>
            <Col sm={7}>
              <div>
                <h1 className="down3">
                  Coins Power 2
                </h1>
                <p>
                  Used the original board game idea from my brother Arturo Avila and implemented the board game using Android Studio to implement all the logic of the
                  game in Java and the User Interface using XML.  
                </p>
              </div>
            </Col>
            <Col sm={5} className = "Image">
              <img src="\images\cluster.jpg"></img>
            </Col>
          </Row>
      </Container>
      </Carousel.Item>
      
      <Carousel.Item className="Item">
      <Container>
        <Row>
          <Col sm={7}>
            <div>
              <h1 className="down3">
                  Who's that Pokemon?
              </h1>
              <p>
                Grabbed Pokemon data from a website and develop this app which randomly chooses a Pokemon and then displays the option of the shown Pokemon and then chooses other
                three ramdom Pokemon as the options for the user to choose from. 
              </p>
            </div>
          </Col>
          <Col sm={5} className = "Image">
            <img src="\images\pikachu.jpg"></img>
          </Col>
        </Row>
      </Container>
      </Carousel.Item>
      
      <Carousel.Item className="Item">
      <Container>
        <Row>
          <Col sm={7}>
            <div>
              <h1 className="down3">
                Infinite Obstacle Game
              </h1>
              <p>
                Personal project in order to test how the Unity Engine works. The game is a simple infinite obstacle dodger that works by ramdomly assignint a place to the 
                obstacles and giving points to the user everytime they pass an obstacle.
              </p>
            </div>
              
          </Col>
          <Col sm={5} className = "Image">
            <img src="\images\obstacle_game.PNG"></img>
          </Col>
        </Row>
      </Container>
      </Carousel.Item>

      <Carousel.Item className="Item">
      <Container>
        <Row>
          <Col sm={6}>
            <div>
              <h1 className="down2">
                Simon Game
              </h1>
              <p>
                Static website using JQuery to make the logic of the game and Bootstrap in order to style how the game looks. Simon game is a simple game 
                in which the user has to follow a certain pattern that is given ramdomly and the user loses once they failed to follow the pattern
              </p>
            </div>
              
          </Col>
          <Col sm={6} className = "Image">
            <img src="\images\simon_game.PNG"></img>
          </Col>
        </Row>
      </Container>
      </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Projects;