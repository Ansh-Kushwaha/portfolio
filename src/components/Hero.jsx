import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas, ExplorerCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen
    mx-auto z-[0]">
      <div className={`${styles.paddingX} absolute 
      insert-0 top-[120px] max-w-7xl mx-auto flex 
      flex-row items-start gap-5`}>
        <div className="flex flex-col 
        justify-center items-center mt-5">
          <div className="w-10 h-10 rounded-full 
          bg-[#FE209D]" />
          <div className="w-4 sm:h-80 h-40 pink-orange-gradient" />
        </div>

        <div className='z-[2]'>
          <h1 className={`${styles.heroHeadText} 
          logo-text-gradient`}>Hi, I'm <span 
          className="pink-orange-text-gradient">Ansh
          </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2
          text-white-100 z-20`}>
            An Undergraduate student, 
            <br />and an Android Developer. 
          </p>
        </div>
      </div>

      {/* <ExplorerCanvas /> */}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div 
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero