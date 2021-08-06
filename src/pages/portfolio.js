import {Fade, Container} from 'react-bootstrap'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

import { Gallery, Item } from 'react-photoswipe-gallery'

function Portfolio() {

    const imageCount = [1,2,3];

    return (
      <Fade in={true} appear={true}>

        <div className="portfolio">
          <div className="title">Portfolio</div>
          <br/>
          <Gallery>
            {imageCount.map(img => {
              return     <Item
              original={"images/IMG_home".concat(img, ".jpg")}
              thumbnail={"images/IMG_home".concat(img, ".jpg")}
              width="810"
              height="400"
            >
              {({ ref, open }) => (
                <img ref={ref} onClick={open} src={"images/IMG_home".concat(img, ".jpg")} />
              )}
            </Item>
            })}
          </Gallery>
        </div>

      </Fade>
      );
}

export default Portfolio