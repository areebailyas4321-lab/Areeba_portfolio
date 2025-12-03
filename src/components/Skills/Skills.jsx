import { SkillsInfo } from "../../constants";
import PropTypes from 'prop-types';
import Tilt from "react-parallax-tilt";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const ProfessionalSkillCard = ({ name, percentage }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, percentage, { duration: 2 });
      return animation.stop;
    } else {
      count.set(0);
    }
  }, [isInView, percentage, count]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center bg-gray-900/50 backdrop-blur-md border border-white/10 rounded-xl py-6 px-8 mx-4 min-w-[250px] shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group">
      <div className="relative w-24 h-24 mb-4">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="48"
            cy="48"
            r="40"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-gray-700"
          />
          <motion.circle
            cx="48"
            cy="48"
            r="40"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={251.2}
            strokeDashoffset={251.2}
            className="text-[#8245ec]"
            initial={{ strokeDashoffset: 251.2 }}
            animate={isInView ? { strokeDashoffset: 251.2 - (251.2 * percentage) / 100 } : { strokeDashoffset: 251.2 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold text-white">
            <motion.span>{rounded}</motion.span>%
          </span>
        </div>
      </div>
      <h4 className="text-lg font-medium text-gray-300 text-center group-hover:text-[#8245ec] transition-colors">
        {name}
      </h4>
    </div>
  );
};

ProfessionalSkillCard.propTypes = {
  name: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">
          A collection of my technical skills and expertise honed through various projects and experiences
        </p>
      </motion.div>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-6 lg:gap-8 py-4 justify-center">
      {SkillsInfo.map((category, index) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-900/50 backdrop-blur-md px-6 sm:px-8 py-8 mb-6 w-full sm:w-[48%] rounded-2xl border border-white/10 
          shadow-[0_0_20px_1px_rgba(130,69,236,0.1)] hover:shadow-[0_0_30px_1px_rgba(130,69,236,0.3)] transition-shadow duration-300"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-200 mb-6 text-center">
            {category.title}
          </h3>

          {/* Skill Items - 3 per row on larger screens */}
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(130, 69, 236, 0.2)" }}
                  className="flex flex-col items-center justify-center space-y-2 bg-white/5 border border-white/10 rounded-xl py-4 px-2 text-center transition-colors"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  />
                  <span className="text-xs sm:text-sm text-gray-300 font-medium">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </Tilt>
        </motion.div>
      ))}
    </div>

    {/* Professional Skills Marquee */}
    <div className="w-full overflow-hidden py-10 mt-10 relative">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#050414] to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#050414] to-transparent z-10"></div>

      <h3 className="text-2xl sm:text-3xl font-semibold text-gray-200 mb-8 text-center">
        Professional Skills
      </h3>

      <div className="flex w-max animate-marquee pause-on-hover">
        {[...professionalSkills, ...professionalSkills].map((skill, index) => (
          <ProfessionalSkillCard key={index} name={skill.name} percentage={skill.percentage} />
        ))}
      </div>
    </div>
  </section>
);

const professionalSkills = [
  { name: "Problem Solving", percentage: 90 },
  { name: "Logical & Analytical Thinking", percentage: 85 },
  { name: "Team Collaboration", percentage: 85 },
  { name: "Technical Documentation", percentage: 90 },
  { name: "Fast Learning & Adaptability", percentage: 90 },
  { name: "Project Ownership", percentage: 90 },
];

export default Skills;
