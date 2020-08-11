import React from 'react';

class TableDetails extends React.Component {
    constructor() {
        super()
        this.state = {
            valueClicked : "",
        }
        this.setNewState = this.setNewState.bind(this);
    }


    setNewState(valueClicked, tableValues) {
        //console.log("called setNewState")
        let results = tableValues["results"]
        let keys = Object.keys(results[0])
        let tableHeaders = keys.map( key => 
            <td> {key} </td>
        )
        let tableBody = results.map( result => <tr>
            {keys.map(key => <td> {result[key]} </td>)}
        </tr> )
        this.setState( () => ({
            valueClicked: valueClicked,
            tableHeaders: tableHeaders,
            tableBody : tableBody
        }))
    }

    render() {
       //console.log(this.props.valueClicked)
        if (this.props.valueClicked !== this.state.valueClicked) {
            fetch(this.props.valueClicked)
                .then(response => response.json())
                .then( data => this.setNewState(this.props.valueClicked, data) )
            //console.log("called")
        }
 
        return (
            <table>
                <thead style= {{
                    backgroundColor: 'mediumslateblue'}}
                >
                    <tr>
                        {this.state.tableHeaders}
                    </tr>
                </thead>
                <tbody>
                    {this.state.tableBody}
                </tbody>
            </table>
        )
    }
}

export default TableDetails