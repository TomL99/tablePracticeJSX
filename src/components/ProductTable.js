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
        this.setClick = this.setClick.bind(this);
    }

    setClick(value) {
        this.setState( prevState => ({
            fetched : true,
            jsonValues: prevState.jsonValues,
            valueClicked : value["key"]
        }))
    }
    
    render() {
        if (this.state.fetched === false) {
            fetch('https://swapi.dev/api/?format=json')
                .then(response => response.json())
                .then( data => this.setState({fetched : true, jsonValues: data}))        
        }

        let productComponents = Object.keys(this.state.jsonValues).map (
            key => <button key={key} id={key} onClick={() => this.setClick({key})}> {key} </button>
        )
        
        return (
            <div>
                <h1>Star Wars Table</h1>
                <div>{productComponents}</div>
                <br></br>
                <TableDetails valueClicked={this.state.jsonValues[this.state.valueClicked]}></TableDetails>
            </div>
        )
    }  
} 


export default ProductTable