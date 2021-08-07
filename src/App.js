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
          <a>Mehndi by Eishah</a>
        </div>

        <Route exact path="/" render={Home}/>
        <Route exact path="/Services" render={Services}/>
        <Route exact path="/portfolio" render= {() => <Portfolio />}/>
        <Route exact path="/contact" render={Contact}/>

    </Router>
    
    </div>
  );
}

export default App;
