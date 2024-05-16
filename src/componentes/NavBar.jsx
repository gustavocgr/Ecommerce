import { Container, Nav, Navbar } from "react-bootstrap";
import { GerenciarLogin } from "./GerenciarLogin"; 


function NavBar(props) {
  return (
    <Container>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/home">E-Commerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/produto">Produto</Nav.Link>
          </Nav>


          <Navbar.Collapse className="justify-content-end">

            <Navbar.Text>
              <GerenciarLogin />
            </Navbar.Text>
          </Navbar.Collapse>

        </Container>
      </Navbar>
      <div style={{ marginTop: "100px" }}>{props.children}</div>
    </Container>
  );
}

export default NavBar;


{/* <nav class="navbar navbar-expand-lg navbar-dark bg-fixed-top">
<div class="container-fluid">
  <a class="navbar-brand" href="index.html">
    <img id="logo" src="img/DigisystemLogo.png" alt="logoDigisystem">
  </a>

  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-link" id="home-menu" href="#">Home</a>
      <a class="nav-link" id="empresa-menu" href="#">A Empresa</a>
      <a class="nav-link" id="produtos-menu" href="#">Produtos</a>
      <a class="nav-link" id="suporte-menu" href="#">Suporte</a>
      <a class="nav-link" id="parceiros-menu" href="#">Parceiros</a>
      <a class="nav-link" id="contato-menu" href="#">Contato</a>
    </div>
  </div>
</div>
</nav> */}