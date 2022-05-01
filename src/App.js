import logo from './logo.png';
import './App.css';
import { Card,Button,Nav,Navbar,Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <br></br>
     
    
      <>
  <Navbar >
  <img src={logo} className="App-logo" alt="logo" />
    <Container>
    <Nav className="me-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/about">About us</Nav.Link>
      <Nav.Link href="/portfolio">Portfolio</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
       <br></br>
      <br></br>
      <br></br>
      <br></br>
  
<div className="layout"> 
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="imprint-g78037f903_1280.jpg" />
  <Card.Body>
    <Card.Title>About us</Card.Title>
    <Card.Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </Card.Text>
    <Button variant="secondary" href='/about'>Click here</Button>
  </Card.Body>
</Card>

<br></br>
<br></br>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="bottom" src="computer-g214f22efd_1280.jpg" />
  <Card.Body>
    <Card.Title>Portfolio</Card.Title>
    <Card.Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
    </Card.Text>
    <Button variant="secondary" href='/portfolio'>Click here</Button>
  </Card.Body>
</Card>

<br></br>
<br></br>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="bottom" src="contact-us-gf40f0eefe_1280.png" />
  <Card.Body>
    <Card.Title>Contact</Card.Title>
    <Card.Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </Card.Text>
    <Button variant="secondary" href='/contact'>Click here</Button>
  </Card.Body>
</Card>
</div>
    </div>
  );
}


export default App;
