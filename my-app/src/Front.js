import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Front.css'
import './profile.png'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function Front(){
    const classes = useStyles();

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
                                Software Developer currently studying as a Junior in College. Passionate for video game development mobile app development and web development. 
                            </p>
                        </div>
                        
                    </Col>
                    <Col sm={5}>
                        <img src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/80203944_2859807094043966_3896791748550066176_o.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=0xtyNsRWOykAX9-701U&_nc_ht=scontent-dfw5-2.xx&oh=d6d018cebbebc7b16db0aeddfbfb7ec5&oe=5F7C700A"></img>
                    </Col>
                </Row>
            </Container>
        </div>
    );   
}

export default Front

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));