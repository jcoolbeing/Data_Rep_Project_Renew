import React from 'react';
import Button from 'react-bootstrap/Button';
import '../styles/Add.css';

// i added a button on the top to take the user back to the home page and
//I tried to use onAddEntry to change the state of my current entry
function Add({onAddEntry}){
    return(
        <div className="add-container">
            <div className="add-top">
                <Button href="/" size="lg" variant="success">Home</Button>
            </div>
            <div className="add-title">
                <textarea placeholder="Title" className="add-entry-titlefield"/>
            </div>
            <div className="add-entry">
                <textarea className="add-entry-field" placeholder="Entry"/>
            </div>
            <div className="add-controls">
                <Button onclick="onAddEntry">Enter</Button>
                <Button href="/">Cancel</Button>
            </div>
        </div>
    );
}

export default Add;