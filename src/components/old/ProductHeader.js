import React from 'react'
import products from '../data/product';

function ProductHeader() {
    let headerValues = Object.keys(products[0])
    return (
        <tr>
            {headerValues.map(value =>
                <th>{value}</th>
            )} 
        </tr>
    )
}

export default ProductHeader