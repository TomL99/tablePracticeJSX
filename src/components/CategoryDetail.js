import React, { useState, useEffect, useContext } from 'react';
import TransitionButton from "./TransitionBtn"
import {useSWContext} from '../context/UseSWContext'


export default function CategoryDetail({name}) {    
        const {data, retrieveDetailsTable} = useSWContext()
        if (data.tableResults.length == 1) {
            retrieveDetailsTable(data.navBarData[name])
        }
        let keys = Object.keys(data.tableResults[0])
        let headers = keys.map(k => <th>{k}</th>)
        let body = data.tableResults.map(d => <tr> {keys.map(key => <td key={key}>{d[key]}</td>)} </tr>)
       
        return (
            <>
                {data.tableResults.length == 1? <div>Loading</div> :
                <div>
                    <TransitionButton next={data.tableData.next} previous={data.tableData.previous}></TransitionButton>
                    <table>
                        <thead>
                            <tr>{headers}</tr>
                        </thead>
                        <tbody>
                            {body}
                        </tbody>
                    </table>
                </div>
                }
            </>
        )
}
