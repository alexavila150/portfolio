import React from 'react'
import './Box.css'
import Carousel from 'react-bootstrap/Carousel'
import {Container, Row, Col} from 'react-bootstrap'

function Education(){
	return (
		<div className="Box">
			<div className="Header">
				<h>
					Education
				</h>
			</div>
			
			<Carousel interval="10000">
			<Carousel.Item className="Item">
			<Container>
				<Row>
					<Col sm={7}>
						<div>
							<h1>
								B.S. in Computer Science<br></br>
								The University of Texas at El Paso
							</h1>
							
							<p>
								Expected Graduation Date: May 2022 - 
								GPA: 3.93
							</p>

							<ul>
								<li>Data Structures & Algorithms</li>
								<li>Automata/Computabi/Formal Lang</li>
								<li>Discrete Mathematics</li>
								<li>Adv. Object Oriented Programming</li>
								<li>Matrix Algebra</li>
								<li>Computer Architecture</li>
							</ul>
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

export default Education