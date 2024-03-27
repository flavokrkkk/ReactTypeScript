import { FC } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar: FC = () => {
    return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" style={{marginBottom: '50px'}}>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto" style={{display: 'flex', gap: 20, marginLeft: 30}}>
            <NavLink to='/users' style={{textDecoration: 'none', color: '#fff'}}>Users</NavLink>
            <NavLink to='/todos' style={{textDecoration: 'none', color: '#fff'}}>Todos</NavLink>
            <NavLink to='/drag' style={{textDecoration: 'none', color: '#fff'}}>DragOnDrop</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
    );
};

export default NavBar;