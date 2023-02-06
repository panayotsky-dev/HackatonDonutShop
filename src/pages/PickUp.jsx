import React from 'react';
import { motion } from "framer-motion";
import { data } from "../components/data";
let [dOne,dTwo,dTree,dFour] = data;
import styles from "./PickUp.css";

const PickUp = () => (
<div className="base done">
<div className="wrapper">

<div class="pickup-cont">
    <motion.div className="pickup-page-donut" src={dTree.donutImage} alt="donut2"
    whileHover={{ scale:1.05,}}
    transition={{type:"spring", stiffness:100}}
      initial={{ y: -2000,x:5000 }}
      animate={{ y: 0 ,x:0}}>
        
      <img className="pickup-page-donut-img" src={dTree.donutImage} alt={dTree.donutName}/>
    </motion.div>
</div>


  <div class="pickup-title-cont"> 
    <motion.div className="payment-big-title2"
    whileHover={{ scale:1.05,}}
    transition={{type:"spring", stiffness:100}}
     initial={{ x: "-1000px" }}
     animate={{ x: "0" }}>You can now come <br></br>and pick up <br></br> your amazing Donut! </motion.div>
</div>

    <div class="pickup-btn-cont">  
    <a href='/'> <motion.button className='done-btn' type="button"
    initial={{ y: -1000 }}
    animate={{ y: 0 }}
    whileHover={{ scale:1.15,}}
    transition={{type:"spring", stiffness:100}}
    >Done</motion.button> </a>
</div>

</div>
</div>
);

export default PickUp