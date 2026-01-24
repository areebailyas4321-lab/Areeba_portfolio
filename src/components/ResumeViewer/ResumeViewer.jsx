import { Link } from 'react-router-dom';
import { FaArrowLeft, FaDownload } from 'react-icons/fa';
import Resume from '../../assets/experience logo/Resume.pdf';

const ResumeViewer = () => {
    return (
        <div className="min-h-screen bg-[#050414] text-white flex flex-col">
            {/* Top Bar */}
            <div className="h-16 bg-[#050414]/80 backdrop-blur-md border-b border-gray-800 flex items-center justify-between px-6 md:px-12 fixed top-0 left-0 right-0 z-50">
                <Link
                    to="/"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
                >
                    <FaArrowLeft />
                    <span className="font-semibold text-lg">Back to Portfolio</span>
                </Link>
                <a
                    href={Resume}
                    download="Areeba_Ilyas_Resume.pdf"
                    className="flex items-center gap-2 px-6 py-2 rounded-full font-bold text-white transition-transform transform hover:scale-105 shadow-[0_0_15px_rgba(130,69,236,0.5)]"
                    style={{ background: 'linear-gradient(90deg, #8245ec, #a855f7)' }}
                >
                    <FaDownload />
                    <span>Download Resume</span>
                </a>
            </div>

            {/* PDF Viewer */}
            <div className="flex-grow pt-16 h-screen w-full">
                <iframe
                    src={Resume}
                    title="Resume Viewer"
                    className="w-full h-full border-none"
                />
            </div>
        </div>
    );
};

export default ResumeViewer;
