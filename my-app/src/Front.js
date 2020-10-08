import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap'
import './Front.css'

function Front(){

	return(
		<div className="Front">
			<Container>
				<Row>
					<Col sm={7}>
						<div>
							<h2>
								Hello, I'm Alex
							</h2>
							<p>
								Software Developer craving to create and learn! 
							</p>
						</div>
							
					</Col>
					<Col sm={5} className = "Image">
						<img src="/images/alex.jpg"></img>
					</Col>
				</Row>
			</Container>
		</div>
	);   
}

export default Front