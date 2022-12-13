import React,{ useEffect, useState } from "react";
import SortIcon from '@mui/icons-material/Sort';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ThesisServices from "../../services/seviceslist";
import './ListarTesis.css'

import { TableListTable } from "./ListTesis/ListTesis";

const ListarTesis=()=>{

    const [listTesis, setLisTesis] = useState([]);

    useEffect(()=>{
        let listT =  ThesisServices.listarTesis();
        console.log(listT);
        setLisTesis(
            listT
        );
    },[])

    return(
        <div className="content-listar-tesis">
            <div className="content-header-secction">
                <div className="subtile-list">Lista</div>
                <div className="content-box">
                    <input className="text-box"></input>
                    <input className="text-box"></input>
                    <input className="text-box"></input>
                </div>
                <div className="content-filters">
                    <div className="option-filters">
                        <SortIcon/>          
                        <div>sort</div> 
                    </div>
                    <div className="option-filters">
                        <FilterAltIcon/>
                        <div>filter</div> 
                    </div>
                </div>
            </div>
            <div className="content-table-component">
                <TableListTable listTesis={listTesis} />
            </div>
        </div>
    );
}

export default ListarTesis;