import React from 'react';
import './Status.css';
const Status =(props)=>{
    //console.log(props.star>0)
    return (
        <div className='mr-1'>
            <div className={props.color} >
                {props.star>0 &&<i className="material-icons">
                    star
                </i>}
            </div>
            <div className={props.star>0 ?'text-white':'text-secondary'}> {props.date}</div>
        </div>
    )
}

export default Status;