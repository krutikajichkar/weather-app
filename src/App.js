import "./App.css";
import { useState, useEffect } from "react";
import Section from "./Components/Section";
import Sidebar from "./Components/Sidebar";
import SidebarHide from "./Components/SidebarHide";
import axios from "axios";
import { useSelector } from "react-redux/es/hooks/useSelector";


function App() {
  const [currentdata, setcurrentdata] = useState([]);
  const [location, setlocation] = useState([])
  const city = useSelector(state => state.city)

  const [show, setShow] = useState(false);
  const HidecrossHandler = () => {
    setShow(false);
  };
  const sidecrossHandler = () => {
    setShow(true);
  };
  
  useEffect(()=>{
    const getData = async() => {
      try{
        let url = `http://api.weatherstack.com/current?access_key=d6960de5bb7644304b29a83618d88fd8&query=${city}`
        let data = await fetch(url);
        let parseData = await data.json();
        setlocation(parseData.location)
        setcurrentdata(parseData.current)
       
      }
      catch(e){
        console.log(e.message)
      }
    }
    getData();
  },[])
  
  return (
    <div id="app-div">
      {show ? (
        <SidebarHide crossHandler={HidecrossHandler} />
      ) : (
        <Sidebar crossHandler={sidecrossHandler} currentdata={currentdata} location={location} />
      )}
      
      <Section  currentWeather={currentdata}/>
     
      
    </div>
  );
}

export default App;
