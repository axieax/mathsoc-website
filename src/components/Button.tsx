import React from 'react';
import './Button.scss';

interface ButtonProps {
    value: string;
}

function Button(props: ButtonProps) {
    return (
        <button type='button' className='Button'>
            {props.value}
        </button>
    )
}

export default Button;
