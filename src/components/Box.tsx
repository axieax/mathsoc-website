import React, { useState } from 'react';
import Button from './Button';
import './Box.scss';
import { faCircle as solidCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircle as regularCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ViewBarProps {
    activeView: number;
    numViews: number;
    setActiveView: any; // function
}

function ViewBar(props: ViewBarProps) {
    let bar = [];
    for (let i = 0; i < props.numViews; i++) {
        if (i === props.activeView) {
            bar.push(
                <Button onClick={() => props.setActiveView(i)}>
                    <FontAwesomeIcon icon={solidCircle}/>
                </Button>
            );
        } else {
            bar.push(
                <Button onClick={() => props.setActiveView(i)}>
                    <FontAwesomeIcon icon={regularCircle}/>
                </Button>
            );
        }
    }
    return (
        <div className="ViewBar">
            {bar}
        </div>
    );
}



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
    const isFirstPage = (activeView === 0);
    const isLastPage = (activeView === numViews - 1);
    
    return (
        <div className="Banner">
            {multipleViews && (
                <button className='left' onClick={() => setActiveView((isFirstPage) ? activeView : activeView - 1)}>
                    &lt;
                </button>
            )}
            <div className="InfoBox">
                <h4>{currView.category}</h4>
                <h2>{currView.title}</h2>
                <p>{currView.description}</p>
            </div>
            <a href={currView.link}>
                <Button>{currView.buttonText}</Button>
            </a>
            {multipleViews && (
                <button className='right' onClick={() => setActiveView((isLastPage) ? activeView : activeView + 1)}>
                    &gt;
                </button>
            )}
            {multipleViews && (
                <ViewBar activeView={activeView} numViews={numViews} setActiveView={setActiveView}/>
            )}
        </div>
    );
}

export default Banner;
