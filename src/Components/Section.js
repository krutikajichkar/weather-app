import React from "react";
import "./Section.css";
import cloudRain from "../images/cloudRain.svg";
import cloudy from "../images/cloudy.svg";
import rain from '../images/rain.svg';
import thunderstorm from '../images/thunderstorm.svg'
import sunny from '../images/sunny.svg'
import BottomSection from "./BottomSection";

function Section() {
  return (
    <div id="section-div">
      <div
        style={{
          display: "flex",
          width: "800px",
          marginRight: "auto",
          marginLeft: "auto",
          justifyContent: "flex-end",
        }}
      >
        <p className="degree">°C</p>
        <p className="degree">°F</p>
      </div>

      <div id="miniCard-wrapper">
        <div className="Daywise-weather">
          <p style={{ fontWeight: "600" }}>Tomorrow</p>
          <img
            style={{ width: "70px", height: "70px"  }}
            src={cloudRain}
            alt="cloud-rain"
          />
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div style={{ fontWeight: "600" }}>
              <span className="num-temp">15</span>
              <span className="num-celcius">°C</span>
            </div>
            <div>
              <span className="num-temp">15</span>
              <span className="num-celcius">°C</span>
            </div>
          </div>
        </div>

        <div className="Daywise-weather">
          <p style={{ fontWeight: "600" }}>Tomorrow</p>
          <img
            style={{ width: "50px", height: "50px",marginTop:'0px' }}
            src={cloudy}
            alt="cloud-rain"
          />
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div style={{ fontWeight: "600" }}>
              <span className="num-temp">15</span>
              <span className="num-celcius">°C</span>
            </div>
            <div>
              <span className="num-temp">15</span>
              <span className="num-celcius">°C</span>
            </div>
          </div>
        </div>

        <div className="Daywise-weather">
          <p style={{ fontWeight: "600" }}>Tomorrow</p>
          <img
            style={{ width: "50px", height: "50px" ,marginTop:'1px' }}
            src={rain}
            alt="cloud-rain"
          />
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div style={{ fontWeight: "600" }}>
              <span className="num-temp">15</span>
              <span className="num-celcius">°C</span>
            </div>
            <div>
              <span className="num-temp">15</span>
              <span className="num-celcius">°C</span>
            </div>
          </div>
        </div>

        <div className="Daywise-weather">
          <p style={{ fontWeight: "600" }}>Tomorrow</p>
          <img
            style={{ width: "50px", height: "50px" , marginTop:'2px' }}
            src={thunderstorm}
            alt="cloud-rain"
          />
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div style={{ fontWeight: "600" }}>
              <span className="num-temp">15</span>
              <span className="num-celcius">°C</span>
            </div>
            <div>
              <span className="num-temp">15</span>
              <span className="num-celcius">°C</span>
            </div>
          </div>
        </div>

        <div className="Daywise-weather">
          <p style={{ fontWeight: "600" }}>Tomorrow</p>
          <img
            style={{ width: "70px", height: "70px" }}
            src={sunny}
            alt="cloud-rain"
          />
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div style={{ fontWeight: "600" }}>
              <span className="num-temp">15</span>
              <span className="num-celcius">°C</span>
            </div>
            <div style={{ color: "grey" }}>
              <span className="num-temp">15</span>
              <span className="num-celcius">°C</span>
            </div>
          </div>
        </div>
      </div>
      <BottomSection/>
      
    </div>
  );
}

export default Section;
