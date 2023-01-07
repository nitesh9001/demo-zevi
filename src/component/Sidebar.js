import React,{useState, useEffect} from 'react'
import ArrowDropDown from '@mui/icons-material/KeyboardArrowDown';
import ArrowDropUp from '@mui/icons-material/KeyboardArrowUp';
import { Rating } from '@mui/material';

const Sidebar = (props) => {
    const [filterSize, setFilterSize] = useState([]);
    const [openDropBrand, setOpenDropBrand] = useState(true);
    const [openDropPrice, setOpenDropPrice] = useState(true);
    const [openDropRating, setOpenDropRating] = useState(true);
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [ratings, setRating] = useState('');

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
                    <label className="container_radio">
                        <input 
                            type="radio" 

                            value={"mango"} 
                            onChange={(e) => setBrand(e.target.value)} 
                            checked={brand === "mango"}/>
                            <span className="checkmark"></span>
                            <span className="label_radio">
                                Mango
                            </span>
                    </label>
                    <label className="container_radio">
                        <input 
                        type="radio" 
                        value={"h&m"} 
                        onChange={(e) => setBrand(e.target.value)} 
                        checked={brand === "h&m"}
                        />
                        <span className="checkmark"></span>
                        <span className="label_radio">
                            H & M
                        </span>
                    </label>
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
                    value={"500"} 
                    onChange={(e) => setPrice(e.target.value)} 
                    checked={price === "500"}/>
                    <span className="checkmark"></span>
                    <span className="label_radio">
                        Under 500
                    </span>
                    </label>
                    <label className="container_radio">
                        <input 
                        type="radio" 
                        value={"1000"} 
                        onChange={(e) => setPrice(e.target.value)} 
                        checked={price === "1000"}
                        />
                        <span className="checkmark"></span>
                        <span className="label_radio">
                            1000 TO 3000
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
                    <label className="container_radio">
                    <input 
                    type="radio"
                    value={"5"} 
                    onChange={(e) => setRating(e.target.value)} 
                    checked={ratings === "5"}/>
                    <span className="checkmark"></span>
                    <span className="label_radio">
                        <Rating name="read-only" value={5} readOnly />
                    </span>
                    </label>
                    <label className="container_radio">
                        <input 
                        type="radio" 
                        value={"4"} 
                        onChange={(e) => setRating(e.target.value)} 
                        checked={ratings === "4"}
                        />
                        <span className="checkmark"></span>
                        <span className="label_radio">
                            <Rating name="read-only" value={4} readOnly />
                        </span>
                    </label>
                    <label className="container_radio">
                        <input 
                        type="radio" 
                        value={"3"} 
                        onChange={(e) => setRating(e.target.value)} 
                        checked={ratings === "3"}
                        />
                        <span className="checkmark"></span>
                        <span className="label_radio">
                            <Rating name="read-only" value={3} readOnly />
                        </span>
                    </label>
                    <label className="container_radio">
                        <input 
                        type="radio" 
                        value={"2"} 
                        onChange={(e) => setRating(e.target.value)} 
                        checked={ratings === "2"}
                        />
                        <span className="checkmark"></span>
                        <span className="label_radio">
                            <Rating name="read-only" value={2} readOnly />
                        </span>
                    </label>
                    <label className="container_radio">
                        <input 
                        type="radio" 
                        value={"1"} 
                        onChange={(e) => setRating(e.target.value)} 
                        checked={ratings === "1"}
                        />
                        <span className="checkmark"></span>
                        <span className="label_radio">
                            <Rating name="read-only" value={1} readOnly />
                        </span>
                    </label>
                </div>
                </div>
                }
            </div>
           </div>
    );
}

export default Sidebar;