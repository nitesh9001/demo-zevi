import React, { useEffect } from 'react'
import Sidebar from '../component/Sidebar';
import Card from '../component/Card';
import { arryOfproduct } from '../Utils/Constant';
import { useDispatch, useSelector } from "react-redux";
import { PRODUCT_LIST } from '../Redux/Slice/Product';

const Dashboard = () => {
    let productData = useSelector(state => state.product?.data);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(PRODUCT_LIST({data: arryOfproduct}))
    },[]);

    console.log(productData)

    const handleFilter = () => {};
    return (
        <div className="main_wrapper_content">
            <div className="main_wrapper_sidebar">
                <Sidebar handleFilter={handleFilter}/>
            </div>
            <div className="main_card_wrap_section"> 
              <div className="main_card_wrap">
                {productData && productData?.length !== 0 && productData?.map((data, i) => <Card key={data?.id} data={data} /> )}
              </div>
            </div>
        </div>
 )
}

export default Dashboard