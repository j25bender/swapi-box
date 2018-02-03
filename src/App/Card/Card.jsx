import React from 'react';
import './Card.css'

const Card = (props) => {
    if(props.data) {
        const renderCards = Object.entries(props.data.info).map( (entry, index) => <h6 key={index}>{entry[0]}:  <span>{entry[1]}</span></h6> )
        return (
            <div className="card">{ renderCards }</div>
        )
    }
}

export default Card