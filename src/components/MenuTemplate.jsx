import React, { Component , require, useState} from 'react'
import { motion } from "framer-motion";
import { data } from './data';
// import styles from "./MenuPage.css";




export default function MenuTemplate () {  
  let showDescription = (event,price) => {
    // {price}
  }
  
    let handleClick = (event,src,className,price) => {
        console.log(src,className,price)
        window.location.pathname = '/payment'
        clicked.push(src)
        console.log(clicked)
    }
    
    return (
      <>
        {data.map(donut => (
          
            <motion.div className="row" key={donut.donutId}  >
              <div className="aside aside-1">
                <motion.h2 className="menu-donut-title" 
                whileHover={{ color:donut["color"],scale:1.05,}}
                transition={{type:"spring", stiffness:100}}
                onClick={(event) => showDescription(event,donut.price)}
                >                  
                  {donut.donutName}
                </motion.h2>
                </div>

                <div className="main">
                <motion.img 
                className="menu-donut"
                
                id={donut.donutId}   
                src={donut.donutImage} 
                alt={donut.donutName} 
                onClick={(event) => handleClick(event, donut.donutImage,donut.donutName, donut.price,)}
                animate={{ rotate: 180 }}
                transition={{
                  
                  scale: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2,}}
                  initial={{
                      scale: 1,
                  }}
                  whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.3 },
                              
                    }}    
                      whileTap={{ scale: 0.95 }}
                />
                </div>
            </motion.div>
     
        ))}
      </>
      
    )
  }



