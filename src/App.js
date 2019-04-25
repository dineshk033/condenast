import React from 'react';
import AppHeader from './component/header';
import Main from './component/main'
class App extends React.Component{
    render(){
        return <div style={{backgroundColor:'#1b1b28'}}>          
            <div className='container ' style={{backgroundColor:'#21212c'}}>
            <AppHeader/>
            <br/>
                <Main/>
            </div>
            <div className='card w-50 mx-auto'>Note: Logo and background details I'm not recieved correctly</div>
        </div>
    }
}

export default App;