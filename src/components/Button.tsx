import React from 'react';
import './Button.scss';

interface ButtonProps {
    onClick?: any; // function
    children?: any;
    style?: object;
    className?: string;
}

function Button(props: ButtonProps) {
    return (
        <button className={props.className} style={props.style} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button;
