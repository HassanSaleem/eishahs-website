import { Carousel, Fade, Container, Col, Row } from 'react-bootstrap';
function Home() {
    const homeImages = [1,2,3];
    return (
      <Fade in={true} appear={true}>
      <div className="home">

        <br/>
        <div className="homeCarousel">
        <Carousel variant="dark">
        {homeImages.map(img => {
          return <Carousel.Item>
                  <img
                    className="mx-auto"
                    src={"images/IMG_home".concat(img, ".jpg")}
                    alt="First slide"
                  />
                </Carousel.Item>
        })}
          </Carousel>
          </div>
          <br />
          <table   className="social-icons">
          <tr className="md-center">
              <th>
              <a href="https://www.instagram.com/hennabyeishah/" target="_blank">
                <img src="logos/instagram logo_icon.png"/>
                </a>
              </th>
              <th>
              <a href="https://wa.me/447909010070" target="_blank">
                <img src="logos/whatsapp logo_icon.png"/>
              </a>
              </th>
              <th>
              <a href="mailto:eishahtariq@gmail.com" target="_blank">
                <img src="logos/gmail_mail_logo_social_icon.png"/>
                </a>
              </th>
            </tr>
          </table>
        </div>
        </Fade>
      );
}


export default Home