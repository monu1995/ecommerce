import React from 'react';
import {Route} from 'react-router-dom';
import DemoRoute2 from './demoroute2'

const DemoRoute1=({match})=>{
    console.log('MATCH',match);
    
    return(
        <div>
            <h2>DemoRoute1</h2>
            <Route exact path={`${match.path}/demoroute2`} component={DemoRoute2}/>
        </div>
    )
}

export default DemoRoute1;