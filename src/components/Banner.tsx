import React, { useState } from 'react';
import Button from './Button';
import './Banner.scss';

function ViewBar({activeView, panels, setActiveView} : {activeView: number, panels: Array<any>, setActiveView: Function}) {
    return (
        <div className="ViewBar">
            {panels.map((panel, index) => {
                return (
                    (index === activeView) ? (
                        <i className="fas fa-circle"/>
                    ) : (
                        <i className="far fa-circle" onClick={() => setActiveView(index)}/>
                    )
                );
            })}
        </div>
    );
}


interface BannerInfo {
    category: string,
    panels: Array<any>,
}

function Banner({info}: {info: BannerInfo}) {
    const numViews = info.panels.length;
    const [activeView, setActiveView] = useState(0);

    return (
        <div className="Banner">
            {numViews > 1 &&
                <Button className='bannerSide' onClick={() => setActiveView((activeView - 1) % numViews)}>
                    &lt;
                </Button>
            }
            <div className="content">
                <div className="category">
                    <h4>{info.category}</h4>
                </div>
                {info.panels[activeView]}
                {numViews > 1 && <ViewBar activeView={activeView} panels={info.panels} setActiveView={setActiveView}/>}
            </div>
            {numViews > 1 &&
                <Button className='bannerSide' onClick={() => setActiveView((activeView + 1) % numViews)}>
                    &gt;
                </Button>
            }
        </div>
    );
}

export default Banner;
