import React from "react";
import Dashboard from "./Dashborad";
import Header from "./Header";
import './styles/Header.css'
import { Outlet } from "react-router-dom";
const Profile = () => {
    return (
      <div className="profile">
        <div className="content
        ">
        <Dashboard/>
        </div>
       <div className="header">
       <Header/>
       </div>
      </div>
    )
  };
  export default Profile;