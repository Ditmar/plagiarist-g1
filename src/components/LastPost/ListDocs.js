import React, { useEffect, useState } from "react";
import LatestPosts from "../../services/services";
import './ListDocs.css'
import { TableLast } from "./TableDocs/TableDocs";

const
    ListarDocumentos = () => {

        const [ListPost, setLisTesis] = useState([]);
 
        useEffect(() => {
            let listT =
                LatestPosts.
                    ListarDocumentos();
            console.log(listT);
            setLisTesis(
                listT
            );
        }, [])

        return (
            <div className="content-list-post">
                <div className="content-header-secction">
                    <div className="name-title">Ultimos Documentos Publicados</div>
                </div>
                <div className="group">
                    <div>
                        <label className="data-group">Group:</label><label className="name-group">Support</label>
                    </div>
                </div>
                <p className="list-publications">
                    <TableLast ListPost={ListPost} />
                </p>

            </div>
        );
    }

export default
    ListarDocumentos;