import React from "react";
import FlipCountdown from '@rumess/react-flip-countdown';
import "../FilpClock.css"

class CountdownTimer extends React.Component {
    render() {
        return (
            <FlipCountdown
                endAt={'2024-01-31 23:59:59'}
                size="medium"
                theme="dark"
                titlePosition="top"
                yearTitle="Year"
                monthTitle="Months"
                dayTitle="Days"
                hourTitle="Hours"
                minuteTitle="Minutes"
                secondTitle="Seconds"
                hideYear
                onTimeUp={() => console.log("Time's up ⏳")}
            />
        );
    }
}
export default CountdownTimer;
