import React, {useContext, useState, useEffect} from "react"
import CategoryDetail from "../components/CategoryDetail"
import NavBar from "../components/Navbar"

export default function Category ({match}) {
    let name = match.params.name
    return (
        <div>
            <NavBar></NavBar>
            <h1>Category: {name}</h1>
            <CategoryDetail name={name}/>
        </div>
    )
}