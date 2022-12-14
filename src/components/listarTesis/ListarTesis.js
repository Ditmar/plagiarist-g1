import React, { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import ThesisServices from "../../services/seviceslist";
import { TableListTable } from "./ListTesis/ListTesis";
import { ClassNames } from "@emotion/react";
import { useStyles } from "./ListarTesis.styles";
import { Edit, Filter, Filter1, Filter1Outlined, Filter1Rounded, Filter1Sharp, Filter1TwoTone, FilterAlt, Sort } from "@mui/icons-material";
import { TableSortLabel } from "@material-ui/core";
import { Box } from "@mui/system";
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';


const ListarTesis = () => {

    const [listTesis, setLisTesis] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        let listT = ThesisServices.listarTesis();
        console.log(listT);
        setLisTesis(
            listT
        );
    }, [])


    return (

        <div className="content-listar-tesis">
            <TableRow>
                <TableCell className={classes.titles}>Lista </TableCell>
                <TableCell align="right"><TextField className={classes.searchs}></TextField></TableCell>
                <TableCell align="right"><TextField className={classes.searchs}></TextField></TableCell>
                <TableCell align="right"><TextField className={classes.searchs}></TextField></TableCell>
                <TableCell align="right" className={classes.subtitleFilter}>
                    <label><Sort></Sort> Sort </label>
                    <label><FilterAlt></FilterAlt> Filter </label>
                </TableCell>
            </TableRow>
            <div >
                <TableListTable listTesis={listTesis} />
            </div>
        </div>
    );
}

export default ListarTesis;