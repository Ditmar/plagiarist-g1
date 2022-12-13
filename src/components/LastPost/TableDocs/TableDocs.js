import React, { useEffect, useState } from "react";

import './TableDocs.css';

export const TableLast = ({ ListPost = [] }) => {


    const [pagination, setPagination] = useState(0);
    const [listT, setListT] = useState([])

    useEffect(() => {

        setListT(ListPost)
    }, [listT])

    return (
        <div className="content-table">
            <table className="table-post">
                <tbody>
                    {
                        listT.map((d, i) => {
                            return <tr>
                                <td>
                                    <div className="posts">
                                        <div className="tittle-post">
                                            <div className="title">
                                                {d.title}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="views">
                                        <div className="neme-autor">
                                            <a href="">{d.view}</a>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    <div className="views">
                                        <div className="neme-autor">
                                            <label className="neme-autor" >{d.pages} Pag</label>
                                        </div>
                                    </div>
                                </td>

                            </tr>
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