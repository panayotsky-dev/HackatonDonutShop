import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom' 
import { Typewriter  } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { data } from "../components/data";
import MenuTemplate from '../components/MenuTemplate';
import styles from "./Preparation.css"


 
console.log(MenuTemplate)
let [dOne,dTwo,dTree,dFour] = data;
const Preparation = () =>(  
 <div className="base prep">
    <div className="wrapper">
     <div className="prep-bg-cont">
        <motion.div className="prep-page-bg"
          
          initial={{ y:0}}
          whileInView={{y:+1026}}
          transition={{ duration:5}}></motion.div>
     </div>

     <div className="prep-cont">
        <motion.div className="prep-page-donut" src={dTree.donutImage} alt="donut2"
        animate={{ rotate: 360 }}
        transition={{
          scale: 1,
          repeat: Infinity,
          repeatType: "",
          duration: 5,}}
          initial={{
              scale: 1,
          }}>
        <img className="prep-page-donut-img" src={dTree.donutImage} alt={dTree.donutName}/>
        </motion.div>  
      </div> 

      <div className="prep-title-cont">
        <div className="prep-big-title"><Typewriter className='prep-big-title'
        words={['Preparation']}
            loop={true}
            cursor
            cursorStyle='...'/> </div>  
	      </div>
      </div>    


  </div>
);

  
export default Preparation

// {data.map(donut => console.log(donut.clicked)(
          
//   <motion.div className="row" key={donut.donutId}  >
//     <div className="aside aside-1">
//       <motion.h2 className="menu-donut-title" 
//       whileHover={{ color:"#e198b5",scale:1.05,}}
//       transition={{type:"spring", stiffness:100}}
//       onClick={(event) => this.showDescription(event,donut.price)}
//       >                  
//         {donut.donutName}
//       </motion.h2>
//       </div>

//       <div className="main">
//       <motion.img 
//       className="menu-donut"
//       id={donut.donutId}   
//       src={donut.donutImage} 
//       alt={donut.donutName} 
//       onClick={(event) => this.handleClick(event, donut.donutImage,donut.donutName, donut.price,donut.clicked = "yes" )}
//       animate={{ rotate: 180 }}
//       transition={{
//         boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
//         scale: 1,
//         repeat: Infinity,
//         repeatType: "reverse",
//         duration: 2,}}
//         initial={{
//             scale: 1,
//         }}
//         whileHover={{
//             scale: 1.1,
//             transition: { duration: 0.3 },
                    
//           }}    
//             whileTap={{ scale: 0.95 }}
//       />
//       </div>
//   </motion.div>

// ))}




