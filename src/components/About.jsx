import React from 'react'
import Tilt from'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants/constants';
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc';

const About = () => {
  return (
    <>
      <motion.div varirants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] text-justify max-w-4xl leading-[30px]"
      >
        I am currently pursuing a degree in engineering, 
        where I have learned various programming languages such as C++, Java, and Python, 
        and have also gained a strong foundation in mathematics and problem-solving.<br className="sm:block hidden " />
        I have experience in developing responsive and visually appealing user interfaces 
        using HTML, CSS, Javascript, Kotlin and Java. <br className="sm:block hidden" />
        I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about")