import React from 'react'
import ProductCard from "./ProductsCard";

import '../../style/product-list.css'

function ProductsList({data}) {
    return (
        <div className='row'>
            {
                data?.map((item,index)=>(
                    <ProductCard  item={item} className='column' key={index} />
                ))
            }
        </div>
    )
}

export default ProductsList