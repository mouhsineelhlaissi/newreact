import React from 'react'


function socialItem(mouhsine){
    return(
        <li className=" list-group-item" ><input type="checkbox" id="{mouhsine.media}"  />
        <label for="{mouhsine.media}">{mouhsine.media}</label>
  </li>
      )
}

export default socialItem 