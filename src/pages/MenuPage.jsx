
import React from 'react'
import { data } from '../components/data'
// import MarbleMagic from '../donuts/MarbleMagic'
// import SkyShaped from '../donuts/SkyShaped'
// import TrueBlood from '../donuts/TrueBlood'
// import UnicornDust from '../donuts/UnicornDust'
import MenuTemplate from "../components/MenuTemplate"
import style from "./MenuPage.css";

// data.map(element =>{MenuPage(element) });

export default function MenuPage(prop) {
 
    // console.log(prop)
  return (
    <div className="base menu-bg">
    <div className="wrapper">

    <div className="menu-div">
        <div className="menu-small-title">The</div>
        <div className="menu-big-title">Menu</div>

            {/* <SkyShaped />
            <MarbleMagic />
            <TrueBlood />
            <UnicornDust /> */}
          
            <MenuTemplate />
 
    </div>

    </div>
    </div> 
  )
}



       
       
