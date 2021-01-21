import React from 'react';
import './Button.scss';

interface ButtonProps {
    children?: any;
}

function Button(props: ButtonProps) {
    return (
        <button type='button' className='Button'>
            {props.children}
        </button>
    )
}

export default Button;
