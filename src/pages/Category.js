import React, {useContext, useState, useEffect} from "react"
import CategoryDetail from "../components/CategoryDetail"
import NavBar from "../components/Navbar"
import {UseSWContextFunc} from "../context/UseSWContext"
import {StarWarContext} from '../context/SWContext' 


export default function Category ({match}) {
    let name = match.params.name
    const [data, setData] = useContext(StarWarContext)
    setData(prevState => ({
        ...prevState, 
        urlTable: `https://swapi.dev/api/${match.params.name}?format=json`,
        called: "table"
    }))

    return (
        <div>
            <UseSWContextFunc>
                    <NavBar></NavBar>
                    <h1>Category: {name}</h1>
                    <CategoryDetail/>
            </UseSWContextFunc>
        </div>
    )
}