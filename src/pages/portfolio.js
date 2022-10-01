import React, { useState } from 'react';
import {Fade, Container, Col, Row, Modal} from 'react-bootstrap'



function Portfolio() {

  const [show, setShow] = useState(false);
  const [modalImage, setModalImage] = useState(0)

  const handleClose = () => setShow(false);
  const handleShow = (img) => {
    setModalImage(img)
    setShow(true);
    console.log(modalImage)
  }
  const imgLayout = [[1,2,3],[4,5],[6,7,8]]


  return  <Fade in={true} appear={true}>

      <div className="portfolio">
        <div className="title">Portfolio</div>
        <br/>
        <Container className="gallery">
          {imgLayout.map(row => {
            return <Row>
              {row.map(col => {
                return <Col >
                <div className="portfolioCol" onClick={() => handleShow(col)}>
                <img src={"images/IMG_portfolio".concat(col, "-min.jpg")} alt=""/>
                </div>
                </Col>
              })}
            </Row>
          })}
        </Container>
        <Modal show={show} onHide={handleClose} dialogClassName="portfolioModal">
          <Modal.Header closeButton />
          <Modal.Body>
            <img src={"images/IMG_portfolio".concat(modalImage, "-min.jpg")} alt=""/>
          </Modal.Body>
        </Modal>
      </div>

    </Fade>
    
}

export default Portfolio