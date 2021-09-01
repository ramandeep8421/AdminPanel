import React from 'react';
import './navbar.css'
import {NotificationsNone, Language, Settings} from '@material-ui/icons';

export default function Navbar(){
    return(
        <div className = "navbar">
            <div className="navbarWrapper">
                <div className="Left">
                  <span className="logo">HawkAnalytics</span>
                </div>
                <div className="Right">
                    <div className="navbarIconsContainer">
                       <NotificationsNone/>
                       <span className = "topIconBadge">2</span>
                    </div>
                    <div className="navbarIconContainer">
                       <Language />
                     
                    </div>
                    <div className="navbarIconContainer">
                     <Settings />
                    </div>
                    <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
                </div>
                
            </div>
        </div>
    )
}