import React from "react";
import "./LeftSidebar.css";
import { NavLink } from "react-router-dom";
import Globe from "../../assets/Globe.svg";
import Job from "../../assets/job.svg";
import Home from "../../assets/home.svg";

const LeftSidebar = () => {

  return (
    <div className="left-sidebar">
      <nav className="side-nav">
        <button className="nav-btn">
          <NavLink to="/" className="side-nav-links" activeclassname="active">
          <img src={Home} alt="Globe" />
            <p style={{ paddingLeft: "10px" }}>Home</p>
          </NavLink>
        </button>
        <div className="side-nav-div">
          <div>
            <p>PUBLIC</p>
          </div>
          <button className="nav-btn">
            <NavLink
              to="/Questions"
              className="side-nav-links"
              activeclassname="active"
            >
              <img src={Globe} alt="Globe" />
              <p style={{ paddingLeft: "10px" }}> Questions </p>
            </NavLink>
          </button>
          <button className="nav-btn">
            <NavLink
              to="/Tags"
              className="side-nav-links"
              activeclassname="active"
              style={{ paddingLeft: "40px" }}
            >
              <p>Tags</p>
            </NavLink>
          </button>
          <button className="nav-btn">
            <NavLink
              to="/Users"
              className="side-nav-links"
              activeclassname="active"
              style={{ paddingLeft: "40px" }}
            >
              <p>Users</p>
            </NavLink>
          </button>

        </div>

        <div className="side-nav-div">
          <div style={{paddingLeft:"15px"}}>
          <img width="18" height="18" src="https://img.icons8.com/ios/50/user--v1.png" alt="user--v1"/> Collective
          </div>
        </div>

        <div className="side-nav-div">          
          <button className="nav-btn">
            <NavLink              
             className="side-nav-links"
            >
             <img src={Job} alt="Jobs" />
              <p style={{ paddingLeft: "10px" }}> Jobs </p>
            </NavLink>
          </button>         
        </div>
        
      </nav>
    </div>
  );
};

export default LeftSidebar;
