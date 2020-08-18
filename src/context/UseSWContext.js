import React, {createContext, useState, useContext, useEffect} from 'react'
import {StarWarContext} from "./SWContext"

export const UseSWContext = createContext()

export const UseSWContextFunc = (props) => {
    console.log("UseSWContext")
    const [data, setData] = useContext(StarWarContext)
    const [items, setItems] = useState({
        navBarInfo: {},
        tableInfo: {}
    })

    useEffect(() => {
        retrieveItems()
    },[])

    const retrieveItems = async () => {
        console.log("retrieving Items")
        if (data.called === "nav") {
            let response = await fetch(data.urlNav)
            let info = await response.json()
            console.log(info)
            setItems(prevState => ({
                ...prevState, 
                navBarData: info
            }
            ))
        } else {
            let response = await fetch(data.urlTable)
            let info = await response.json()
            console.log(info)
            setItems(prevState => ({
                ...prevState, 
                tableInfo: info
            }
            ))
        }
    }

    console.log("fromUse", items)
    console.log(data)
    return (
        <UseSWContext.Provider value={[items, setItems]}>
            {props.children}
        </UseSWContext.Provider>
    )
}