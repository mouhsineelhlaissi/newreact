import React from 'react'

import App from './App'

function Social(){
    return(
      
        <ul className="list-group">
            <li className=" list-group-item" ><input type="checkbox" id="facebook"  />
                 <label for="facebook">facebook</label>
            </li>

            <li className="list-group-item"><input type="checkbox" id="twitter" />
                 <label for="twitter">twitter</label>
            </li>

            <li className="list-group-item"><input type="checkbox" id="youtube"  />
                  <label for="youtube">youtube</label>  
             </li> 
<br/>
           <label> <input type="submit" value="submit"/></label>
           
        </ul>
     


    );
}
export default Social ;