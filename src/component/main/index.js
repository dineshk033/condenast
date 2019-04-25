import React from 'react';

import Card from '../main/Card';
import {userEngagement,adDelivery,consumerMarketing} from '../../list/list';
class Main extends React.Component{
    userEngagementJSX(){
        return userEngagement.map((el,idx)=><Card key={idx}{...el}/>)
    }
    adDeliveryJSX(){
        return adDelivery.map((el,idx)=><Card key={idx}{...el}/>)
    } 
    consumerMarketingJSX(){
        return consumerMarketing.map((el,idx)=><Card key={idx}{...el}/>)
    }
    render(){
        return(
            <div className='row'>
                <div className="col-md-4">
                <h3 className='text-white'> User Engagement</h3>
                <hr className='bg-white' />
                {this.userEngagementJSX()}
                </div>   
                <div className="col-md-4">
                <h3 className='text-white'> Ad Delivery</h3>
                <hr className='bg-white' />
                {this.adDeliveryJSX()}
                </div> 
                <div className="col-md-4">
                <h3 className='text-white'> Consumer Marketing</h3>
                <hr className='bg-white' />
                {this.consumerMarketingJSX()}
                </div>   
            </div>
        )
    }
}

export default Main;