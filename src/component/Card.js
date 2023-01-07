import { Rating } from '@mui/material'
import React, { useEffect, useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';

const Card = (props) => {
  let data = props?.data;
  const [wishList,  setWishList] = useState(false);
  
  data["ratings"] = {
    rating: parseInt(Math.random() * (5)) + 1,
    count:  parseInt(Math.random() * 1000)
  }
  
  return (
    <div className="card">
        <div className="card_inner" >
          <div>
           <div onClick={() => setWishList(!wishList)} className={`card_inner_wishlist ${wishList ? "wishlisted" : "unWishlisted"}`}>
            <FavoriteIcon />
           </div>
           <img src={`https://${data?.imageUrl}`} alt="img_not_found" className="image_card"/>
           <div className='hover-view-product'> View Product</div>
          </div>
          <span className="product_name">{data?.name?.slice(0, 20)}{data?.name?.length > 20 && "..."}</span><br/>
          <div style={{margin: "10px auto"}}>
            {data?.price?.previous?.value !== null ? 
              <>
                <b className="previous_price">Rs. {data?.price?.previous?.text} {"  "}</b>
                <b className="current_price">Rs. {data?.price?.current?.text}</b>
              </> :
              <b className="current_price">Rs. {data?.price?.current?.text} </b>
            }
          </div>
          <div className='card-rating-count'>
            <Rating name="read-only" value={data?.ratings?.rating} readOnly/> <span className='span-count'>({data?.ratings?.count})</span>
          </div>
        </div>
    </div>
  )
}

export default Card