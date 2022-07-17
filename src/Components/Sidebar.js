import React from "react";
import "./Sidebar.css";
import sunny from "../images/sunny.svg";
import { MyLocation } from "@mui/icons-material";
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Sidebar(props) {
  return (
    <div id="sidebar-div">
      <div id="icon-div">
        <button onClick={props.crossHandler}>Search for Places</button>
        <MyLocation
          style={{
            width: "35px",
            height: "35px",
            backgroundColor: "rgb(96, 96, 96)",
            borderRadius: "50%",
            padding: "6px",
          }}
        />
      </div>
      <img src={sunny} alt="sunny-cloud" />

      <div style={{textAlign:'center'}}>
        <div id="temperature">
          <span id="numeric-value">15</span>
          <span id="celcius">°C</span>
        </div>

        <h4
          style={{ marginTop: "50px",marginBottom:'50px', fontSize: "20px" }}
        >
          Shower
        </h4>

        <p className='footer'>Today . Fri, 5 Jun</p>

         <div id="span-div">
         <LocationOnIcon style={{color:'grey'}}/>
          <p style={{marginLeft:'5px'}} className='footer'>Helinsiki</p>
         </div>
        
      </div>
    </div>
  );
}

export default Sidebar;
