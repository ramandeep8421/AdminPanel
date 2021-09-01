import React from 'react'
import "./widgetSm.css";
import { Visibility } from '@material-ui/icons';
import { Button } from '@material-ui/core';


export default function WidgetSm(){
    return (
        <div className="widgetSm">
          <span className="widgetSmTitle">New Join Members</span>
          <ul className="widgetSmList">
              <li className="widgetSmListItem">
                  <img src="https://i.ibb.co/5FgTQLY/unnamed.gif" alt ="" className="widgetSmImg"></img>
                  <div className="widgetSmUser">
                    <span className="widgetSmUsername">Ramandeep singh</span>
                    <span className="widgetSmUserTitle">Competitive programmer</span>
                  </div>
                  <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/>
                    Display
                  </button>
              </li>
              <li className="widgetSmListItem">
                  <img src="https://i.ibb.co/5FgTQLY/unnamed.gif" alt ="" className="widgetSmImg"></img>
                  <div className="widgetSmUser">
                    <span className="widgetSmUsername">Ramandeep singh</span>
                    <span className="widgetSmUserTitle">Competitive programmer</span>
                  </div>
                  <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/>
                    Display
                  </button>
              </li>
              <li className="widgetSmListItem">
                  <img src="https://i.ibb.co/5FgTQLY/unnamed.gif" alt ="" className="widgetSmImg"></img>
                  <div className="widgetSmUser">
                    <span className="widgetSmUsername">Ramandeep singh</span>
                    <span className="widgetSmUserTitle">Competitive programmer</span>
                  </div>
                  <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/>
                    Display
                  </button>
              </li>
              <li className="widgetSmListItem">
                  <img src="https://i.ibb.co/5FgTQLY/unnamed.gif" alt ="" className="widgetSmImg"></img>
                  <div className="widgetSmUser">
                    <span className="widgetSmUsername">Ramandeep singh</span>
                    <span className="widgetSmUserTitle">Competitive programmer</span>
                  </div>
                  <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/>
                    Display
                  </button>
              </li>
            </ul>
        </div>
    )
}