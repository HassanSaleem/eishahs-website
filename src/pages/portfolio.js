import React, { useState } from 'react';
import {Fade, Container, Col, Row, Button, Modal} from 'react-bootstrap'



function Portfolio() {

  const [count, setCount] = useState(0);

  return     <Fade in={true} appear={true}>

      <div className="portfolio">
        <div className="title">Portfolio</div>
        <br/>

      </div>

    </Fade>
    
}

export default Portfolio