
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([])
    const [carts, setCarts] = useState([]);
    useEffect( () => {
     fetch('data.json')
     .then(res=> res.json())
     .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        console.log(product);
        const newCart = [...carts, product];
        setCarts(newCart);
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
            <div>
                <h4>Selected Sunglass: </h4>
                {
                    carts.map(cart=><Cart
                         key={cart.id} 
                         cart={cart}></Cart>)
                }
                <button>CHOOSE 1 FOR ME</button>
                
                <button>CHOOSE AGAIN</button>
            </div>
            
            
        </div>

    



    );
};

export default Shop;