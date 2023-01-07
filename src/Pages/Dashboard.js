import React, { useEffect, useState } from 'react'
import Sidebar from '../component/Sidebar';
import Card from '../component/Card';
import { arryOfproduct } from '../Utils/Constant';
import { useDispatch, useSelector } from "react-redux";
import { PRODUCT_LIST } from '../Redux/Slice/Product';
import FilterListIcon from '@mui/icons-material/FilterList';

const Dashboard = () => {
    let productData = useSelector(state => state.product?.data);
    const dispatch = useDispatch();
    const [openFilter, setFilter] = useState(false);
    useEffect(() => {
      dispatch(PRODUCT_LIST({data: arryOfproduct}))
    },[]);

    const handleFilter = () => {};
    return (
        <div className="main_wrapper_content">
            <div className="main_wrapper_sidebar">
                <Sidebar handleFilter={handleFilter}/>
            </div>
            <div className="main_wrapper_sidebar_mb">
               <b>Trending Products</b>
               <FilterListIcon style={{fontSize: 30}} onClick={() => setFilter(!openFilter)}/>
               {openFilter && <div className='drop-down-filter'>
                <Sidebar handleFilter={handleFilter}/>
               </div> }
            </div>
            <div className="main_card_wrap_section"> 
              <div className="main_card_wrap">
                {productData && productData?.length !== 0 ? 
                  productData?.map((data, i) => <Card key={data?.id} data={data} /> ) :
                  <h1>No data found</h1> 
                }
              </div>
            </div>
        </div>
 )
}

export default Dashboard