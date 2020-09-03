import React from 'react';

const SeachBox = ({searchfield, searchChange}) => {
    return (
        <div className="pa2">
            <input 
                type="seach" 
                placeholder="search robots" 
                className="pa3 ba b--green bg-lightest-blue"
                onChange={searchChange}
            />
        </div>
        
    );
}
export default SeachBox;