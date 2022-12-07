import React from "react";
import "./Cards.css"
export const Card = ({name,title, number, handleMouseEnter, control}) => {
    return <div name={name} className="card" onMouseEnter={handleMouseEnter} >
        <div className="card-body">
            <p className={ control ? 'card-title-hover' : 'card-title'}>{title}</p>
            <p className={ control ? 'card-text-hover' : 'card-text'}>{number}</p>
        </div>
    </div>
}