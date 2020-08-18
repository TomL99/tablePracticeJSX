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
        setData( {
            ...data, 
             navBarData: info
        })
    }

    const retrieveDetailsTable = async (url) => {
        let response = await fetch(url)
        let info = await response.json()
        setData( {
            ...data,
             tableData: info,
             tableResults: info.results
        })
    }

    return (
        {   
            data,
            retrieveDetailsNav, 
            retrieveDetailsTable,
        }
    )
}