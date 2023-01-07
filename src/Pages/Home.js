import React, { useEffect, useRef, useState } from 'react'
import LOGO from '../Assets/Images/logo.webp';
import SearchIcon from '@mui/icons-material/Search'
import { latestProduct, popularProducts } from '../Utils/Constant';

function Home() {
    const ref = useRef();
    const [openSeachTab, setOpenSearch] = useState(false);
    
    const handleClick = (e) => {
        console.log("ref", ref.current, e.target, ref.current?.contains(e.target))
        if (!ref.current?.contains(e.target)) {
          setOpenSearch(false);
        }
    };
    useEffect(()=>{
          document.addEventListener("click", handleClick);
          return () => {
            document.removeEventListener("click", handleClick);
          };
    },[openSeachTab]);
  return (
    <div className='home-wrapper'>
        <div className='header-home'>
            <img className="logo_image" src={LOGO} alt="Logo" />
        </div>
        <div  className='home-search-wrapper'>
            <div className="search_box" ref={ref} onClick={() => setOpenSearch(true)}>
                <input type="search" placeholder="Search" />
                <SearchIcon style={{color:"rgba(147, 147, 147, 0.789)",fontSize:"40px", margin:"12px 10px 12px 5px"}}/>
            </div>
        </div>
        {openSeachTab && <div className='home-trending-card-wrapper'>
           <div>
              <b>Latest Trends</b>
              <div className='trending-card-latest'>
                {latestProduct?.map((data,i) => <div key={i} onClick={() => window.location.href = "/products"}>
                    <img src={`https://${data?.imageUrl}`} alt="img_not_found" className="trending_image_card"/>
                    <p>{data?.brandName}</p>
                </div>
                )} 
              </div>
           </div>
           <div className='trending-card-popular'>
            <b>Popular Suggestions</b>
           <div>
            <ul>
                {popularProducts?.map((item ,i) => <li key={i}>{item}</li>)}
            </ul>
           </div>
           </div>
        </div>
        }
    </div>
  )
}

export default Home