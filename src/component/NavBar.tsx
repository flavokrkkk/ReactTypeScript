import { FC } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar: FC = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
        <Container className=" d-flex justify-content-evenly">
          <Navbar.Brand>BlogApp</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink style={{color: '#fff', marginRight: 20}} to='users'>Пользователи</NavLink>
            <NavLink style={{color: '#fff'}} to='todos'>Посты</NavLink>
          </Nav>
        </Container>
      </Navbar>
    );
};

export default NavBar;