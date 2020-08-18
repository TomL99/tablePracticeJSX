import React, {useContext} from "react"
import {Details} from './CategoryDetail'
import {useSWContext} from '../context/UseSWContext'

function TransitionBtn({next, previous}) {
    console.log("next", next)
    console.log("prev", previous)
    const{data, retrieveDetailsTable} = useSWContext()

    return (
        <div>
            {next? <button>Next</button> : <div>No Next</div>}
            {previous? <button>Previous</button>: <div>No Previous</div>}
        </div>
    )
}

export default TransitionBtn