// Skills Section Logo's
import htmlLogo from './assets/experience logo/html.png';
import cssLogo from './assets/experience logo/css.png';
import javascriptLogo from './assets/experience logo/javascript.png';
import nodejsLogo from './assets/experience logo/nodejs.png';
import mysqlLogo from './assets/experience logo/mysql.png';
import cLogo from './assets/experience logo/c.png';
import cppLogo from './assets/experience logo/cpp.png';
import javaLogo from './assets/experience logo/java.png';
import pythonLogo from './assets/experience logo/python.png';

// Project images (user-provided)
import project1 from './assets/project image/college interface.jpg';
import project2 from './assets/project image/result management system.jpeg';
import project3 from './assets/project image/malware detection system.jpeg';
import project4 from './assets/project image/dashboard.jpg';
import project5 from './assets/project image/online_clock.webp';

// Project demo videos
import video1 from './assets/project/college interface.mp4';
import video2 from './assets/project/result mangement system.mp4';
import video3 from './assets/project/malware detection.mp4';
import video4 from './assets/project/ecommerce dashboard.mp4';
import video5 from './assets/project/online clock .mp4';
import portfolioVideo from './assets/project/portfolio_demo.mp4';
import profileImage from './assets/profile-img.jpg';

// Education Logos
import punjabLogo from './assets/education_logo/punjab university_logo.jpg';
import fgSchoolLogo from './assets/education_logo/fg_school_logo.png';
import fgCollegeLogo from './assets/education_logo/pg_college_logo.jpeg';


export const SkillsInfo = [
  {
    title: 'Frontend & Office',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'MS Word', logo: htmlLogo },
      { name: 'MS Excel', logo: htmlLogo },
      { name: 'PowerPoint', logo: htmlLogo },
      { name: 'PowerBI', logo: htmlLogo },
    ],
  },
  {
    title: 'Backend & Database',
    skills: [
      { name: 'PHP', logo: nodejsLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MS Access', logo: mysqlLogo },
    ],
  },
  {
    title: 'AI & ML',
    skills: [
      { name: 'Python', logo: pythonLogo },
      { name: 'Machine Learning', logo: pythonLogo },
      { name: 'Deep Learning', logo: pythonLogo },
      { name: 'AI', logo: pythonLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: punjabLogo,
    school: "Punjab University, Lahore",
    date: "2023 - Present (5th Semester)",
    grade: "3.59 CGPA",
    desc: "Currently pursuing BS IT with a strong academic record. Gaining in-depth knowledge of software development, data structures, algorithms, and modern IT practices.",
    degree: "Bachelor of Science in Information Technology (BS IT)",
  },
  {
    id: 1,
    img: fgCollegeLogo,
    school: "FG Postgraduate College for Women",
    date: "2021 - 2023",
    grade: "86.5%",
    desc: "Completed FSc with excellent academic performance, building a strong foundation in mathematics and computer science concepts.",
    degree: "FSc (Intermediate)",
  },
  {
    id: 2,
    img: fgSchoolLogo,
    school: "FG Public School No 2 (Girls), Wah Cantt",
    date: "2019 - 2021",
    grade: "89.5%",
    desc: "Completed Matriculation with distinction, demonstrating strong analytical and problem-solving skills.",
    degree: "Matriculation",
  },
];

export const projects = [
  {
    id: 0,
    title: "College Website",
    description:
      "A comprehensive website for a college, featuring course listings, student portals, and administrative tools. Built to provide a seamless digital experience for students and faculty.",
    image: project1,
    video: video1,
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    github: "https://github.com/areebailyas4321-lab/college_interface_website",
    webapp: "https://areebailyas4321-lab.github.io/college_interface_website/",
  },
  {
    id: 1,
    title: "Result Management System",
    description:
      "A web-based application to manage and publish student results. Allows administrators to upload marks and students to view their performance reports securely.",
    image: project2,
    video: video2,
    tags: ["PHP", "MySQL", "HTML", "CSS"],
    github: "https://github.com/areebailyas4321-lab/RESULT_MANAGEMENT_SYSTEM",
    webapp: "https://areebailyas4321-lab.github.io/RESULT_MANAGEMENT_SYSTEM/",
  },
  {
    id: 2,
    title: "Malware Detection System",
    description:
      "A machine learning project designed to detect malware in files. Utilizes advanced algorithms to analyze file patterns and identify potential threats.",
    image: project3,
    video: video3,
    tags: ["Python", "Machine Learning", "AI"],
    github: "https://github.com/areebailyas4321-lab/MALWARE_DETECTION_SYSTEM",
    webapp: "https://areebailyas4321-lab.github.io/MALWARE_DETECTION_SYSTEM/",
  },
  {
    id: 3,
    title: "E-commerce Sales Dashboard",
    description:
      "An interactive sales analytics dashboard built with Power BI. Visualizes KPIs, sales trends, and product performance to aid decision making.",
    image: project4,
    video: video4,
    tags: ["Power BI", "Data Visualization"],
    github: "https://github.com/areebailyas4321-lab/ECOMMERCE_DASHBOARD",
  },
  {
    id: 4,
    title: "Online Clock",
    description:
      "A feature-rich online clock application with multiple modes including digital clock, analog clock, stopwatch, countdown timer, and world clock. Features dynamic weather animations, theme customization, and a beautiful modern UI built with React.",
    image: project5,
    video: video5,
    tags: ["React", "JavaScript", "CSS", "Vite"],
    github: "https://github.com/areebailyas4321-lab/Online_clock",
    webapp: "https://online-clock-self.vercel.app/",
  },
  {
    id: 5,
    title: "Personal Portfolio",
    description:
      "A professional portfolio website showcasing my skills, projects, and experience. Built with React, Tailwind CSS, and Framer Motion for smooth animations and a responsive design.",
    image: profileImage,
    video: portfolioVideo,
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/areebailyas4321-lab/portfolio_website",
    webapp: "https://areebailyas4321-lab.github.io/portfolio_website/",
  },
];

import capregLogo from './assets/experience logo/capreg_logo.jpeg';
import navttcLogo from './assets/experience logo/navttc.jpeg';

export const experiences = [
  {
    id: 0,
    img: capregLogo,
    role: "Full Stack Development Trainee",
    company: "Capregsoft",
    date: "Present",
    desc: "Currently undergoing intensive training in Full Stack Development. Gaining hands-on experience with frontend technologies like HTML, CSS, JavaScript, and React, as well as backend technologies including Node.js and databases. Building real-world projects to solidify concepts and best practices.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MySQL"],
  },
  {
    id: 1,
    img: navttcLogo,
    role: "Artificial Intelligence Course",
    company: "NAVTTC (National Vocational & Technical Training Commission)",
    date: "Completed",
    desc: "Successfully completed a comprehensive Artificial Intelligence course covering machine learning fundamentals, deep learning, and practical AI applications. Gained hands-on experience in training and deploying machine learning models, with a focus on real-world problem-solving. Developed an AI-powered malware detection system as a capstone project, demonstrating proficiency in data preprocessing, model training, and evaluation.",
    skills: ["Python", "Machine Learning", "Deep Learning", "AI", "Data Analysis", "Model Training"],
  },
];
