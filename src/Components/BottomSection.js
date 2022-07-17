import React from "react";
import "./BottomSection.css";
import NearMeIcon from "@mui/icons-material/NearMe";
import ProgressBar from "react-animated-progress-bar";
function BottomSection() {
  return (
    <div id="BottomSection">
      <h1>Today's Highlights</h1>
      
      <div id="card-conatiner">
      {/* //card1 */}
        <div className="card ">
          <h3>Wind Status</h3>
          <div className="text-wrapper">
            <span style={{ fontWeight: "bolder", fontSize: "50px" }}>7</span>
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
            <h5 style={{ marginLeft: "5px" }}>wsw</h5>
          </div>
        </div>
        {/* //card2 */}
        <div className="card">
          <h3>Humidity</h3>
          <div className="text-wrapper">
            <span style={{ fontWeight: "bolder", fontSize: "50px" }}>85</span>
            <span style={{ fontSize: "30px", fontWeight: "400" }}>%</span>
          </div>
         <div style={{marginLeft:'70px'}}>
         <ProgressBar
            width="250px"
            height="10px"
            rect
            fontColor="gray"
            percentage="84"
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
            <span style={{ fontWeight: "bolder", fontSize: "50px" }}>6,4</span>
            <span
              style={{ fontSize: "30px", fontWeight: "600", marginLeft: "6px" }}
            >
              miles
            </span>
          </div>
        </div>
        {/* //card4 */}
        <div className="card cardBottom">
          <h3>Air Pressure</h3>
          <div className="text-wrapper">
            <span style={{ fontWeight: "bolder", fontSize: "50px" }}>998</span>
            <span
              style={{ fontSize: "30px", fontWeight: "600", marginLeft: "6px" }}
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
  );
}

export default BottomSection;
