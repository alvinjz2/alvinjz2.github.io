import React from 'react';

const TimelineItem = ({ year, title, subtitle, dateRange, logo }) => {
    const lines = subtitle.split('\n');

    return (
        <div className="timeline-item">
            <div className="timeline-year">{year}</div>
            {/* ✨ Modified: The line is replaced by a dot */}
            <div className="timeline-dot"></div>
            <div className="timeline-content card">
                <div className="timeline-text">
                    <h2>{title}</h2>
                    {lines.map((line, index) => (
                        <h3 key={index} className={index > 0 ? 'smaller-subtitle' : ''}>
                            {line}
                        </h3>
                    ))}
                    {/* <h3>{subtitle}</h3> */}
                    <p>{dateRange}</p>
                </div>
                <div className="timeline-logo">
                    <img src={logo} alt={`${subtitle} logo`} />
                </div>
            </div>
        </div>
    );
};

export default TimelineItem;