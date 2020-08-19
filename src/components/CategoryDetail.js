import React, { useState, useEffect, useContext } from 'react';
import TransitionButton from "./TransitionBtn"
import {useSWContext} from '../context/UseSWContext'


export default function CategoryDetail({name}) {    
        const {data, retrieveDetailsTable} = useSWContext()
        let results = [{}]
        if (data.tableData.results === undefined || data.name != name) {
            retrieveDetailsTable(data.navBarData[name], name)
        } else {
            results = data.tableData.results
        }

        let keys = Object.keys(results[0])
        let headers = keys.map(k => <th>{k}</th>)
        let body = results.map(d => <tr> {keys.map(key => <td key={key}>{d[key]}</td>)} </tr>)
       
        return (
            <>
                {data.tableData.results === undefined? <div>Loading</div> :
                <div>
                    <TransitionButton next={data.tableData.next} previous={data.tableData.previous} name={name}></TransitionButton>
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
