
import React from "react";
import "./style.css";
import Tabs from "./Tabs";
const Main = ({ classData }) => {
  
  return (
    <div className="main">
      <div className="main__wrapper">
        <div className="main__content">
          <div className="main__wrapper1">
            <div className="main__bgImage">
              <div className="main__emptyStyles" />
            </div>
            <div className="main__text">
              <h1 className="main__heading main__overflow">
                {classData.className}
              </h1>
              <div className="main__section main__overflow">
                {classData.section}
              </div>
              <div className="main__wrapper2">
                <em className="main__code">Class Code :</em>
                <div className="main__id">{classData.id}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="main__announce">
          {/* <div className="main__status">
            <p>Upcoming</p>
            <p className="main__subText">No work due</p>
          </div> */}
          <Tabs classData={classData}/>
          
        </div>
      </div>
    </div>
  );
};

export default Main;
