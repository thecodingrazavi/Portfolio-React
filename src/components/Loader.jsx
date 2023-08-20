import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
        <motion.div 
          className='h-screen w-screen relative bg-blue flex flex-col justify-center items-center'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{delay:4.5, duration: 0.5 }}
          variants={{
            hidden: {opacity:1,  y: 0 },
            visible: {opacity:0,  y: -1000 },
          }}
        >
                <div className='flex w-full p-10 gap-5 md:w-1/3 items-center font-black text-2xl'>
                    <motion.div 
                        className='max-h-screen h-screen w-full bg-blue flex justify-center items-center'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{delay:0.2, duration: 0.5 }}
                        variants={{
                            hidden: {opacity:0,  y: 100 },
                            visible: {opacity:1,  y: 0 },
                        }}
                        >
                            <span>THE</span>

                    </motion.div>

                    <motion.div 
                        className='max-h-screen h-screen w-full bg-blue flex justify-center items-center'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{delay:0.4, duration: 0.5 }}
                        variants={{
                            hidden: {opacity:0,  y: 100 },
                            visible: {opacity:1,  y: 0 },
                        }}
                        >
                            <span>CODING</span>

                    </motion.div>

                    <motion.div 
                        className='max-h-screen h-screen w-full bg-blue flex justify-center items-center'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{delay:0.6, duration: 0.5 }}
                        variants={{
                            hidden: {opacity:0,  y: 100 },
                            visible: {opacity:1,  y: 0 },
                        }}
                        >
                            <span>RAZAVI</span>

                    </motion.div>

                </div>
                <div className='flex w-full flex-col justify-center items-center absolute bottom-16 font-playfair'>
                    <motion.h1
                        initial={{opacity: 0, y: 100}}    
                        animate={{opacity: 1, y: 0}}
                        transition={{ duration: 0.5, delay: 1.5 }}
                    >
                        @2023, Portfolio
                    </motion.h1>
                    <motion.h1
                        initial={{opacity: 0, y: 100}}    
                        animate={{opacity: 1, y: 0}}
                        transition={{ duration: 0.5, delay: 1.8 }}
                    >
                        Mohammed Shadab Khan Razavi
                    </motion.h1>
                </div>
            
        </motion.div>
  )
}

export default Loader