import React from 'react'
import products from '../data/product'


class ProductTable extends React.Component {
    render() {
        let headers = Object.keys(this.props.products[0])
        let productComponents = this.props.products.map (
            product => <tr> {headers.map(v => <td> {product[v]} </td>)} </tr>
        )
        
        return (
            <table>
                <thead>
                    <tr>
                        { headers.map(v=> <td>{v}</td>) }
                    </tr>
                </thead>
                <tbody>
                    {productComponents}
                </tbody>
            </table>
        )
    }  
} 


export default ProductTable