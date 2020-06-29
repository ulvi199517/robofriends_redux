import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY:'scroll',border:'1px solid lightblue',height:'670px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;