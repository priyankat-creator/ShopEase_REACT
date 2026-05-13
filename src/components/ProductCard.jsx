import React, { useState } from 'react'

const ProductCard = ({product}) => {

    const [price,setPrice] = useState(product.price);

    const [isWishList,setWishList] = useState(false);

    const [msg,setMsg]= useState("")
  
const discHandler = (discPerc)=>{
    const discAmt = price * discPerc / 100;
    const finalAmt = Math.round(price - discAmt);
    setPrice(finalAmt)
    setMsg("Discount will be applied  at checkout")

}

const wishHandler = ()=>{
    setWishList(isW => !isW)
   isWishList ?    setMsg("Added to wishlist")
    :
        setMsg("removed  from Wishlist")
    
}
    const ooStckMsg = <p style={{
        color:"red",fontSize:"25px"
    }}>
        Out of Stock
        </p>;
    let ratingDisplay = "";
    if(product.rating === 1){
        ratingDisplay = "⭐☆☆☆☆"
    }
    else if(product.rating == 2)
    {
        ratingDisplay ="⭐⭐☆☆☆"
    }
    else if(product.rating == 3)
    {
        ratingDisplay ="⭐⭐⭐☆☆"
    }
    else if(product.rating == 4){
        ratingDisplay ="⭐⭐⭐⭐☆"
    }
    else if(product.rating == 5){
        ratingDisplay ="⭐⭐⭐⭐⭐"
    }

  return (
    <div className='card'>
      <img src={product.imgSrc}
       alt="product" width="150px" height="150px"></img>
      <h2>{product.name}</h2>
      <p>₹{price}/-</p>
      <p>{ratingDisplay}</p>

{/* condiitonal rendering */}
      {/* {product.isAvailable ?
        <button>Add {product.name} to Cart</button> :
        ooStckMsg

      } */}

<button onClick={()=>{discHandler(product.discount)}}>
    Claim {product.discount} % discount
</button>

<button onClick={wishHandler}> 
  {isWishList ? "❤️" : "🤍"}
</button>


       <button>Add to Cart</button> 
       <p>{msg}</p>


      
    </div>
  )
}

export default ProductCard

