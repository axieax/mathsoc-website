import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../components/Button';
import Banner from '../components/Banner';
import './Home.scss'
import tft from '../assets/tft.jpg';
import tile from '../assets/tile.png';
import Tile from '../components/Tile';

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



function EventsBox() {
    const leftBanner = {
        category: 'Event Attendance',
        panels: [(
        <>
            <div className="title">
                <h2>Joining us for an event?</h2>
            </div>
            <div className="description">
                <p>Please confirm your attendance by clicking the button below :)</p>
            </div>
            <div className="action">
                <Link to='/events/register'>
                    <Button>Confirm Attendance</Button>
                </Link>
            </div>
        </>
        )],
    };

    const middleBanner = {
        category: 'Upcoming Events',
        panels: [(
        <>
            <div className="title">
                <h2>MathSoc x Esports Club TFT Tournament + Casual Games</h2>
            </div>
            <img src={tft} alt='tft'/>
            <div className="description">
                <p>Exams coming up and feeling those sadboi hours hit 🤧🤧? Looking for a place to show off those TFT skills that costed you your WAM🤓🤓? Or just want to have a fun night of games with mates?</p>
                <p>UNSW Mathsoc and Esports Club are proud to present the Casual Team Fight Tactics Tournament to help you smash through that quarantine boredom 😍😍😍😍</p>
            </div>
            <div className="action">
                <Link to='/events'>
                    <Button>Learn More</Button>
                </Link>
            </div>
        </>
        ), (
        <>
            <div className="title">
                <h2>Event Number 2</h2>
            </div>
            <div className="description">
                <p>TODO: add swipe gestures</p>
            </div>
            <div className="action">
                <Button>Learn More</Button>
            </div>
        </>
        )],
    };

    const rightBanner = {
        category: 'Announcement',
        panels: [(
        <>
            <div className="title">
                <h2>Join our Discord server!</h2>
            </div>
            <div className="description">
                <p>Join our community Discord server to keep up to date with our events and connect with other MathSoc members!</p>
            </div>
            <div className="action">
                <a href='https://discord.com/invite/Y7FFXxh' target="_blank" rel="noopener noreferrer">
                    <Button>Join Now</Button>
                </a>
            </div>
        </>
        )],
    };

    return (
        <div className="EventsBox">
            <Banner info={leftBanner}/>
            <Banner info={middleBanner}/>
            <Banner info={rightBanner}/>
        </div>
    );

}


function StudentBox() {
    // NOTE: Tile images need to be of constant dimensions, e.g. 300x400px
    return (
        <div className="StudentBox">
            <div className="studentHub">
                <h2>Student Hub</h2>
                <div className="studentBoxes">
                    <Link to="/events">
                        <Tile title={'Events'} img={tile}/>
                    </Link>
                    <Link to="/resources">
                        <Tile title={'Resources'} img={tile}/>
                    </Link>
                    <Link to="/quiz">
                        <Tile title={'Weekly Questions'} img={tile}/>
                    </Link>
                </div>
            </div>
            <div className="formBox">
                <h2>Form</h2>
            </div>
        </div>
    );
}

function SponsorBox() {
    return (
        <div className="SponsorBox">
            <h2>Our Sponsors</h2>
        </div>
    );
}



function Home() {
    return (
        <div className="Home">
            <Hero/>
            <EventsBox/>
            <StudentBox/>
            <SponsorBox/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus, erat consectetur varius bibendum, dui leo imperdiet urna, a pellentesque nibh mi non felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque euismod nisi et nisi ultrices, non elementum nisl iaculis. Pellentesque non pharetra orci, id suscipit nisl. Donec in est consectetur, sagittis est in, fermentum massa. Proin tristique scelerisque tincidunt. Phasellus ultrices ipsum consectetur, ultricies enim in, rutrum ligula. Praesent tincidunt, justo eu faucibus scelerisque, erat dui tincidunt lectus, vel commodo sem libero id turpis. Praesent at nisi vulputate purus tempus tristique.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus, erat consectetur varius bibendum, dui leo imperdiet urna, a pellentesque nibh mi non felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque euismod nisi et nisi ultrices, non elementum nisl iaculis. Pellentesque non pharetra orci, id suscipit nisl. Donec in est consectetur, sagittis est in, fermentum massa. Proin tristique scelerisque tincidunt. Phasellus ultrices ipsum consectetur, ultricies enim in, rutrum ligula. Praesent tincidunt, justo eu faucibus scelerisque, erat dui tincidunt lectus, vel commodo sem libero id turpis. Praesent at nisi vulputate purus tempus tristique.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus, erat consectetur varius bibendum, dui leo imperdiet urna, a pellentesque nibh mi non felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque euismod nisi et nisi ultrices, non elementum nisl iaculis. Pellentesque non pharetra orci, id suscipit nisl. Donec in est consectetur, sagittis est in, fermentum massa. Proin tristique scelerisque tincidunt. Phasellus ultrices ipsum consectetur, ultricies enim in, rutrum ligula. Praesent tincidunt, justo eu faucibus scelerisque, erat dui tincidunt lectus, vel commodo sem libero id turpis. Praesent at nisi vulputate purus tempus tristique.</p>
        </div>
    );
}

export default Home;
