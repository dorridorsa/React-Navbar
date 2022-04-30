import logo from './logo.png';
import './App.css';
import { Navbar,Nav,Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      
      

        <>
  <Navbar bg="light" variant="light">
    <Container>
    <img src={logo} className="App-logo" alt="logo" />
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About me</Nav.Link>
      <Nav.Link href="#portfolio">Portfolio</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
<br></br>
<br></br>
<p> 
Welcome to my hobby project!
</p>
    </div>
  );
}


export default App;
