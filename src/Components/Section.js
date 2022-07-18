import React from "react";
import "./Section.css";
import cloudRain from "../images/cloudRain.svg";
import cloudy from "../images/cloudy.svg";
import rain from "../images/rain.svg";
import thunderstorm from "../images/thunderstorm.svg";
import sunny from "../images/sunny.svg";
import "./BottomSection.css";
import NearMeIcon from "@mui/icons-material/NearMe";
import ProgressBar from "react-animated-progress-bar";
import BottomSection from "./BottomSection";

function Section(props) {
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
            style={{ width: "50px", height: "50px", marginTop: "0px" }}
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
            style={{ width: "50px", height: "50px", marginTop: "1px" }}
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
            style={{ width: "50px", height: "50px", marginTop: "2px" }}
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
      <div id="BottomSection">
        <h1>Today's Highlights</h1>

        <div id="card-conatiner">
          {/* //card1 */}
          <div className="card ">
            <h3>Wind Status</h3>
            <div className="text-wrapper">
              <span style={{ fontWeight: "bolder", fontSize: "50px" }}>
                {props.currentWeather.wind_speed}
              </span>
              <span style={{ fontSize: "20px", fontWeight: "600" }}>mph</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <NearMeIcon
                style={{
                  width: "15px",
                  height: "15px",
                  backgroundColor: "grey",
                  borderRadius: "50%",
                  padding: "2px",
                }}
              />
              <h5 style={{ marginLeft: "5px" }}>
                {props.currentWeather.wind_dir}
              </h5>
            </div>
          </div>
          {/* //card2 */}
          <div className="card">
            <h3>Humidity</h3>
            <div className="text-wrapper">
              <span style={{ fontWeight: "bolder", fontSize: "50px" }}>
                {props.currentWeather.humidity}
              </span>
              <span style={{ fontSize: "30px", fontWeight: "400" }}>%</span>
            </div>
            <div style={{ marginLeft: "70px" }}>
              <ProgressBar
                width="230px"
                height="10px"
                rect
                fontColor="gray"
                percentage={props.currentWeather.humidity}
                rectPadding="1px"
                rectBorderRadius="20px"
                trackPathColor="transparent"
                bgColor="#333333"
                trackBorderColor="grey"
              />
            </div>
          </div>
          {/* //card3 */}
          <div className="card cardBottom">
            <h3>Visibility</h3>
            <div className="text-wrapper">
              <span style={{ fontWeight: "bolder", fontSize: "50px" }}>
                {props.currentWeather.visibility}
              </span>
              <span
                style={{
                  fontSize: "30px",
                  fontWeight: "600",
                  marginLeft: "6px",
                }}
              >
                miles
              </span>
            </div>
          </div>
          {/* //card4 */}
          <div className="card cardBottom">
            <h3>Air Pressure</h3>
            <div className="text-wrapper">
              <span style={{ fontWeight: "bolder", fontSize: "50px" }}>
                {props.currentWeather.pressure}
              </span>
              <span
                style={{
                  fontSize: "30px",
                  fontWeight: "600",
                  marginLeft: "6px",
                }}
              >
                mb
              </span>
            </div>
          </div>
        </div>
        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
            textDecoration: "underline",
            fontSize: "10px",
          }}
        >
          Contributed by Krutika Jichkar on devChallanges.io
        </p>
      </div>
    </div>
  );
}

export default Section;
