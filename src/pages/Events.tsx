import React from 'react';
import { Link } from 'react-router-dom';
import Tile from '../components/Tile';
import tile from '../assets/tile.png';
import './Events.scss';

export default function Events() {
    return (
        <div className="Events">
            <div className="bodyContainer">
                <div className="eventsContainer">
                    <Link to="/events/register">
                        <Tile title={'Event Attendance'} img={tile}/>
                    </Link>
                    <Link to="/events/upcoming">
                        <Tile title={'Upcoming Events'} img={tile}/>
                    </Link>
                    <Link to="/events/previous">
                        <Tile title={'Previous Events'} img={tile}/>
                    </Link>
                </div>
            </div>
        </div>
    );
}
