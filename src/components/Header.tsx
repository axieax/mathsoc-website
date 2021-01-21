import React from 'react';
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import Button from './Button'
import './Header.scss'

interface NavItemProps {
    link: string;
    children?: any;
}

const NavLinkStyle = {
    textDecoration: 'none',
    color: '#1b1840',
}

function NavItem(props: NavItemProps) {
    return (
        <div className="NavItem">
            <Link to={props.link} style={NavLinkStyle}>
                {props.children}
            </Link>
        </div>
    );
} 


function Header() {
    return (
        <header>
            <div className="logo">
                <Link to='/'>
                    <img src={logo} alt='MathSoc Logo'/>
                </Link>
            </div>
            <nav>
                <NavItem link='/events'>Events</NavItem>
                <NavItem link='/sponsors'>Sponsors</NavItem>
                <NavItem link='/resources'>Resources</NavItem>
                <NavItem link='/quiz'>Weekly Questions</NavItem>
                <NavItem link='/contact'>
                    <Button>Contact Us</Button>
                </NavItem>
            </nav>
        </header>
    )
}

export default Header;
