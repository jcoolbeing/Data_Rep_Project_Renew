import React from 'react';
import '../styles/Entrylist.css';

//intended to add a x close button for each entry displayed on the list that would let me delete the matching entry
// this component is there to display the number of entries and the entries themself
function Entrylist(){
    return (
        <div className="home">
        <div className="entrylist-container">
            <div className="number-of-entries">
                <h4># of Entries: </h4>
             </div>
             <div className="entries-list">
                <div className="entries">
                </div>
             </div>
             </div>
        </div>
    );
}

export default Entrylist;