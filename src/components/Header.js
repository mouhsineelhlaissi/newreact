import React from 'react'

import App from './App'

function Header(){
    let title="";
    const client="design";
    if(client==="design"){
        title="design is my life"
    }else{
        title="programming is my life"
    }
    return(
        
     <div id="head">
    <h1 >
        {title}
    </h1>
    </div>
    )
}
export default Header ;