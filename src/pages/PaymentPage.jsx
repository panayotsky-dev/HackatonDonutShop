import React from 'react';
import { motion } from "framer-motion";
import styles from "./PaymentPage.css";

const PaymentPage = () => (
 
   <div className="base pay">
     <div className="wrapper">

     <div className="t1">
        <motion.div className="donut-mid-title"
              initial={{ x: 5000 }}
              animate={{ x: 0 }}
              >You can</motion.div>
     </div>
     <div className="t2">
        <motion.div className="donut-small-title"
              initial={{ x: -5000 }}
              animate={{ x: 0 }}>Pay Us</motion.div>
     </div>    
     <div className="t3">
        <motion.div className="donut-big-title"
              initial={{ y: 5000 }}
              animate={{ y: 0 }}>Now</motion.div>
     </div>
      <div className="apple-container">
      <a href="/preparation"><motion.button className='apple-btn' type="button"
              whileTap={{scale:1.1}}
              initial={{x:50}}
              animate={{x:0}}
            //   animate={{ rotate: 180 }}
            //     transition={{
                  
            //       scale: 1,
            //       repeat: Infinity,
            //       repeatType: "reverse",
            //       duration: 2,}}
              whileHover={{ scale:1.05,}}
            transition={{type:"spring", stiffness:100}} ></motion.button></a>
      </div>

      <div className="gpay-container">
     <a href="/preparation"> <motion.button className='gpay-btn' type="button"
          whileTap={{scale:1.1}}
            initial={{x:50}}
            
          animate={{x:0}}
          whileHover={{ scale:1.05,}}
            transition={{type:"spring", stiffness:100}} ></motion.button> </a>
      </div>  

      <motion.div className="payment-page-donut1" alt="donut 1"
      // whileHover={{ scale:0.7}}
          initial={{ x: -5000 }}
          animate={{ x: 0 }}></motion.div>
     <motion.div className="payment-page-donut2" alt="donut 2"
   //   whileHover={{ scale:0.7}}
          initial={{ x: 5000 }}
          animate={{ x: 0 }}></motion.div>

</div>
   </div>
 
);

export default PaymentPage