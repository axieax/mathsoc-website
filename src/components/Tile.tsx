import React from 'react';
import './Tile.scss';

interface TileProps {
    img: any,
    title: string,
}

export default function Tile(props: TileProps) {
    return (
        <div className="Tile">
            <img src={props.img} alt={props.title}/>
            <div className="caption">
                <p>{props.title}</p>
            </div>
        </div>
    )
}
