import React, {createContext, useState, useEffect} from "react"
import CategoryDetail from "../components/CategoryDetail"
import NavBar from "../components/Navbar"
import {UseSWContextFunc} from "../context/UseSWContext"
import {StarWarContextProvider} from '../context/SWContext'

export default function Category ({match}) {
    console.log("match",match)
    let name = match.params.name
    console.log(name)

    return (
        <div>
           
                <UseSWContextFunc>
                    <NavBar></NavBar>
                    <h1>Category: {name}</h1>
                    <CategoryDetail url={`https://swapi.dev/api/${match.params.name}?format=json`}/>
                </UseSWContextFunc>
        </div>
    )
}