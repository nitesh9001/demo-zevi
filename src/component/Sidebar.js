import React,{useState, useEffect} from 'react'
import ArrowDropDown from '@mui/icons-material/KeyboardArrowDown';
import ArrowDropUp from '@mui/icons-material/KeyboardArrowUp';
import { Rating } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { PRODUCT_LIST } from '../Redux/Slice/Product';
import { arryOfproduct } from '../Utils/Constant';
import { CATEGORY_LIST } from '../Redux/Slice/Category';

const Sidebar = (props) => {
    const category = useSelector(state => state?.category?.data);
    const ratingArray = [5, 4, 3, 2, 1];
    const dispatch = useDispatch();

    const [openDropBrand, setOpenDropBrand] = useState(true);
    const [openDropPrice, setOpenDropPrice] = useState(true);
    const [openDropRating, setOpenDropRating] = useState(true);
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [ratings, setRating] = useState('');

    const clearFilter = () => {
        dispatch(PRODUCT_LIST({data: arryOfproduct}));
        setPrice("");
        setRating('');
        setBrand('')
    }
    useEffect(() => {
        const dataCategory = [];
        arryOfproduct.forEach((d) => {
            if(!dataCategory.includes(d.brandName))
              dataCategory.push(d.brandName)
        });
        dispatch(CATEGORY_LIST({data: dataCategory}))
    },[]);

    useEffect(() => {
        var filteredData = arryOfproduct;
        if(brand.length > 0){
          filteredData = filteredData.filter((d) => d.brandName == brand);
        }
        if(ratings.length > 0){
          filteredData = filteredData.filter((d) => d.ratings?.rating == ratings);
        }
        if(price.length > 0){
            const min = price.split("-")[0];
            const max = price.split("-")[1];
            filteredData = filteredData.filter((d) => {
                console.log(min, max, d.price?.value)
                return d.price?.current.value > min && d.price?.current.value < max
            });
        }
        dispatch(PRODUCT_LIST({data: filteredData}));
    },[brand, ratings, price])

    return (
        <div className="main_side_bar_element">
            <div className="main_side_bar_first">
              <p>Search Results</p>
            </div>
            <div className="speration-top">
                <div className="main_side_bar_second">
                <button onClick={() => setOpenDropBrand(!openDropBrand)}>
                    <span style={{color:"black", fontWeight:400, fontSize:"16px"}}>BRAND</span>
                    {openDropBrand ? 
                        <ArrowDropUp style={{color:"grey",fontSize:"30px", marginTop:"-5px"}}/> :
                        <ArrowDropDown style={{color:"grey",fontSize:"30px", marginTop:"-5px"}}/>
                    }
                </button>
                </div>
                {openDropBrand && <div>
                <div className="radio_selector">
                    {category && category?.length > 0 && category.map(d => 
                        <label className="container_radio" key={d}>
                        <input 
                            type="radio"
                            value={d}
                            onChange={(e) => {
                                    setBrand(e.target.value);
                            }}
                            checked={brand === d}/>
                            <span className="checkmark"></span>
                            <span className="label_radio">
                              {d}
                            </span>
                        </label>
                    )}
                </div>
                </div>
                }
            </div>
            <div className="speration-top">
                <div className="main_side_bar_second">
                <button onClick={() => setOpenDropPrice(!openDropPrice)}>
                    <span style={{color:"black", fontWeight:400, fontSize:"16px"}}>PRICE RANGE</span>
                    {openDropPrice ? 
                        <ArrowDropUp style={{color:"grey",fontSize:"30px", marginTop:"-5px"}}/> :
                        <ArrowDropDown style={{color:"grey",fontSize:"30px", marginTop:"-5px"}}/>
                    }
                </button>
                </div>
                {openDropPrice && <div>
                <div className="radio_selector">
                    <label className="container_radio">
                    <input 
                    type="radio"
                    value={"0-500"} 
                    onChange={(e) => setPrice(e.target.value)} 
                    checked={price === "0-500"}/>
                    <span className="checkmark"></span>
                    <span className="label_radio">
                        Under 500
                    </span>
                    </label>
                    <label className="container_radio">
                        <input 
                        type="radio" 
                        value={"1000-3000"} 
                        onChange={(e) => setPrice(e.target.value)} 
                        checked={price === "1000-3000"}
                        />
                        <span className="checkmark"></span>
                        <span className="label_radio">
                            1000 to 3000
                        </span>
                    </label>
                    <label className="container_radio">
                        <input 
                        type="radio" 
                        value={"4000-10000"}
                        onChange={(e) => setPrice(e.target.value)} 
                        checked={price === "4000-10000"}
                        />
                        <span className="checkmark"></span>
                        <span className="label_radio">
                            Above 4000
                        </span>
                    </label>
                </div>
                </div>
                }
            </div>
            <div className="speration-top">
                <div className="main_side_bar_second">
                <button onClick={() => setOpenDropRating(!openDropRating)}>
                    <span style={{color:"black", fontWeight:400, fontSize:"16px"}}>RATING</span>
                    {openDropRating ? 
                        <ArrowDropUp style={{color:"grey",fontSize:"30px", marginTop:"-5px"}}/> :
                        <ArrowDropDown style={{color:"grey",fontSize:"30px", marginTop:"-5px"}}/>
                    }
                </button>
                </div>
                {openDropRating && <div>
                <div className="radio_selector">
                    {ratingArray?.map(d => 
                     <label className="container_radio" key={d}>
                        <input 
                        type="radio"
                        value={d} 
                        onChange={(e) => {
                            setRating(e.target.value)
                        }} 
                        checked={parseInt(ratings) === d}/>
                        <span className="checkmark"></span>
                        <span className="label_radio">
                            <Rating name="read-only" value={d} readOnly />
                        </span>
                     </label>
                    )}
                </div>
                </div>
                }
            </div>
            <button className='clearFilter' onClick={() => clearFilter()}>Clear filter</button>
           </div>
    );
}

export default Sidebar;