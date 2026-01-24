import Navbar from "./components/Navbar/Navbar";
import ParticlesBackground from "./components/ParticlesBackground";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from './components/BlurBlob';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResumeViewer from './components/ResumeViewer/ResumeViewer';

import { ThemeProvider } from './contexts/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <div className="bg-white dark:bg-[#050414] transition-colors duration-300 min-h-screen relative">
              <ParticlesBackground />
              <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />

              <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

              <div className="relative pt-20 z-10">
                <Navbar />
                <Hero />
                <About />
                <Skills />
                <Work />
                <Experience />
                <Education />
                <Contact />
                <Footer />
              </div>

            </div>
          } />
          <Route path="/resume" element={<ResumeViewer />} />
        </Routes >
      </BrowserRouter >
    </ThemeProvider >
  );
};

export default App;
