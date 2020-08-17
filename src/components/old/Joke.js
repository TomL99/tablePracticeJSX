import React from 'react'

function Joke(props) {
        if (props.question) {
            return (
                <div>
                    <h3>Question: {props.question}</h3>
                    <h3>Props: {props.punchLine}</h3>
                </div>
            )
        } else {
            return (
                <h3>PunchLine: {props.punchLine}</h3>
            )
        }
}

export default Joke