import React, {useContext, useState, useEffect} from "react"
import CategoryDetail from "../components/CategoryDetail"
import NavBar from "../components/Navbar"
import {useSWContext} from "../context/UseSWContext"


export default function Category ({match}) {
    let name = match.params.name
    const {data, setTableName} = useSWContext()
    /*
    if (data.urlTable !== `https://swapi.dev/api/${match.params.name}?format=json`) {
        setUrlTable(
            `https://swapi.dev/api/${match.params.name}?format=json`
        )
    }
    */
    if (data.tableName !== name) {
        setTableName(name)
    }

    console.log("data Category", data)
    
    return (
        <div>
            <NavBar></NavBar>
            <h1>Category: {name}</h1>
            <CategoryDetail name={name}/>
        </div>
    )
}