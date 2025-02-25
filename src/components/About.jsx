import React from 'react';
import {Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../style';
import { services } from '../constants/constants';
import { fadeIn, textVariant } from '../utlis/motion';
import { SectionWrapper } from '../hoc';


const ServiceCard = ({index, title, icon}) =>{

  return(

      <Tilt className="xs:w-[250px] w-full">
          <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card' >
            <div 
              options={{
                max: 45, 
                scale: 1,
                speed: 450
              }}
              className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[250px] flex flex-col items-center justify-evenly'
            >
              <img src={icon} alt={title} className='w-20 h-20 object-contain'  />
              <h3 className='text-white text-[20px] font-bold text-center' >{title}</h3>


            </div>

          </motion.div>

      </Tilt>

  )


}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>

      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1 , 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]' >
      I’m a software developer with experience in C# and JavaScript, 
      and I enjoy working with frameworks like React.js and Three.js.
      I’m always curious to pick up new skills and explore different technologies—it’s one of the reasons I love this field. With a background in Computer Science, I’m eager to jump into a role where I can collaborate with a new team, contribute my knowledge, and keep learning along the way.   
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service , index ) => (
          <ServiceCard key={ service.title} index={index} {...service}/>
        ))}



      </div>


    </>
  )
}

export default SectionWrapper(About, "about")