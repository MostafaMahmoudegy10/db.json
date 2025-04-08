import { Link } from 'react-router-dom';

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
 
const ProductCart = ({product}) => {
  return (

    <Card className="mt-6 w-96">
    <CardHeader color="blue-gray" className="relative h-56">
      <img
        src={product.image}
        alt="card-image"
      />
    </CardHeader>
    <CardBody>
      <Typography variant="h5" color="blue-gray" className="mb-2">
        {product.title}
      </Typography>
      <Typography>
        {product.description}
      </Typography>
    </CardBody>
    <CardFooter className="pt-0">
        <Link to={`/product/${product.id}`}>
          <Button>Read More</Button>
        </Link>  
    </CardFooter>
  </Card>
  )
}

export default ProductCart
