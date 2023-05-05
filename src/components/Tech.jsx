import { motion } from "framer-motion";

import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";

const TechCard = ({ icon, index }) => (
  <motion.div
    className=" w-28 h-28 flex justify-center items-center"
    variants={fadeIn("right", "spring", index * 0.25, 0.75)}
  >
    <div
      className="hexagon-card items-center justify-center"
    >
      <img src={icon} className="w-14 h-14 z-[1]"/>
    </div>
  </motion.div>
)

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Tech.</h2>
        </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology, index) => (
          <div className="w-24 h-28" key={technology.name}>
            <TechCard icon={technology.icon} index={index} />
          </div>  
        ))}
      </div>
    </>
  )
}

export default SectionWrapper (Tech, "")