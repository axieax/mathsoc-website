import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../components/Button';
import Banner from '../components/Box';

function Hero() {
    const leftBanner = [{
        category: 'Event Attendance',
        title: 'Joining us for an event?',
        description: 'Please confirm your attendance by clicking the button below :)',
        link: '/events',
        buttonText: 'Confirm Attendance'
    }]

    const middleBanner = [{
        category: 'Upcoming Events',
        title: 'MathSoc x Esports Club TFT Tournament + Casual Games',
        description: 'asdfsadfasdfasd',
        link: '/events',
        buttonText: 'Learn More'
    }, {
        category: 'Upcoming Events',
        title: 'Event Number 2',
        description: 'aaaaaaaaaaa',
        link: '/events',
        buttonText: 'Learn More'
    }]

    const rightBanner = [{
        category: 'Announcement',
        title: 'We have a new Discord server!',
        description: 'Join our community Discord server to keep up to date with our events and connect with other MathSoc members!',
        link: 'https://www.discord.gg',
        buttonText: 'Join Now'
    }]
    
    
    return (
        <>
        <h1>Welcome to UNSW Mathematics Society!</h1>
        <div>
            <h2>1234</h2>
            <h3>Members</h3>
            <Link to='/about'>
                <Button value='Learn more about us'/>
            </Link>
        </div>
        <div>
            <h2>1234</h2>
            <h3>Facebook Likes</h3>
            <a href='https://www.facebook.com/unswmathsoc'>
                <Button value='Like us on Facebook'/>
            </a>
        </div>
        <Banner info={leftBanner}/>
        <Banner info={middleBanner}/>
        <Banner info={rightBanner}/>
        </>
    );
}


class Home extends React.Component {
    render() {
        return (
            <Hero/>
        );
    }
}

export default Home;
