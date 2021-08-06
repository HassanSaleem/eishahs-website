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

export default Contact