import React, {useContext} from "react"
import {Details} from './CategoryDetail'
import {StarWarContext} from '../context/SWContext'
import {UseSWContext} from '../context/UseSWContext'



function TransitionBtn({next, previous}) {
    console.log("next", next)
    console.log("prev", previous)
    const [data, setData] = useContext(StarWarContext)
    const [items, setItems] = useContext(UseSWContext)

    const nextClick = () => {
        setData(next)
        fetchData(next)
    }

    const previousClick = () => {
        setData(previous)
    }

    const fetchData = async (url) => {
        let response = await fetch(next)
        let info = await response.json()
        setItems(info)
    }

    return (
        <div>
            {next? <button onClick={nextClick}>Next</button> : <div>No Next</div>}
            {previous? <button onClick={previousClick}>Previous</button>: <div>No Previous</div>}
        </div>
    )
}


export default TransitionBtn