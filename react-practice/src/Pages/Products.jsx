import React from 'react'
import { useParams } from 'react-router-dom'
import products from './Prodcuts'

function Products() {
    var {id}=useParams()
    var product=products.find((value)=>value.id==id)
     if (!product) {
    return <h2>Loading product...</h2>;
  }
  return (
    <>

   <center> <h1>Products</h1></center>
   
        <div className="row" >
            <div className="col-lg-4">
                <div className="card">
                      <img src={product.image} alt="" /> 
                    <div className="card-body">
                        <span>Name : {product.name}</span>
                        <span>Price : {product.Price}</span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Products