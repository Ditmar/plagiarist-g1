import { Edit, EditAttributes, Sort } from "@mui/icons-material";
import SortIcon from '@mui/icons-material/Sort';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowLeftSharpIcon from '@mui/icons-material/KeyboardArrowLeftSharp';
import KeyboardArrowRightSharpIcon from '@mui/icons-material/KeyboardArrowRightSharp';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import React, { useEffect, useState } from "react";

import './ListTableThesis.css'

export const TableListTable = ({ listTesis = [] }) => {

    // console.log(JSON.stringify(listTesis));

    const [pagination, setPagination] = useState(0);
    const [listT, setListT] = useState([])

    useEffect(() => {

        setListT(listTesis)
    }, [listT])


    const handlePagination = (page = 0) => {


    }

    return (
        <div className="content-table">
            <table className="table-list-tesis">
                <thead>
                    <tr>
                        <th className="title-table">Detalle</th>
                        <th className="title-table">Autor</th>
                        <th className="title-table">Editar</th>
                        <th className="title-table">Descargar</th>
                    </tr>
                </thead>
                <tbody className="body-list">
                    {
                        listT.map((d, i) => {
                            return <tr className="tr-list">
                                <td>
                                    <div className="detalle">
                                        <div className="avatar">
                                            <Avatar sx={{ width: 30, height: 35 }} alt="Remy Sharp" src={d.urlImageAvatar} />
                                        </div>
                                        <div className="data-autor">
                                            <div className="title">
                                                {d.title}
                                            </div>
                                            <div className="date-publicacion">
                                                Updated {d.publicationDate}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="date-autor">
                                        <div className="name-autor">{d.autor}</div>
                                        <div className="name-dateAutor">on {d.dateAutor}</div>

                                    </div>
                                </td>
                                <td>
                                    <div className="edit-data">
                                        <div className="edita-icon">
                                            <BorderColorIcon />
                                        </div>
                                        <div className="edita-fecha">{d.ultimaEdicion}</div>
                                    </div>
                                </td>
                                <td>
                                    <div className="data-descarga">
                                        <div className={d.downloadS}>
                                            {d.downloadS}
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="icon-option">
                                        <div className="option">
                                            <MoreVertIcon />
                                        </div>
                                    </div>
                                </td>

                            </tr>

                        })
                    }
                </tbody><br/>
                {/* pagination */}
                <div className="content-pagination">
                    <div className="pagination-1">
                        Row per page: 8
                        <ArrowDropDownIcon />
                    </div>
                    <div className="pagination-2">
                        1-8 of 1240
                    </div>
                    <div className="conten-icons">
                        <KeyboardArrowLeftSharpIcon />
                        <KeyboardArrowRightSharpIcon />
                    </div>
                </div>

            </table>



        </div>
    );
}

TableListTable.prototype = {
    listTesis: Array
}