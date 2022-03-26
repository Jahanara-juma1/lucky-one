import React from 'react';
import './Product.css'
const Product = (props) => {
    const{id,name,img, price}=props.product;
    return (
        <div className='product'>
        <img src={img} alt=""></img>
        <div className='product-info'>
        <p className='product-name'>Name: {name}</p>
        <p>Id: {id}</p>
        <p>Price: ${price}</p>
        </div>

<button className='btn-cart'>
  <p>Add to cart</p>
</button>

            
        </div>
    );
};

export default Product;