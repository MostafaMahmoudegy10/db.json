import React, { useEffect, useState } from 'react';
import ProductCart from './ProductCart';
import { useParams } from 'react-router';
import axios from'axios';
const Product = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        // const req = await fetch('https://fakestoreapi.com/products');
        // const res = await req.json();
        // setProducts(res);
        const config={
            method:'get',
            url:'https://fakestoreapi.com/products'
        }
        axios(config).then(
            (products)=>{
                console.log(products);

                setProducts(products.data);
            }

        )
    };

    useEffect(() => {
        getProducts();
    }, []);


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto'>
            {
                products.map((product,indx)=>(
                   <div className='flex justify-center ' key={indx} >
                        <ProductCart
                            product={product}
                        />
                  </div>

                ))
            }
        </div>
    );
};

export default Product;
