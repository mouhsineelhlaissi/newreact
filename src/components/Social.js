import React from 'react'

import App from './App'

import socialItem from './socialItem'

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