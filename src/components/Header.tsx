import React from 'react';
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import Button from './Button'

class Header extends React.Component {
    render() {
        return (
            <>
            <Link to='/'>
                <img src={logo} alt='MathSoc Logo'/>
            </Link>
            <Link to='/about'>
                About
            </Link>
            <Link to='/events'>
                Events
            </Link>
            <Link to='/sponsors'>
                Sponsors
            </Link>
            <Link to='/resources'>
                Resources
            </Link>
            <Link to='/quiz'>
                Weekly Questions
            </Link>
            <Link to='/contact'>
                <Button value='Contact Us'/>
            </Link>
            </>
        );
    }
}


export default Header;
