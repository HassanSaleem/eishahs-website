import {Fade, Container, Col, Row} from 'react-bootstrap'

function Contact() {
    return (
      <Fade in={true} appear={true}>

        <div className="contact">
          <div className="title">Contact Me</div>
          <br/>
          <p>Eishah Tariq</p>
          <p>07909010070</p>
          <p>eishahtariq@gmail.com</p>
          <br/>
          <Container  className="social-icons">
          <Row className="justify-content-md-center">
              <Col xs={4}>
              <a href="https://www.instagram.com/hennabyeishah/" target="_blank">
                <img src="logos/instagram logo_icon.png"/>
                </a>
              </Col>
              <Col xs={4}>
              <a href="https://wa.me/447872607485" target="_blank">
                <img src="logos/whatsapp logo_icon.png"/>
              </a>
              </Col>
              <Col xs={4}>
              <a href="mailto:eishahtariq@gmail.com" target="_blank">
                <img src="logos/gmail_mail_logo_social_icon.png"/>
                </a>
              </Col>
            </Row>
          </Container>
        </div>
      </Fade>
      );
}

export default Contact