import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([]);
    useEffect( () => {
     fetch('data.json')
     .then(res=> res.json())
     .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
      }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=><Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <h2>Selected Sunglass</h2>
                {
                    
                }
                <button>CHOOSE 1 FOR ME</button>
                <br></br>
                <button>CHOOSE AGAIN</button>
            </div>
        </div>
    );
};

export default Shop;