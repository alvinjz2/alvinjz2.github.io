import React from 'react';
import TimelineItem from './TimelineItem';
import { timelineData } from './data';
import './Timeline.css';

const Timeline = () => {
    let lastYear = null;

    return (
        <div className="timeline-container">
            {/* ✨ New: This div is the continuous vertical line */}
            <div className="timeline-continuous-line"></div>

            {/* This div will hold all the timeline items */}
            <div className="timeline-items-wrapper">
                {timelineData.map((item, index) => {
                    const showYear = item.year !== lastYear;
                    lastYear = item.year;
                    return (
                        <TimelineItem
                            key={index}
                            year={showYear ? item.year : ''}
                            title={item.title}
                            subtitle={item.subtitle}
                            dateRange={item.dateRange}
                            logo={item.logo}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Timeline;