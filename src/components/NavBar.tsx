import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import Button from './Button';
import './NavBar.scss';

/* DATA */
interface linkObject {
    name: string,
    route: string,
    subpages: Array<subpageObject>,
}

interface subpageObject {
    name: string,
    route: string,
}

const links = [
    {
        name: 'Events',
        route: '/events',
        subpages: [
            {
                name: 'Event Attendance',
                route: '/events/register',
            },
            {
                name: 'Upcoming Events',
                route: '/events/upcoming',
            },
            {
                name: 'Past Events',
                route: '/events/past',
            },
        ]
    },
    {
        name: 'Sponsors',
        route: '/sponsors',
        subpages: [],
    },
    {
        name: 'Resources',
        route: '/resources',
        subpages: [
            {
                name: 'Course Resources',
                route: '/resources/courses',
            },
            {
                name: 'Career Resources',
                route: '/resources/career',
            },
        ]
    },
    {
        name: 'Weekly Questions',
        route: '/quiz',
        subpages: [],
    },
];

const contactItem = {
    name: 'Contact Us',
    route: '/contact',
    subpages: [],
}


/* SUBCOMPONENTS */
function DropdownItem({item, onClick} : {item: subpageObject, onClick: any}) {
    return (
        <li>
            <Link to={item.route} onClick={onClick}>
                {item.name}
            </Link>
        </li>
    );
}


interface navItemProps {
    item: linkObject,
    closeMenu: any,
    className?: string,
}

function NavItem({item, closeMenu, className} : navItemProps) {
    // TODO: desktop hover = expandedMenu
    const isDropdown = (item.subpages.length > 0);
    const [expandedDropdown, setExpandedDropdown] = useState(false);
    const toggleDropdown = () => setExpandedDropdown(!expandedDropdown);
    const closeDropdown = () => setExpandedDropdown(false);
    const closeMenus = () => {
        closeDropdown();
        closeMenu();
    };

    // hover
    const hoverExpand = () => setExpandedDropdown(window.innerWidth >= 860);
    const hoverClose = () => {(window.innerWidth >= 860) && closeMenus()}; // mobile glitchy?

    return (
        <li className={className ? className : "NavItem"} onMouseEnter={hoverExpand} onMouseLeave={hoverClose}>
            <Link to={item.route} onClick={closeMenu}>
                {item.name}
            </Link>
            {isDropdown && <i className='fas fa-caret-down' onClick={toggleDropdown}/>}
            {expandedDropdown && 
                <ul className="dropdown">
                    {item.subpages.map(subItem => {
                        return <DropdownItem item={subItem} onClick={closeMenus}/>;
                    })}
                </ul>
            }
        </li>
    );
}


export default function NavBar() {
    const [expandedMenu, setExpandedMenu] = useState(false);
    const toggle = () => setExpandedMenu(!expandedMenu);
    const closeMenu = () => setExpandedMenu(false);

    const [stuck, setStuck] = useState(false);
    window.addEventListener('scroll', () => setStuck(window.scrollY >= 80));
    const stuckStyle = {
        backgroundColor: 'white',
        boxShadow: '1px 3px 20px 0 rgba(0, 0, 0, 0.25)',
    }

    return (
        <header style={stuck ? stuckStyle : {}}>
            <div className="brand">
                <Link to='/' onClick={closeMenu}>
                    <img src={logo} alt='MathSoc Logo'/>
                </Link>
            </div>
            <div className="menuIcon">
                <i className={expandedMenu ? 'fas fa-times' : 'fas fa-bars'} onClick={toggle}/>
            </div>
            <ul className={expandedMenu ? "navItems expanded" : "navItems"}>
                {links.map(item => {
                    return <NavItem item={item} closeMenu={closeMenu}/>
                })}
                <NavItem className="NavItem contact" item={contactItem} closeMenu={closeMenu}/>
                <li>
                    <Link to='/contact' onClick={closeMenu}>
                        <Button>Contact Us</Button>
                    </Link>
                </li>
            </ul>
        </header>
    );
}

// modal overlay when expanded?
