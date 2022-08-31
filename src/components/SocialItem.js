import React from 'react'


function SocialItem(mouhsine){
    return(
        <li className=" list-group-item" >
                    <img src={mouhsine.img}/>

            <input type="checkbox" id="{mouhsine.media}"  />
        <label fohtmlForr="{mouhsine.media}">{mouhsine.media}</label>
  </li>
      )
}

export default SocialItem 