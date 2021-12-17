import React from 'react';
import '../styles/Clock.css';

// this is just a simple component that tells the time for the users convenience
// will be displayed at the bottom of the home screen
function Clock(){
    return (
        <div className="clock-container">
            <div className="clock-actual">
                <p>{new Date().toLocaleTimeString()}</p>
            </div>
        </div>
    );
}

export default Clock;