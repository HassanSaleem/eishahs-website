import { Carousel, Fade } from 'react-bootstrap';
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
                  <div className="imgParent">                  
                  <img
                    className="mx-auto"
                    src={"images/IMG_home".concat(img, ".jpg")}
                    alt="First slide"
                  />
                  </div>

                </Carousel.Item>
        })}
          </Carousel>
          </div>
        </div>
        </Fade>
      );
}


export default Home