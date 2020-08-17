import React, {useEffect, useState, useContext} from "react"
import {Link} from 'react-router-dom'
import {UseSWContext} from '../context/UseSWContext'

export default function NavBar(props) {
    const[items, setItems] = useContext(UseSWContext)
    let list = []
    list.push( <Link to='/'>
                    <button type="button" class="navitem">
                        Home
                    </button>
                </Link>
    )

    if (items) {
        Object.keys(items).map(r => 
            list.push(
                <Link key={r} to={`/category/${r}`} style={{textDecoration:'none'}}>
                    <button type="button" class="navitem">{r}</button>
                </Link>)
        )
    }
    
    return (
        <nav class="navbar navbar-light bg-light">
            {list.length!==0 ? <div class="relative"> {list} </div> : <div>No item to display</div>}
        </nav>
    )
}