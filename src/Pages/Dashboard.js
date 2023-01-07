import React,{ useEffect, useState } from 'react'
import Sidebar from '../component/Sidebar';
import Card from '../component/Card';
import { arryOfproduct } from '../Utils/Constant';

const Dashboard = () => {
    let productData = arryOfproduct;

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