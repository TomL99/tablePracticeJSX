import React, { useState, useEffect, useContext } from 'react';
import TransitionButton from "./TransitionBtn"
import {StarWarContext} from '../context/SWContext'
import {UseSWContext} from '../context/UseSWContext'



export default function CategoryDetail(props) {
        useEffect(() => {
                retrieveDetails()
            }
        ,[])
        
        const [data, setData] = useContext(StarWarContext)
        const [details, setDetails] = useContext(UseSWContext)
        const [next, setNext] = useState()
        const [prev, setPrev] = useState()

        
        const retrieveDetails = async () => {
            /*const response = await fetch(data.urlTable)
            const info = await response.json()
            setDetails(prevState => ({
                ...prevState, 
                tableInfo: info
            }))
            
            setNext(info.next)
            setPrev(info.previous)
            */
        }
        console.log("details in Category details", details)
        let keys
        let headers
        let body
        console.log("tableInfo", details)
        if (details.tableInfo) {
            keys = Object.keys(details.tableInfo[0])
            headers = keys.map(k => <th>{k}</th>)
            body = details.map(d => <tr> {keys.map(key => <td>{d[key]}</td>)} </tr>)
        }
        return (
            <div>
                <TransitionButton next={next} previous={prev}></TransitionButton>
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


/*
export default function CategoryDetail(props) {
    useEffect(() => {
            retrieveDetails()
        }
    ,[])
    
    let url = props.url
    console.log(props.url)
    const [details, setDetails] = useState()
    const [next, setNext] = useState()
    const [prev, setPrev] = useState()

    
    const retrieveDetails = async () => {
        const response = await fetch(url)
        const info = await response.json()
        console.log(info)
        setDetails(info)
        setNext(info.next)
        setPrev(info.previous)
    }
    console.log("details in Category details", details)
    let keys
    let headers
    let body
    if (details) {
        keys = Object.keys(details.results[0])
        headers = keys.map(k => <th>{k}</th>)
        body = details.results.map(d => <tr> {keys.map(key => <td>{d[key]}</td>)} </tr>)
    }  
    
    return (
        <div>
            <TransitionButton next={next} previous={prev}></TransitionButton>
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
*/