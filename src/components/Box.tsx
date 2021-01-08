import React, {useState} from 'react';
import Button from './Button';


interface ViewProps {
    category: string;
    title: string;
    description: string;
    link: string;
    buttonText: string;
}

interface BannerProps {
    info: Array<ViewProps>;
}

function Banner(props: BannerProps) {
    const numViews = props.info.length;
    const [activeView, setActiveView] = useState(0);
    const currView = props.info[activeView];
    const multipleViews = (numViews > 1);
    
    return (
        <>
        {multipleViews && (
            <button onClick={() => setActiveView((activeView - 1 + numViews) % numViews)}>
                Left
            </button>
        )}
        <h4>{currView.category}</h4>
        <h2>{currView.title}</h2>
        <p>{currView.description}</p>
        <a href={currView.link}>
            <Button value={currView.buttonText}/>
        </a>
        {multipleViews && (
            <button onClick={() => setActiveView((activeView + 1) % numViews)}>
                Right
            </button>
        )}
        {multipleViews && (
            <p>{activeView} / {numViews}</p>
        )}
        </>
    );
}


export default Banner;

