import React from 'react';
import ReactDOM from 'react-dom';
import './Box.css';
import Carousel from 'react-bootstrap/Carousel'

function Experience() {
  return (
    <div className="Box">
        <div className="Header">
            <h>
                Experience
            </h>
        </div>
        
        <Carousel>
        <Carousel.Item>
        111
        </Carousel.Item>
        
        <Carousel.Item>
        222
        </Carousel.Item>
        
        <Carousel.Item>
        333
        </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default Experience;