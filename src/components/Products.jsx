import React from 'react'
import ProductCard from './ProductCard';
const Products = () => {
    // list of objects
  const productsList = [
    {       id:1,
                imgSrc : "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117" ,
                  name : "Headphones",
                  price : 8976,
                  rating :2 ,
                  isAvailable : true,
                  discount:2,
  },
  {   id:2,
                 imgSrc:"./src/assets/laptop.avif",
                    name:"Laptop",
                    price : 765432,
                    rating:5,
                    isAvailable: false,
                    discount:5,
  },
  {
              id:3,
                 imgSrc:"./src/assets/laptop.avif",
                    name:"Laptop",
                    price : 765432,
                    rating:5,
                    isAvailable: true,
                    discount:8,
  }
    
  ];
  return (
    <div>
       <div className="container">
      {/* { productsList.map(
        (item,index)=>(
          <ProductCard product={item} key={item.id} />


        )
       )} */}

       {
        productsList.map((item)=>(
          <div key={item.id}>
            <ProductCard product={item} />

            </div>

        )

        )
       }

    </div>
    </div>
  )
}

export default Products
