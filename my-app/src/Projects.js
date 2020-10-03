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
                <h1>
                  Coins Power 2
                </h1>
                <p>
                  Used the original board game idea from my brother Arturo Avila and implemented the board game using Android Studio to implement all the logic of the
                  game in Java and the User Interface using XML.  
                </p>
              </div>
            </Col>
            <Col sm={5} className = "Image">
              <img src="https://lh3.googleusercontent.com/SQsovEfN4s_YdU4XnVX5Fv7AEDhqMe4pqYyz_onUwGK3LbKBdWKyCyxLsepQ4PVTq--Cydsijez5VDMKiHKKLxg-Vcp4Etx_Smjv0XiBmkBjwyyCndTAnflMZ4Q-rpUgjbgtPJSrpElV01PfPf2wuejAn4TFWu5GitUwauEjSDtKbFGbIBltbEGmGPPpx9NRf7pswvNn_UYFNJY1nSkW1JfKShAoDdEE3or6RsiATnOvSiQQndxS7FSMKvy2daFqQZlRL7fuF3vr9lLBoMgB8PHEPWHjCy8Ywg__EmNiYu84eyilZsy3gEG_8LtlD-RP-LJilrTWcMNQLfIjUtCHOun_R-7FeGRQW95NzFd16p_U_QuSsyoko-nmW9c7zgISqC2loX5Qtzr8Kq879sQ1wdESBF1GDOOZMsi_aANEfXJ4BeERWRg7oH6xoKsROvVvMaD4ryIgP82jvYULTwSBRe2lE91XwXSkOntxx7eqc6NzT1znWiSV2zLgitUpMuqGAfm0DWFm8xD_xr1whwHO-0DUDJ6Hgauoyb-3mepTt2hTxffGMN_kHOg4Kevf-hu6WUG9xtAAsgKYSyDeNNMYagpJTwO94YcHCCblv_FW8C7EFraetSMObHoSzS0sU_RaZHcU5DQiNMqVHBcZcTiFD8n8VfEbZiT0g2kc9PzhxxlPO1wQN_4T1XgD4xVP=w440-h903-no?authuser=0"></img>
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
                  Who's that Pokemon?
              </h1>
              <p>
                Grabbed Pokemon data from a website and develop this app which randomly chooses a Pokemon and then displays the option of the shown Pokemon and then chooses other
                three ramdom Pokemon as the options for the user to choose from. 
              </p>
            </div>
          </Col>
          <Col sm={5} className = "Image">
            <img src="https://lh3.googleusercontent.com/7jIl0PTy0Qntlpn1kWABjQ_HHU1HTJmI38lUmC44UzTKL0IpfYHG2G6BRPc88uMuP1tshG9Zhn1Cv7doin9CaPnRcjZqDsxj_tDkYTFM9-cLbOB0gsul4pujWMBWjzz6XRuUW8JjdIb499vcMyBdtrNlyNBFF7mEo1vnTpjf5XusnRNE2sMfRXIcFK4555DeC2jPHtdYALlIRAjWY4KEECUaHKA7l0ZChwVNTp_b1mV-5AjsVjcXB9G21nrrWUHUPYbDIMNhNenN3vSysgbgNQdO5Kxr1Ro1SfrPcLSvv5Tb0qKN3VKXpxAm2Ak8aQcqmcYB8KWtRRYJe97vCr9potOARyVB1L9OSQ1qU5sZWQyrtj9eFTA3RAFCyQ7DUFG4HDPy7iqenTQEqtz5g0N8tI45iJW3n4YE0RkB_2jmKhAG7p743RoLdJbuHi2s0_ekSuwVvmIupBiWWZjNb2DCJ9ASQDmgjBTw_ahtYkscAf6sNa8WVuymTf9NrUurFwRpw7E0v_Uj9pdyP4zNi6aohLcCnyk7mYh8wiXyuQDdu5-EEPRhuL7egvyY5blJQk-2ihxg2_Gvs2wPfwB7uchiGYtvT58akATjcn71tHB7zq8hjGhfT67i5kaio1_9ZyFgc1xAXyUnJZM4_iKEWjF7QAd_W0ltSRoQ90-nHlC2hSdEIBbuenafFIT558GD=w440-h903-no?authuser=0"></img>
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
                Infinite Obstacle Game
              </h1>
              <p>
                Personal project in order to test how the Unity Engine works. The game is a simple infinite obstacle dodger that works by ramdomly assignint a place to the 
                obstacles and giving points to the user everytime they pass an obstacle.
              </p>
            </div>
              
          </Col>
          <Col sm={5} className = "Image">
            <img src="https://lh3.googleusercontent.com/OE9IcLZVvc-wt7SV-XVXYyMlGqLLyb7YxbSxXgkjd3aPPvDieY-VIbl0nmKwlU6Lbg-7wbIQdMfW7nDGg-yZMAjTA3jY-rjh0bL0LL7FJDn9Rp9Wzukw53G4ohEdkzit3kwGBNF3xtE0qWnIi1-yr9NMT9NYKg5BgllQbVrXjW4LRr1edtKVbUsXd8Wfba9MuuonL2K4ApZaSXX28Vn0WAPnVN7MuW-MCDgdfievI0wyS8BZgjY6BWMHYCxuOikFCRg2j5uN3_J8XaGm8pMOfiDi_I78fnEDM0oAMTRoqdqouRuT3NNQZBF1L6ip9wcvtXc4KyO7e0JxTpxltPv97-pIaRPa9LmdDcFOzP63HsZAvjgvBj92f4_o7q5Zt0iE6Ycyr2aIbPnSc4_GqlFIszWp45rsx7Nr9Wp-p-mzkdPShlUFKWi5m_7tTAeMEnNMSk38YZiXln7bzX2RUQsJqdHUJYwE5RDQCyyIQtqZyNrdE0kdcCfq-ZNUIms48K9YO9oTK3P3-dWi2Kp7CgcnRF1o_IimHVtyHF0_OL5ew-E2mOvMhF9v2BJYdntHE0BJd1w7I65jHkXimr-4DSYn8pW6yZGUfESRE15v4SCDVVRC6w2EfiJEiIVx5DfYN1gsl_whiJswoJRoIq4AL6luHRFY3SN4jijIPakzS27XpjLPBSYuta2Of-6q57c5=w443-h573-no?authuser=0"></img>
          </Col>
        </Row>
      </Container>
      </Carousel.Item>

      <Carousel.Item className="Item">
      <Container>
        <Row>
          <Col sm={6}>
            <div>
              <h1>
                Simon Game
              </h1>
              <p>
                Static website using JQuery to make the logic of the game and Bootstrap in order to style how the game looks. Simon game is a simple game 
                in which the user has to follow a certain pattern that is given ramdomly and the user loses once they failed to follow the pattern
              </p>
            </div>
              
          </Col>
          <Col sm={6} className = "Image">
            <img src="https://lh3.googleusercontent.com/CfB78A4W5rXIfmdOCBlOUDy1GGlz27AzS3RbWxgmDc8Y_7S4DpQGxUSV0nDRmiLP-0TfAYhhr1wNN5uf7wCK9bGx6IPoDufmK7mvzW9zGTrmB9mBbqtvpHzNk35h6fUbBMw-YhNNS3zdtQC0b0AHilYp1rSlOvd8el6WtF7No8MjVvRV5Y_g5ZtUJGwHfOQrgSUnPZIISD4DkGL-_rS5Oix6_eXGnix9tVMtkOOSHLlrNy5vS8K4Lcc98XfBtrYIvO-QLWHzZyda8lP0-B3lEJI8SK4iQztFONXVzRwp1zWMehAnc93Vo4RU5hrnDIdpd7gFZpsoXEPFY0rKVRexjT8NQ8Sn4XYA4wgx4lUT-84le1fP4zsaxteM_X8L3KP4G9mHxiETLSd0Y3K1ogU361xqQ2cnSUUV1hVR4QQmV2iRSd2P3u66yGswYyNia1iVMM2-CfgN1p9m4vVlA6RN4VOD676cDatsZiGeJc2E9WAYrpyOgQjOH3STH7dIFCjHgddh6HQJ234E2U9os-ZjKskAG1IZrHxxit_LtiycKaSwGeBCBz0PBAu_-t4mChUtZKPSIUE7LBKxcxrlHzZC9_5aYZn3paod-RuXJd7qo0Xvmy8AcJ_ICioyzmq8JaSwn7McShHTv93QlZyiOYcs5lPCbqRvDvQd4MuFyu--SeQWg__Jv6R0nIJdU-CG=w1673-h903-no?authuser=0"></img>
          </Col>
        </Row>
      </Container>
      </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Projects;