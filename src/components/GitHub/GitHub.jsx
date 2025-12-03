
import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";

const GitHub = () => {
    return (
        <section
            id="github"
            className="py-20 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
        >
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                    GITHUB CONTRIBUTIONS
                </h2>
                <div className="w-32 h-1 bg-[#8245ec] mx-auto mt-4 rounded-full"></div>
                <p className="text-gray-400 mt-4 text-lg font-semibold">
                    My coding activity and contributions over the last year
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex justify-center items-center bg-gray-900/50 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
            >
                <GitHubCalendar
                    username="areebailyas4321-lab"
                    blockSize={15}
                    blockMargin={5}
                    colorScheme="dark"
                    fontSize={16}
                    theme={{
                        dark: [
                            "#161b22",
                            "#4c1d95",
                            "#6d28d9",
                            "#8b5cf6",
                            "#a78bfa",
                        ],
                    }}
                />
            </motion.div>
        </section>
    );
};

export default GitHub;
