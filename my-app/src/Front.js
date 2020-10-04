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
						<img src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/80203944_2859807094043966_3896791748550066176_o.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=0xtyNsRWOykAX9-701U&_nc_ht=scontent-dfw5-2.xx&oh=d6d018cebbebc7b16db0aeddfbfb7ec5&oe=5F7C700A"></img>
					</Col>
				</Row>
			</Container>
		</div>
	);   
}

export default Front