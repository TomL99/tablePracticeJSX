import React, {useEffect, useState, useContext} from "react"
import {Link} from 'react-router-dom'
import {useSWContext} from '../context/UseSWContext'

export default function NavBar(props) {
    const {data, retrieveDetailsNav} = useSWContext()

    if (data.navBarData.length == 0) {
        retrieveDetailsNav()
    }
    let list = Object.keys(data.navBarData).map(r => 
        <Link key={r} to={`/category/${r}`} style={{textDecoration:'none'}}>
            <button type="button" className="navitem">{r}</button>
        </Link>
    )   
    list.unshift( 
        <Link to='/'>
            <button type="button" className="navitem">
                Home
            </button>
        </Link>
    )
    return (
        <nav className="navbar navbar-light bg-light">
            {list.length!==0 ? <div className="relative"> {list} </div> : <div>No item to display</div>}
        </nav>
    )
}