import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../components/Button';
import Banner from '../components/Box';
import './Home.scss'

function Hero() {
    return (
        <div className='Hero'>
            <div className="welcome">
                <h1>Welcome to UNSW Mathematics Society!</h1>
            </div>
            <div className="statbox">
                <div className='HeroStat'>
                    <h2>1234</h2>
                    <h3>Members</h3>
                    <Link to='/about'>
                        <Button>Learn more about us</Button>
                    </Link>
                </div>
                <div className='HeroStat'>
                    <h2>1234</h2>
                    <h3>Facebook Likes</h3>
                    <a href='https://www.facebook.com/unswmathsoc' target='_blank' rel='noreferrer'>
                        <Button>Like us on Facebook</Button>
                    </a>
                </div>
            </div>
        </div>
    );
}


class Home extends React.Component {
    render() {
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
            // newlines don't work
            description: 'Exams coming up and feeling those sadboi hours hit 🤧🤧? Looking for a place to show off those TFT skills that costed you your WAM🤓🤓? Or just want to have a fun night of games with mates? UNSW Mathsoc and Esports Club are proud to present the Casual Team Fight Tactics Tournament to help you smash through that quarantine boredom 😍😍😍😍',
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
            <Hero/>
            <div className="EventsBox">
                <Banner info={leftBanner}/>
                <Banner info={middleBanner}/>
                <Banner info={rightBanner}/>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus, erat consectetur varius bibendum, dui leo imperdiet urna, a pellentesque nibh mi non felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque euismod nisi et nisi ultrices, non elementum nisl iaculis. Pellentesque non pharetra orci, id suscipit nisl. Donec in est consectetur, sagittis est in, fermentum massa. Proin tristique scelerisque tincidunt. Phasellus ultrices ipsum consectetur, ultricies enim in, rutrum ligula. Praesent tincidunt, justo eu faucibus scelerisque, erat dui tincidunt lectus, vel commodo sem libero id turpis. Praesent at nisi vulputate purus tempus tristique.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus, erat consectetur varius bibendum, dui leo imperdiet urna, a pellentesque nibh mi non felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque euismod nisi et nisi ultrices, non elementum nisl iaculis. Pellentesque non pharetra orci, id suscipit nisl. Donec in est consectetur, sagittis est in, fermentum massa. Proin tristique scelerisque tincidunt. Phasellus ultrices ipsum consectetur, ultricies enim in, rutrum ligula. Praesent tincidunt, justo eu faucibus scelerisque, erat dui tincidunt lectus, vel commodo sem libero id turpis. Praesent at nisi vulputate purus tempus tristique.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus, erat consectetur varius bibendum, dui leo imperdiet urna, a pellentesque nibh mi non felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque euismod nisi et nisi ultrices, non elementum nisl iaculis. Pellentesque non pharetra orci, id suscipit nisl. Donec in est consectetur, sagittis est in, fermentum massa. Proin tristique scelerisque tincidunt. Phasellus ultrices ipsum consectetur, ultricies enim in, rutrum ligula. Praesent tincidunt, justo eu faucibus scelerisque, erat dui tincidunt lectus, vel commodo sem libero id turpis. Praesent at nisi vulputate purus tempus tristique.</p>
            </>
        );
    }
}

export default Home;
