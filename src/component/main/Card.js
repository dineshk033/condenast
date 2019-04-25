import React from 'react';

import '../header.css';
import Status from './Status';

const Card=(props)=>{
  const nstar=props.statusByDate.findIndex(el=>el.status==='Schedule');
  
  const renderList= props.statusByDate.map((el,idx)=>{ 
    let star;
    nstar===idx+1?star=nstar-1:star=-1;   
    return <Status key={idx} star={star} color={el.status} date={el.date}/>
  }) ;
    
    return(
        <>            
            <div className='card mb-3' style={{backgroundColor:'#373749'}}>
                <div className='card-header text-white' >{props.name}</div>
                <div className='card-body 'style={{backgroundColor:'#1b1b28'}} >
                    <div style={{display:'flex'}}>
                    {renderList}                   
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;