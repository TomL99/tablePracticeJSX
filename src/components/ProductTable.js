import React from 'react';
import TableDetails from './TableDetails'


class ProductTable extends React.Component {
    constructor() {
        super()
        this.state = {
            fetched : false,
            jsonValues: {},
            valueClicked: ""
        }
        this.setStateClick = this.setStateClick.bind(this);
    }

    setStateClick(value) {
        fetch(this.state.jsonValues[value["key"]])
                .then(response => response.json())
                .then( data => this.setState( prevState => ({
                    fetched : true,
                    jsonValues: prevState.jsonValues,
                    valueClicked : value["key"],
                    componentData: data,
                    }))
                )
    }
    
    componentDidMount() {
        if (this.state.fetched === false) {
            fetch('https://swapi.dev/api/?format=json')
                .then(response => response.json())
                .then( data => this.setState({fetched : true, jsonValues: data}))        
        }
    }

    render() {
        return (
            <div>
                <h1>Star Wars Table</h1>
                <div>{
                    Object.keys(this.state.jsonValues).map (
                        key => <button key={key} id={key} onClick={() => this.setStateClick({key})}> {key} </button>
                    )}
                </div>
                <br></br>
                <TableDetails 
                    componentDetails = {this.state.componentData} 
                >
                </TableDetails>
            </div>
        )
    }  
} 

export default ProductTable