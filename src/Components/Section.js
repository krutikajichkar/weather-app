import React from "react";
import "./Section.css";
import cloudRain from "../images/cloudRain.svg";
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
            style={{ width: "70px", height: "70px" }}
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
            style={{ width: "70px", height: "70px" }}
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
            style={{ width: "70px", height: "70px" }}
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
            style={{ width: "70px", height: "70px" }}
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
            style={{ width: "70px", height: "70px" }}
            src={cloudRain}
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
