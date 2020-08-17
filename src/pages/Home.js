import React from "react"
import CategoryList from "../components/CategoryList"
import NavBar from "../components/Navbar"
import {UseSWContextFunc} from "../context/UseSWContext"

export default function Home() {
    console.log("Home")
    return (
        <div>
            <UseSWContextFunc>
                <div>
                    <NavBar></NavBar>
                </div>
                <h1>
                    Home
                </h1>
            </UseSWContextFunc>
        </div>
        
    )
}