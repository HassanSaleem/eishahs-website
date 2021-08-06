import { Carousel, Fade, Container, Col, Row } from 'react-bootstrap';
function Home() {
    const homeImages = [1,2,3];
    return (
      <Fade in={true} appear={true}>
      <div className="home">

        <br/>
        <Carousel variant="dark">
        {homeImages.map(img => {
          return <Carousel.Item>
                  <img
                    className="d-block mx-auto w-75"
                    src={"images/IMG_home".concat(img, ".jpg")}
                    alt="First slide"
                  />
                </Carousel.Item>
        })}
          </Carousel>
          <br />
          <Container  className="social-icons">
          <Row className="justify-content-md-center">
              <Col xs={4}>
              <a href="https://www.instagram.com/hennabyeishah/" target="_blank">
                <img src="logos/instagram logo_icon.png"/>
                </a>
              </Col>
              <Col xs={4}>
              <a href="https://wa.me/447909010070" target="_blank">
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


export default Home