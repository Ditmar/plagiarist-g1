import React, {useState} from "react";
import "./Cards.css"
import {Card} from "./Card";
export const Cards = () => {

   

    return <div className="container">
            <div className="document">
                <Card id="document" title="Documentos" number="60"/> 
            </div>
            <div className="reviewed">
                <Card id="reviewed" title="Revisados" number="16"/> 
            </div>
            <div className="copies-detected">
                <Card id="copies-detected" title="Copias Detectadas" number="43"/> 
            </div>
    </div>
}