import React from 'react';
import logo from '../logo.png';
import './header.css';
class AppHeader extends React.Component{
    render(){
        return(
            <div className='container py-3 'style={{backgroundColor:'#1b1b28'}}>
                <div className='row'>
                    <div className='col-md-4  text-white text-center'>
                        <img src={logo} width='50%' alt='condenest'/>
                        <h2 >Data Status</h2>
                    </div>                    
                               
                    <div className='col-md-4' >
                        <div className='card text-white' style={{marginTop:'15px',backgroundColor:'#373749'}}>
                            <div  style={{ padding:'0 5px',height:'40px',display: 'flex',justifyContent:'space-around',alignItems:'center'}}>
                                <span>UPDATED</span>
                                <span>13/1/19 15:55</span>                
                            </div>                   
                        </div>
                    </div>   
                    <div className='col-md-4 text-white'>
                        <div className='row'>
                            <div className="col-6 my-2" >
                                    <span className='greenCircle mr-2' ></span>
                                    <span >Complete</span>
                            </div>     
                            <div className="col-6 my-2">
                                <span className='yellowCircle mr-2'></span>
                                <span >Quality Alert</span>  
                            </div>                       
                        </div>  
                        <div className='row'>
                            <div className="col-6" >
                                <span className='orangeCircle mr-2'></span>
                                <span >Partial Load</span>
                            </div>     
                            <div className="col-6">
                                <span className='redCircle mr-2'></span>
                                <span  >No Load</span>  
                            </div>                       
                        </div> 
                    </div>                                                  
                </div> 
            </div>
        )
    }
} 

export default AppHeader;