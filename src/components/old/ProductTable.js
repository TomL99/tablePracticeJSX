import React from 'react';
import TableDetails from './TableDetails';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom'


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
                <Router>
                    <div>
                        <nav class="navbar navbar-dark bg-primary">
                            <a class="navbar-brand" href="/">
                                Star Wars Table
                            </a>
                        </nav>
                    </div>
                    <div>{
                        Object.keys(this.state.jsonValues).map (
                            key => <Link to={`/${key}`}>
                                <button type="button" class="btn btn-link" key={key} id={key} onClick={() => this.setStateClick({key})}> {key} </button>
                            </Link>
                        )}
                    </div>
                    <br></br>
                    <TableDetails 
                        componentDetails = {this.state.componentData}>
                    </TableDetails>
                </Router>
            </div>
        )
    }  
} 

export default ProductTable