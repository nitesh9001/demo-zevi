import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import LOGO from '../Assets/Images/logo.png';

function Header(props) {
    return (
        <>
        <div className="main-nav-wrapper">
            <div className= "nav-logo">
                <div className="search_box">
                    <input type="search" placeholder="Search" />
                    <SearchIcon style={{color:"rgba(147, 147, 147, 0.789)",fontSize:"30px", margin:"6px 10px 6px 5px"}}/>
                </div>
                <img className="logo_image" src={LOGO} alt="Logo" />
            </div>
        </div>
       </>
    )
}

export default Header