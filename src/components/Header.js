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

function Header(props) {

    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    return(
    <div>
        <Navbar className='navStyle' sticky='top' expand='md' color='light'>
            <NavbarBrand href="/">
                <img src={NZLogo} alt='Expressenz logo' className='logo' />
            </NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="me-2" />
            <Collapse isOpen={!collapsed} navbar>
                <Nav className='ms-auto' navbar>
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
                        <NavLink className='nav-link' to='/tap'>
                            Tap
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/ballet'>
                            Ballet
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/musicaltheater'>
                            Musical Theater
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/hiphop'>
                            Hip Hop
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/solo'>
                            Solo/Duo/Trio
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>

        <Row className='headerRow'>
            <h1>Expressenz Booster Club Costume Resale</h1>
        </Row>
    </div>

    );
}

export default Header
