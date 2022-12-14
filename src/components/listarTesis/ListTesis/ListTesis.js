import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import React, { useEffect, useState } from "react";
import { useStyles } from '../ListarTesis.styles';
import { ArrowDownward, ArrowLeft, DockTwoTone, DoNotStep, Edit, OnlinePredictionSharp, OpenInNewTwoTone, PointOfSale, ThreeDRotationSharp } from '@mui/icons-material';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions';
import TablePaginationDemo from '../paginacion';
import { Menu } from '@material-ui/core';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const TableListTable = ({ listTesis = [] }) => {

    // console.log(JSON.stringify(listTesis));

    const [pagination, setPagination] = useState(0);
    const classes = useStyles();
    const [listT, setListT] = useState([])

    useEffect(() => {

        setListT(listTesis)
    }, [listT])


    const handlePagination = (page = 0) => {


    }

    return (
        <div className={classes.container}>
            <table className={classes.tabletesis}>
                <thead>
                    <tr>
                        <th className={classes.title}>Detalle</th>
                        <th className={classes.title}>Autor</th>
                        <th className={classes.title}>Editar</th>
                        <th className={classes.title}>Descargar</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        listT.map((d, i) => {
                            return <tr >
                                <td>
                                    <div className={classes.title}>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar sx={{ width: 30, height: 35 }} alt="Remy Sharp" src={d.urlImageAvatar}>
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary={d.title} secondary={d.publicationDate} />
                                        </ListItem>

                                    </div>
                                </td>
                                <td>
                                    <ListItem>
                                        <ListItemText primary={d.autor} secondary={d.dateAutor} />
                                    </ListItem>
                                </td>
                                <td>
                                    <ListItem>
                                        <ListItemText primary={<Edit></Edit>} secondary={d.ultimaEdicion} />
                                    </ListItem>
                                </td>
                                <td>
                                    <div>
                                        <div className= {classes.NORMAL}>
                                            {d.downloadS}
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <MoreVertIcon />
                                    </div>
                                </td>
                             <Divider />
                            </tr> 

                        })
                    }
                </tbody><br />

            </table>
            {/* pagination */}
            <div className={classes.dataDownload}>
                <TablePaginationDemo></TablePaginationDemo>
            </div>

        </div>
    );
}

TableListTable.prototype = {
    listTesis: Array
}