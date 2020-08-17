import React, { Component } from 'react';


export default class App2 extends Component {
    constructor() {
        super()
        this.state= {
            name : "Tom",
            age : 20
        }
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age} years old</h3>
            </div>
        )
    }
}