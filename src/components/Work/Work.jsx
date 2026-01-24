import { useState, useRef, useEffect } from "react";
import { projects } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaList, FaStar, FaCode } from "react-icons/fa";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "../../contexts/ThemeContext";

const Work = () => {
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);
  const [showProjectList, setShowProjectList] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  // Removed Recent Repositories fetching logic

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsPlaying(false);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setIsPlaying(false);
  };

  useEffect(() => {
    if (videoRef.current && isPlaying) {
      videoRef.current.play();
    }
  }, [isPlaying]);

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center gap-4">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">PROJECTS</h2>
          <button
            onClick={() => setShowProjectList(true)}
            className="text-gray-600 dark:text-gray-400 hover:text-purple-500 transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            title="View All Projects"
          >
            <FaList size={24} />
          </button>
        </div>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </motion.div>

      {/* Projects Marquee */}
      <div className="w-full overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-[#050414] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-[#050414] to-transparent z-10"></div>

        <div className="flex w-max animate-marquee pause-on-hover">
          {[...projects, ...projects].map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              className="mx-6 w-[350px] md:w-[400px] flex-shrink-0"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                onClick={() => handleOpenModal(project)}
                whileHover={{ y: -10 }}
                className="relative border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900/50 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden cursor-pointer hover:shadow-purple-500/20 transition-all duration-300 group h-[400px]"
              >
                {/* Image / Video Container */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                  />
                  {project.video && (
                    <video
                      src={project.video}
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      onMouseEnter={(e) => {
                        e.target.playbackRate = 2.0;
                        e.target.play();
                      }}
                      onMouseLeave={(e) => {
                        e.target.pause();
                        e.target.currentTime = 0;
                      }}
                    />
                  )}
                </div>

                {/* Default Content (Title & Tags) - Visible when NOT hovering */}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block bg-[#251f38] text-xs font-semibold text-purple-400 rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Overlay Content (Description) */}
                <div className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-bold text-purple-400 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-6 line-clamp-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {project.description}
                  </p>
                  <span className="text-purple-400 font-bold text-sm uppercase tracking-wider border border-purple-400 px-4 py-2 rounded-full hover:bg-purple-400 hover:text-white transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    View Project
                  </span>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Container */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-[#0d081f] rounded-2xl shadow-2xl lg:w-full w-[95%] max-w-4xl overflow-hidden relative border border-gray-200 dark:border-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl z-10 transition-colors"
              >
                &times;
              </button>

              <div className="flex flex-col h-full max-h-[90vh] overflow-y-auto">
                <div className="w-full p-0 flex items-center justify-center">
                  {selectedProject.video ? (
                    <video
                      ref={videoRef}
                      src={selectedProject.video}
                      controls
                      muted
                      onLoadedMetadata={(e) => e.target.playbackRate = 2.0}
                      onError={() => setIsPlaying(false)}
                      className="w-full h-[50vh] md:h-[60vh] object-cover rounded-xl shadow-lg"
                    />
                  ) : (
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-[50vh] md:h-[60vh] object-cover rounded-xl shadow-lg filter brightness-110 contrast-125 saturate-110"
                    />
                  )}
                </div>
                <div className="p-8 flex flex-col">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-purple-100 dark:bg-[#251f38] text-xs font-semibold text-purple-600 dark:text-purple-400 rounded-full px-3 py-1 border border-purple-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-xl font-semibold transition-colors"
                    >
                      <FaGithub /> View Code
                    </a>
                    <button
                      onClick={() => {
                        if (selectedProject.webapp) {
                          window.open(selectedProject.webapp, '_blank', 'noopener,noreferrer');
                        } else if (selectedProject.video) {
                          setIsPlaying(true);
                        } else {
                          setIsPlaying(false);
                        }
                      }}
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white py-3 rounded-xl font-semibold transition-opacity"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project List Modal */}
      <AnimatePresence>
        {showProjectList && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setShowProjectList(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-[#0d081f] rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative border border-gray-200 dark:border-gray-800 max-h-[80vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center bg-gray-50 dark:bg-[#131025]">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">All Projects</h3>
                <button
                  onClick={() => setShowProjectList(false)}
                  className="text-gray-500 hover:text-red-500 transition-colors"
                >
                  &times;
                </button>
              </div>
              <div className="overflow-y-auto p-4 flex-1">
                <ul className="space-y-2">
                  {projects.map((project) => (
                    <li key={project.id}>
                      <button
                        onClick={() => {
                          setShowProjectList(false);
                          setSelectedProject(project);
                        }}
                        className="w-full text-left p-4 rounded-xl hover:bg-purple-100 dark:hover:bg-purple-900/20 transition-all flex items-center gap-4 group border border-transparent hover:border-purple-500/30"
                      >
                        <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200 dark:border-gray-700">
                          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                            {project.title}
                          </h4>
                          <div className="flex gap-2 mt-1">
                            {project.tags.slice(0, 2).map((tag, idx) => (
                              <span key={idx} className="text-[10px] bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded-full text-gray-600 dark:text-gray-400">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* GitHub Section Integration */}
      <section className="mt-24 pt-10 border-t border-gray-200 dark:border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            GITHUB ACTIVITY
          </h3>
          <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-12"
        >
          {/* Contribution Graph */}
          <div className="w-full flex justify-center px-4">
            <div className="bg-white dark:bg-gray-900/50 backdrop-blur-md p-6 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-purple-500/10 transition-shadow overflow-hidden max-w-full">
              <div className="overflow-x-auto">
                <div className="min-w-[700px]">
                  <GitHubCalendar
                    username="areebailyas4321-lab"
                    blockSize={12}
                    blockMargin={4}
                    colorScheme={theme === 'dark' ? 'dark' : 'light'}
                    fontSize={14}
                    throwOnError={false}
                    hideColorLegend={false}
                    hideTotalCount={false}
                    theme={{
                      dark: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
                      light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* GitHub Stats Cards */}
          <div className="flex flex-wrap justify-center gap-6 w-full px-4">
            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-lg bg-[#0d081f] dark:bg-[#0d081f]"
            >
              <img
                src={`https://github-readme-stats.vercel.app/api?username=areebailyas4321-lab&show_icons=true&theme=react&hide_border=true&bg_color=ffffff&title_color=8b5cf6&icon_color=a855f7&text_color=000000`}
                alt="GitHub Stats"
                className="h-[165px] w-auto object-contain"
              />
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-lg bg-[#0d081f] dark:bg-[#0d081f]"
            >
              <img
                src={`https://streak-stats.demolab.com/?user=areebailyas4321-lab&theme=react&hide_border=true&background=ffffff&ring=8b5cf6&fire=ff0000&currStreakNum=000000`}
                alt="GitHub Streak"
                className="h-[165px] w-auto object-contain"
              />
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-lg bg-[#0d081f] dark:bg-[#0d081f]"
            >
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=areebailyas4321-lab&layout=compact&theme=react&hide_border=true&bg_color=ffffff&title_color=8b5cf6&text_color=000000`}
                alt="Top Languages"
                className="h-[165px] w-auto object-contain"
              />
            </motion.div>
          </div>
        </motion.div>

      </section>
    </section >

  );
};

export default Work;
