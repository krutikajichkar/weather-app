
import React, { useEffect } from 'react'
import './SidebarHide.css'
import ClearIcon from '@mui/icons-material/Clear';
//import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { countryName } from './redux/action';
function SidebarHide(props) {
  const [location, setlocation] = useState('Nagpur')
  const dispatch = useDispatch()
 
  
  return (
   <div id='main-div'>
    <div id='sidebarHide-wrapper'>
     <div style={{textAlign:'right',cursor:'pointer'}}>
     <ClearIcon onClick={props.crossHandler} />
     </div>
     
     <div id='searchbar-wrapper'>
     <div id="search-icon-wrapper">
      <input type="text"  placeholder='Search Location'  onChange={(e) => setlocation(e.target.value)}/>
       {/* <SearchIcon id='search-icon' />  */}
     </div>
     <button id='search-btn' onClick={() => dispatch(countryName(location))}>Search</button>
     </div>
    </div>
   
   </div>
  )
}

export default SidebarHide