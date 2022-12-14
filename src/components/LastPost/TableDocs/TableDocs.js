import { TableCell, TableRow } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import { useStyles } from "../ListDocs.styles";



export const TableLast = ({ ListPost = [] }) => {


    const [pagination, setPagination] = useState(0);
    const [listT, setListT] = useState([])
    const classes = useStyles();

    useEffect(() => {

        setListT(ListPost)
    }, [listT])

    return (

        <div className={classes.container}>
            <table className={classes.title}>
                <tbody>
                    {
                        listT.map((d, i) => {
                            return <TableRow>
                            <TableCell className={classes.itemTitle} align="right">{d.title} </TableCell>
                            <TableCell className={classes.itemTitle} align="right"> </TableCell><TableCell className={classes.itemTitle} align="right"> </TableCell>
                            <TableCell className={classes.itemTitle} align="right"> </TableCell>
                            <TableCell className={classes.link} align="right"><a href="">{d.view}</a></TableCell>
                            
                            <TableCell className={classes.itemV} align="right">{d.pages} pag</TableCell>
                            </TableRow>
                            
                        })

                    }
                </tbody>

            </table>
        </div>
    );
}

TableLast.prototype = {
    ListPost: Array
}