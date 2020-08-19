import React, {useContext} from "react"
import {Details} from './CategoryDetail'
import {useSWContext} from '../context/UseSWContext'

function TransitionBtn({next, previous, name}) {
    const{retrieveDetailsTable} = useSWContext()
    return (
        <div>
            {next? <button onClick={() => retrieveDetailsTable(next,name)}>Next</button> : <div>No Next</div>}
            {previous? <button onClick={() => retrieveDetailsTable(previous,name)}>Previous</button>: <div>No Previous</div>}
        </div>
    )
}

export default TransitionBtn