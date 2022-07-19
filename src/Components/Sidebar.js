import React from "react";
import "./Sidebar.css";
import sunny from "../images/sunny.svg";
import { MyLocation } from "@mui/icons-material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState ,useEffect} from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

function Sidebar(props) {
  //  const [location, setlocation] = useState([]);
  //  const [currentdata, setcurrentdata] = useState([])
  //  const city = useSelector(state => state.city)
  // // setweatherData(weatherData);
  

  // useEffect(()=>{
  //   const getData = async() => {
  //     try{
  //       let url = `http://api.weatherstack.com/current?access_key=d6960de5bb7644304b29a83618d88fd8&query=${city}`
  //       let data = await fetch(url);
  //       let parseData = await data.json();
  //       setlocation(parseData.location)
  //       setcurrentdata(parseData.current)
       
  //     }
  //     catch(e){
  //       console.log(e.message)
  //     }
  //   }
  //   getData();
  // },[])
  
 
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
          <span id="numeric-value">{props.currentdata.temperature}</span>
          <span id="celcius">°C</span>
        </div>

        <h4
          style={{ marginTop: "50px",marginBottom:'50px', fontSize: "20px" }}
        >
          {props.currentdata.weather_descriptions}
        </h4>

        <p className='footer'>Today . Fri, 5 Jun</p>

         <div id="span-div">
         <LocationOnIcon style={{color:'grey'}}/>
          <p style={{marginLeft:'5px'}} className='footer'>{props.location.name}</p>
         </div>
         
        
      </div>
    </div>
  );
}




export default Sidebar;