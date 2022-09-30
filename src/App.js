import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import './bootstrap.min.css'
import Home from './pages/home'
import Portfolio from './pages/portfolio'
import Contact from './pages/contact'
import Services from './pages/services'
import Artist from './pages/artist'

import {Navbar, Container, Nav} from 'react-bootstrap'



function App() {

  return (
    <div className="App">

         <Router>

         <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/artist">Artist</Nav.Link>
            <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <div className="headerWrapper">
          <img src="logos/logo.png" className="header" />
          <br />
          <a style={{fontFamily:'Pacifico'}}>Henna by Eishah</a>
        </div>

        <Route exact path="/" render={Home}/>
        <Route exact path="/Services" render={Services}/>
        <Route exact path="/portfolio" render= {() => <Portfolio />}/>
        <Route exact path="/contact" render={Contact}/>
        <Route exact path="/artist" render={Artist}/>


    </Router>
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
  );
}

export default App;
