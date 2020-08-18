import React, {useState, useContext, useEffect} from 'react'
import {StarWarContext} from "./SWContext"

export const useSWContext = () => {
    const [data, setData] = useContext(StarWarContext)
    
    useEffect(() => {
        retrieveDetailsNav()
    },[]) //this is called like componentDidMount

    const retrieveDetailsNav = async () => {
        let response = await fetch(data.urlNav)
        let info = await response.json()
        setData(prevState => ({
            ...prevState, 
             navBarData: info
        }))
    }

    const retrieveDetailsTable = async () => {
        let url = data.urlTable1 + data.tableName + data.urlTable2
        let response = await fetch(url)
        let info = await response.json()
        setData(prevState => ({
            ...prevState, 
             tableData: info
        }))
    }

    const setTableName = async (name) => {
        console.log("url set", name)
        setData(prevState => ({
            ...prevState,
            tableName: name
        }))
    }
    
    return (
        {   
            data,
            retrieveDetailsNav, 
            retrieveDetailsTable,
            setTableName
        }
    )
}