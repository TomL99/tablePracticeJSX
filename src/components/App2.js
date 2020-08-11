import React from 'react';
import ProductTable from './ProductTable';
import products from '../data/product';

function App() {

  return (
    <div>
      <ProductTable products={products}/>
    </div>
  )
}

export default App;
