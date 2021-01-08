import React from 'react';

interface ButtonProps {
    value: string;
}

function Button(props: ButtonProps) {
    return (
        <>
            <button type='button'>{props.value}</button>
        </>
    )
}

export default Button;
