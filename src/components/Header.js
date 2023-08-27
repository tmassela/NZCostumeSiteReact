import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import NZLogo from '../app/assets/img/NZLogo.png';
import { Row } from 'reactstrap';

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return(
    <>
        <Navbar className='navStyle' sticky='top' expand='md' color='light'>
            <NavbarBrand href='/'>
                <img src={NZLogo} alt='Expressenz logo' className='logo' />
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/jazz'>
                            Jazz
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/lyrical'>
                            Lyrical
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/contact'>
                            Contact
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
            </Navbar>
            <Row className='headerRow'>
                <h3>Expressenz Booster Club Costume Resale</h3>
            </Row>
    </>

    );
}

export default Header
