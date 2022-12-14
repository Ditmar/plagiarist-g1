import React from "react";
import "./Cards.css"
export const Card = ({name, title, number}) => {
    return <div name={name} className="card" >
        <div className="card-body">
            <p className='card-title'>{title}</p>
            <p className='card-text'>{number}</p>
        </div>
    </div>
}