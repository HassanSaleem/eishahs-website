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
        </div>
      </Fade>
      );
}

export default Contact