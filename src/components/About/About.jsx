import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import profileImage from '../../assets/profile-img.jpg';


const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32 min-h-[80vh] flex items-center relative overflow-hidden"
    >

      <div className="absolute inset-0 bg-[#050414]/60"></div>

      <div className="relative flex flex-col gap-10 w-full">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 leading-tight">
            Areeba Ilyas
          </h2>
          <div className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold text-white">
            <ReactTypingEffect
              text={[
                'Information Technology student (5th semester)',
                'Building real-world software solutions',
                'Clean interfaces and practical AI',
              ]}
              speed={90}
              eraseSpeed={50}
              typingDelay={400}
              eraseDelay={2200}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-1/2 flex justify-start"
          >
            <Tilt
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-[25rem] md:h-[25rem] lg:w-[30rem] lg:h-[30rem]"
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <div className="relative w-full h-full overflow-hidden rounded-full">
                <div className="absolute inset-0 bg-gradient-to-r from-[#8245ec] to-pink-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <img
                  src={profileImage}
                  alt="Areeba Ilyas"
                  className="relative w-full h-full object-cover object-[50%_30%] border-4 border-white/10 shadow-2xl"
                />
              </div>
            </Tilt>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-1/2 text-left mt-8 md:mt-0"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-base sm:text-lg md:text-lg text-gray-300 mb-10 leading-relaxed"
            >
              <p className="text-white">👩‍💻 About Me</p>
              <p className="mt-2">I am Areeba Ilyas, a dedicated Information Technology student currently in my 5th semester at Punjab University, Lahore. I specialize in full-stack web development, artificial intelligence, and data analytics, with expertise in React, Node.js, Python, and MySQL.</p>
              <p className="mt-4">Throughout my academic journey, I have developed diverse projects ranging from college management systems to AI-powered malware detection solutions. Currently, I am undergoing professional training in Full Stack Development at Capregsoft, where I am honing my skills in creating robust web applications.</p>
              <p className="mt-4">I am driven by continuous learning and excellence in software engineering, combining technical proficiency with creative problem-solving to deliver innovative solutions that address real-world challenges.</p>
              <p className="mt-4">📫 Email:  areebailyas4321@gmail.com<br />🔗 GitHub:  github.com/areebailyas4321-lab</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <a
                href="#contact"
                className="inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(130,69,236,0.6)]"
                style={{ background: 'linear-gradient(90deg, #8245ec, #a855f7)' }}
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
