import React, { useEffect, useState } from "react";
import LatestPosts from "../../services/services";

import { useStyles } from "./ListDocs.styles";
import { TableLast } from "./TableDocs/TableDocs";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
const
    ListarDocumentos = () => {

        const [ListPost, setLisTesis] = useState([]);
        const classes = useStyles();

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

            <div className={classes.container}>
                <div className={classes.title}>
                    <div className={classes.lastRow}>Ultimos Documentos Publicados</div>
                </div>
                <div className={classes.itemTitle}>
                    <div>
                        <label className={classes.subtitle_G}>Group:</label><label className={classes.subtitle_S}>Support</label>
                    </div>
                </div>
                <p >
                    <TableLast ListPost={ListPost} />
                </p>

            </div>
        );
    }

export default
    ListarDocumentos;