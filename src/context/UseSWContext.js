import React, {createContext, useState, useContext, useEffect} from 'react'
import {StarWarContext} from "./SWContext"

export const UseSWContext = createContext()

export const UseSWContextFunc = (props) => {
    console.log("UseSWContext")
    const [data, setData] = useContext(StarWarContext)
    const [items, setItems] = useState({})
    console.log(data)

    useEffect(() => {
        retrieveItems()
    },[])

    const retrieveItems = async () => {
        console.log("retrieving Items")
        let response = await fetch(data)
        let info = await response.json()
        setItems(info)
    }

    console.log("fromUse", items)
    return (
        <UseSWContext.Provider value={[items, setItems]}>
            {props.children}
        </UseSWContext.Provider>
    )
}