import React, { useEffect, useState } from 'react';
import { Carousel } from "@material-tailwind/react";
import { useParams } from 'react-router-dom';

const ProductGallery = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    const getSingleProduct = async (id) => {
        const req = await fetch(`https://fakestoreapi.com/products/${id}`);
        const res = await req.json();
        console.log(res);
        setProduct(res);
    };
    useEffect(() => {
        getSingleProduct(id);
    }, [id]);
    if (!product) return <div>Loading...</div>;
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-6'>
            <Carousel loop={true} autoplay={true} className="rounded-xl h-96">
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain bg-white p-4"
                />
            </Carousel>
            <div className='bg-white p-6 shadow-xl'>
                <h2 className='text-xl font-semibold mb-4'>{product.title}</h2>
                <p className='text-gray-700'>{product.description}</p>
                <p className='mt-4 font-bold text-lg'>${product.price}</p>
            </div>
        </div>
    );
};

export default ProductGallery;
