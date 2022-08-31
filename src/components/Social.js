import React from 'react'

import socialItem from './socialItem'

import App from './App'



function Social(){
    return(
      
        <ul className="list-group">
           <socialItem media='facebook'/>
           <socialItem media='instagram'/>
           <socialItem media='youtube'/>

<br/>
           <label> <input type="submit" value="submit"/></label>
           
        </ul>
     


    );
}
export default Social ;