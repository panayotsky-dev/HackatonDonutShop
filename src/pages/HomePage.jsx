import styled from "styled-components";
import React from 'react'
import { motion } from "framer-motion";
import menuTemplate from "../components/MenuTemplate";
import { data } from "../components/data";
import MarbleMagic from "../assets/marble_magic.svg"
import style from "./HomePage.css";

// console.log(data)
let [dOne,dTwo,dTree,dFour] = data;
// console.log(dOne.donutImage)


export default function HomePage() {
    
  return (
    <div className="base home">
       <div className="wrapper">
    <div className="start-page-bg"></div>
    <motion.div className="donut1" src={dFour.donutImage} alt="donut1" 
        initial={{ y: -2000 }}
        animate={{ y: 0 }}>
        <img className="start-page-donut1" src={dFour.donutImage} alt={dFour.donutName}/>
    </motion.div>

    <motion.div className="start-page-donut2 donut2" src={dTree.donutImage} alt="donut2"
      initial={{ y: -2000,x:5000 }}
      animate={{ y: 0 ,x:0}}>
      <img className="start-page-donut2" src={dTree.donutImage} alt={dTree.donutName}/>
    </motion.div>

    <div className="title1">  <div className="start-small-title ">The</div></div> 

    <motion.div
      className="start-big-title title2"
      initial={{ x: "-1000px" }}
      animate={{ x: "0" }}
      >Donut <span className="shop">Shop</span> 
    </motion.div>
    <div className='button-cont' >
    <a href='/menu'>
       <motion.button className='start-btn' type="button" onTap="window.location.pathname = '/menu'"
          initial={{ y: -1000 }}
          animate={{ y: 0 }}
          whileTap={{scale:1.1}}
          whileHover={{ scale:1.15,}}
    transition={{type:"spring", stiffness:100}}
          > Start   </motion.button></a>
    </div>
    </div>
    </div>
  )
  
}
