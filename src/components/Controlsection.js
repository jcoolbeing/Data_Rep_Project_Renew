import React from 'react';
import Button from 'react-bootstrap/Button';

// this component acts as navigation
// new entry button directs you to new page  where you can make a entry
// and home returns you to homescreen
function Controlsection(){
    return (
        <div className="control-container">
            <div className="controls">
                <Button href="/add" variant="success" size="lg"onclick="">New Journal Entry</Button>
            </div>
        </div>
    );
}

export default Controlsection;