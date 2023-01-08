import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import LOGO from '../Assets/Images/logo.png';
import { arryOfproduct } from '../Utils/Constant';
import { useDispatch } from "react-redux";
import { PRODUCT_LIST } from '../Redux/Slice/Product';

function Header(props) {
    const dispatch = useDispatch();

    const onSearch  = (e) => {
        var filteredData = arryOfproduct;
        if(e.target.value){
          filteredData = filteredData.filter((d) => d.name.toLowerCase()?.includes(e.target.value?.toLowerCase()));
        }
        dispatch(PRODUCT_LIST({data: filteredData}));
    }
    return (
        <>
        <div className="main-nav-wrapper">
            <div className= "nav-logo">
                <div className="search_box">
                    <input type="search" placeholder="Search" onChange={(e) => onSearch(e)} />
                    <SearchIcon style={{color:"rgba(147, 147, 147, 0.789)",fontSize:"30px", margin:"6px 10px 6px 5px"}}/>
                </div>
                <img className="logo_image" src={LOGO} alt="Logo" />
            </div>
        </div>
       </>
    )
}

export default Header