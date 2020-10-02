import React from 'react'
import './Box.css'
import Carousel from 'react-bootstrap/Carousel'

function Education(){
    return (
        <div className="Box">
            <div className="Header">
                <h>
                    Education
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

export default Education