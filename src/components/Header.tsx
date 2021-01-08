import React from 'react';
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import Button from './Button'
import './Header.scss'

interface NavItemProps {
    link: string;
    value: string | object;
}

const NavLinkStyle = {
    textDecoration: 'none',
    color: '#1b1840',
}

function NavItem(props: NavItemProps) {
    return (
        <div className="NavItem">
            <Link to={props.link} style={NavLinkStyle}>
                {props.value}
            </Link>
        </div>
    );
} 


class Header extends React.Component {
    render() {
        return (
            <>
            <header>
                <Link to='/'>
                    <img src={logo} alt='MathSoc Logo'/>
                </Link>
                <nav>
                    <NavItem key='NavEvents' link='/events' value='Events'/>
                    <NavItem link='/sponsors' value='Sponsors'/>
                    <NavItem link='/resources' value='Resources'/>
                    <NavItem link='/quiz' value='Weekly Questions'/>
                    <NavItem link='/contact' value={<Button value='Contact Us'/>}/>
                </nav>
            </header>
            </>
        );
    }
}


export default Header;
