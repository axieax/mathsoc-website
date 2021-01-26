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
    // textDecoration: 'none',
    color: '#1b1840',
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
                <ul>
                    <li>
                        <Link to={'/events'}>Events</Link>
                    </li>
                    <li>
                        <Link to={'/sponsors'}>Sponsors</Link>
                    </li>
                    <li>
                        <Link to={'/resources'}>Resources</Link>
                    </li>
                    <li>
                        <Link to={'/quiz'}>Weekly Questions</Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>
                            <Button>Contact Us</Button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
