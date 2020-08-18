import React, { useState, useEffect, useContext } from 'react';
import TransitionButton from "./TransitionBtn"
import {useSWContext} from '../context/UseSWContext'



export default function CategoryDetail(props) {    
        const {data, retrieveDetailsTable, setUrlTable} = useSWContext()
        console.log("data CategoryDetail", data.tableData)
        if (data.tableData.results == 0) {
            retrieveDetailsTable()
        }
        
        console.log("data tableData", data)
        let keys = Object.keys(data.tableData.results[0])
        let headers = keys.map(k => <th>{k}</th>)
        let body = data.tableData.results.map(d => <tr> {keys.map(key => <td>{d[key]}</td>)} </tr>)
        
        
        return (
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
        )
}
