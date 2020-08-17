import React, {useEffect, useState} from "react"
import {Link} from 'react-router-dom'

export default function CategoryList(props) {
    
    const [items, setItems] = useState({})

    const retrieveItems = async () => {
        let response = await fetch (props.url)
        let data = await response.json()
        setItems(data)
    }
    let list = []
    list.push( <Link to='/'>
                    <button type="button" class="navitem">
                        Home
                    </button>
                </Link>
    )

    Object.keys(items).map(r => 
            list.push(
                <Link key={r} to={`/category/${r}`} style={{textDecoration:'none'}}>
                    <button type="button" class="navitem">{r}</button>
                </Link>)
    )
    
    return (
        <nav class="navbar navbar-light bg-light">
            {list.length!==0 ? <div class="relative"> {list} </div> : <div>No item to display</div>}
        </nav>
    )
}
 