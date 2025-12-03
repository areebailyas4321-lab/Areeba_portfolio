import { motion } from 'framer-motion';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import { FaGithub, FaWhatsapp } from 'react-icons/fa';
import profileImage from '../../assets/profile-img.jpg';

const Hero = () => {
    return (
        <section
            id="home"
            className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32 min-h-[80vh] flex items-center relative overflow-hidden"
        >
            <div className="relative flex flex-col-reverse md:flex-row items-center justify-between w-full gap-10">

                {/* Text Section (Left) */}
                <div className="md:w-1/2 text-left">
                    <motion.h3
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="text-2xl font-bold text-white mb-2"
                    >
                        Hello It&apos;s Me
                    </motion.h3>

                    <motion.h2
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 leading-tight mb-4"
                    >
                        Areeba Ilyas
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                        className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-8"
                    >
                        <ReactTypingEffect
                            text={[
                                'Information Technology student',
                                'Building real-world software solutions',
                                'Clean interfaces and practical AI',
                            ]}
                            speed={50}
                            eraseSpeed={30}
                            typingDelay={400}
                            eraseDelay={2000}
                        />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                        className="text-gray-300 text-lg mb-8 max-w-lg leading-relaxed"
                    >
                        Focused on innovation, problem-solving, and real-world application of technology — always learning, building, and improving.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
                        className="flex gap-4"
                    >
                        <a
                            href="https://wa.me/923145386818"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full text-lg font-bold transition duration-300 transform hover:scale-105 shadow-lg"
                        >
                            <FaWhatsapp size={24} /> WhatsApp
                        </a>
                        <a
                            href="https://github.com/areebailyas4321-lab"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-full text-lg font-bold transition duration-300 transform hover:scale-105 shadow-lg"
                        >
                            <FaGithub size={24} /> GitHub
                        </a>
                    </motion.div>
                </div>

                {/* Image Section (Right) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="md:w-1/2 flex justify-center md:justify-end"
                >
                    <Tilt
                        className="w-64 h-64 md:w-[25rem] md:h-[25rem] lg:w-[30rem] lg:h-[30rem]"
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

            </div>
        </section>
    );
};

export default Hero;
