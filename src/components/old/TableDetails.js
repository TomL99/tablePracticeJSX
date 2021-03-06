import React from 'react';

class TableDetails extends React.Component {

    render() {
        let componentHeader
        let componentDetails
        if (this.props.componentDetails) {
            let results = this.props.componentDetails["results"]
            let keys = Object.keys(results[0])
            componentHeader = keys.map( key => 
                <th key={key}> {key} </th>
            ) 
            componentDetails = results.map( result => <tr>
                {keys.map(key => <td key={key}> {result[key]} </td>)}
            </tr>)
        }
        
        return (
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        {componentHeader}
                    </tr>
                </thead>
                <tbody>
                    {componentDetails}
                </tbody>
            </table>
        )
    }
}

export default TableDetails