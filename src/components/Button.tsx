import React from 'react';
import './Button.scss';

interface ButtonProps {
    onClick?: any; // function
    children?: any;
}

function Button(props: ButtonProps) {
    return (
        <button onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button;
