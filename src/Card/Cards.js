import React, {useState} from "react";
import "./Cards.css"
import {Card} from "./Card";
export const Cards = () => {

    const[hoverdocument, setHoverDocument] = useState(false);
    const[hoverReviewed, setHoverReviewed] = useState(false);
    const[hoverCopies, setHoverCopies] = useState(false);

    function handleMouseEnter(e){
        if(e){
            console.log(e);
            setHoverDocument(true);
        } 
        if(!e){
            setHoverDocument(false);
        }
    }

    return <div className="container">
            <div className="document">
                <Card id="document" title="Documentos" number="60" handleMouseEnter={handleMouseEnter} control={hoverdocument}/> 
            </div>
            <div className="reviewed">
                <Card id="reviewed" title="Revisados" number="16" handleMouseEnter={handleMouseEnter} control={hoverReviewed}/> 
            </div>
            <div className="copies-detected">
                <Card id="copies-detected" title="Copias Detectadas" number="43" handleMouseEnter={handleMouseEnter} control={hoverCopies}/> 
            </div>
    </div>
}