
import React from 'react'
import './SidebarHide.css'
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect } from 'react';
function SidebarHide(props) {
 // const [location, setlocation] = useState('Nagpur')

 
  
  return (
   <div id='main-div'>
    <div id='sidebarHide-wrapper'>
     <div style={{textAlign:'right',cursor:'pointer'}}>
     <ClearIcon onClick={props.crossHandler} />
     </div>
     
     <div id='searchbar-wrapper'>
     <div id="search-icon-wrapper">
      {/* <input type="text"  placeholder='Search Location' value={location} onChange={(e) => setlocation(e.target.value)}/> */}
       <SearchIcon style={{position:'absolute',left:'94px',top:'84px',width:'20px'}}/> 
     </div>
     <button id='search-btn' onClick={props.crossHandler}>Search</button>
     </div>
    </div>
   </div>
  )
}

export default SidebarHide