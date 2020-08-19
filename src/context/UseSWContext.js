import React, {useState, useContext, useEffect} from 'react'
import {StarWarContext} from "./SWContext"

export const useSWContext = () => {
    const [data, setData] = useContext(StarWarContext)
    
    /*
    useEffect(() => {
        console.log("useEffect called")
        retrieveDetailsNav()
    },[]) //this is called like componentDidMount

    const retrieveDetailsNav = async () => {
        console.log("retreiveDetailsNav called")
        let response = await fetch(data.urlNav)
        let info = await response.json()
        setData( prevData => ({
            ...prevData, 
             navBarData: info
        }))
    }
    */

    const retrieveDetailsTable = async (url, name) => {
        let response = await fetch(url)
        let info = await response.json()
        setData( prevData => ({
            ...prevData,
             tableData: info,
             tableResults: info.results,
             name: name
        }))
    }

    return (
        {   
            data,
            retrieveDetailsTable,
        }
    )
}