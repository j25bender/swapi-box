import React from 'react';

const Card = (props) => {
    if(props.data) {
        const renderCards = Object.entries(props.data).map( entry => <h6>{entry[0]}:  <span>{entry[1]}</span></h6> )
        return (
            <div className="card">{ renderCards }</div>
        )
    }
}

export default Card