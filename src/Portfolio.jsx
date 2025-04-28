import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Sun, Moon, Mail, FileText, Briefcase, School, ChevronRight, Home, User, Layers, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [iconsLoaded, setIconsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    
    // Preload all icons
    const preloadImages = () => {
      const imageUrls = [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
        'https://www.vectorlogo.zone/logos/databricks/databricks-icon.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg',
        'https://img.icons8.com/color/480/power-bi.png',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
        'https://img.icons8.com/color/480/tableau-software.png',
        'https://img.icons8.com/color/480/microsoft-excel-2019--v1.png'
      ];

      const loadPromises = imageUrls.map(url => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = url;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      Promise.all(loadPromises)
        .then(() => setIconsLoaded(true))
        .catch(() => setIconsLoaded(true));
    };

    preloadImages();
  }, [darkMode]);

  const skills = [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
    { name: 'Databricks', icon: 'https://www.vectorlogo.zone/logos/databricks/databricks-icon.svg' },
    { name: 'Kafka', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg' },
    { name: 'Power BI', icon: 'https://img.icons8.com/color/480/power-bi.png' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    { name: 'Tableau', icon: 'https://img.icons8.com/color/480/tableau-software.png' },
    { name: 'Excel', icon: 'https://img.icons8.com/color/480/microsoft-excel-2019--v1.png' }
  ];

  const projects = [
    {
      title: "Credit Card Fraud Detection",
      description: "Machine Learning model to detect fraudulent transactions with 99% accuracy using Random Forest and XGBoost algorithms.",
      skills: ["Python", "Scikit-learn", "Pandas", "Imbalanced Learning"],
      link: "#"
    },
    {
      title: "Customer Sentiment Analysis",
      description: "NLP pipeline to analyze customer reviews using BERT and TextBlob, achieving 92% sentiment classification accuracy.",
      skills: ["Python", "NLTK", "Transformers", "BERT"],
      link: "#"
    },
    {
      title: "COVID-19 Cases Prediction",
      description: "Time Series Forecasting using ARIMA and Prophet to predict COVID-19 cases with 95% confidence intervals.",
      skills: ["Python", "Statsmodels", "FB Prophet", "Matplotlib"],
      link: "#"
    },
    {
      title: "Human Activity Recognition",
      description: "Classification model to recognize human activities from sensor data using CNN and LSTM networks.",
      skills: ["TensorFlow", "Keras", "Signal Processing"],
      link: "#"
    },
    {
      title: "System Monitoring Solution",
      description: "Real-time system monitoring dashboard using DevOps tools to track server metrics and performance.",
      skills: ["Grafana", "Docker", "InfluxDB", "Telegraf"],
      link: "https://github.com/DeviNKondeti/system-monitoring-solution"
    },
    {
      title: "Quality Assurance Test",
      description: "Automated testing framework for an applications with comprehensive test coverage and CI/CD integration.",
      skills: ["C#", "LINQ", "Unit Testing", "QA Automation"],
      link: "https://github.com/DeviNKondeti/QA_Test"
    },
    {
      title: "ETL Pipeline Project",
      description: "End-to-end data pipeline extracting, transforming and loading data from multiple sources to data warehouse.",
      skills: ["Python", "Apache Airflow", "SQL", "Data Warehousing"],
      link: "https://github.com/DeviNKondeti/SIMPLE_ETL_PIPELINE"
    }
  ];

  const experiences = [
    {
      role: "Data Engineer",
      company: "Cinergy Technology Inc.",
      period: "Sep 2024 - Present",
      description: "Designing and implementing scalable data pipelines, optimizing ETL processes, and developing real-time analytics solutions.",
      skills: ["Azure", "Salesforce", "Databricks", "PySpark", "Data Modeling", "Data Visualization", "Git"],
      icon: <Briefcase className="text-blue-600 dark:text-blue-300" />
    },
    {
      role: "Data Engineer Intern",
      company: "Cinergy Technology Inc.",
      period: "Jan 2024 - Sep 2024",
      description: "Building and enhancing scalable data pipelines, streamlining ETL workflows, and contributing to real-time data analytics solutions for better decision-making.",
      skills: ["Python", "Azure", "AWS", "SSIS", "Tableau"],
      icon: <Briefcase className="text-blue-600 dark:text-blue-300" />
    },
    {
      role: "Graduate Student Assistant",
      company: "University of North Texas",
      period: "Sep 2022 - Jan 2024",
      description: "Conducted research on machine learning applications and assisted in data analysis projects for academic departments.",
      skills: ["Research", "Data Analysis", "Python", "Statistical Modeling"],
      icon: <Briefcase className="text-blue-600 dark:text-blue-300" />
    },
    {
      role: "Data Engineer",
      company: "Berymo",
      period: "May 2019 - Jul 2022",
      description: "Built data infrastructure and dashboards for business intelligence, reducing reporting time by 40%.",
      skills: ["Power BI", "SQL", "Data Visualization", "ETL"],
      icon: <Briefcase className="text-blue-600 dark:text-blue-300" />
    },
    {
      role: "Masters in Data Science",
      company: "University of North Texas",
      period: "Aug 2022 - May 2024 | GPA: 4.0",
      description: "Specialized coursework in Machine Learning, Big Data Analytics, and Data Visualization.",
      skills: ["Machine Learning", "Data Mining", "Statistical Analysis", "Cloud Computing"],
      icon: <School className="text-blue-600 dark:text-blue-300" />
    }
  ];

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  return (
    <main className="relative flex flex-col items-center px-6 pt-24 pb-10 space-y-32 text-center bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 dark:text-white min-h-screen overflow-x-hidden font-sans">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 flex justify-between items-center px-6 py-4 shadow-sm">
        <div className="flex gap-6 items-center">
          <Link 
            to="home" 
            smooth={true} 
            duration={500} 
            className={`flex items-center gap-2 ${activeSection === 'home' ? 'text-blue-600 dark:text-blue-300' : 'text-gray-700 dark:text-gray-300'} hover:text-blue-600 dark:hover:text-blue-300 transition`}
            onSetActive={() => handleSetActive('home')}
          >
            <Home size={18} /> Home
          </Link>
          <Link 
            to="skills" 
            smooth={true} 
            duration={500} 
            className={`flex items-center gap-2 ${activeSection === 'skills' ? 'text-blue-600 dark:text-blue-300' : 'text-gray-700 dark:text-gray-300'} hover:text-blue-600 dark:hover:text-blue-300 transition`}
            onSetActive={() => handleSetActive('skills')}
          >
            <User size={18} /> Skills
          </Link>
          <Link 
            to="projects" 
            smooth={true} 
            duration={500} 
            className={`flex items-center gap-2 ${activeSection === 'projects' ? 'text-blue-600 dark:text-blue-300' : 'text-gray-700 dark:text-gray-300'} hover:text-blue-600 dark:hover:text-blue-300 transition`}
            onSetActive={() => handleSetActive('projects')}
          >
            <Layers size={18} /> Projects
          </Link>
          <Link 
            to="experience" 
            smooth={true} 
            duration={500} 
            className={`flex items-center gap-2 ${activeSection === 'experience' ? 'text-blue-600 dark:text-blue-300' : 'text-gray-700 dark:text-gray-300'} hover:text-blue-600 dark:hover:text-blue-300 transition`}
            onSetActive={() => handleSetActive('experience')}
          >
            <Clock size={18} /> Experience
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <a href="/DeviKondeti_Resume.pdf" download className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center gap-2 transition">
            <FileText size={16} /> Download Resume
          </a>
          <a href="/DeviKondeti_Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm border border-blue-600 text-blue-600 hover:bg-blue-100 dark:hover:bg-gray-700 rounded-full flex items-center gap-2 transition">
            <FileText size={16} /> View Resume
          </a>
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 border rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center space-y-6 max-w-4xl pt-10">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }} 
          className="text-5xl font-extrabold leading-tight"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Devi Kondeti</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl font-semibold text-blue-600 dark:text-blue-300"
        >
          Data Engineer
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl text-gray-700 dark:text-gray-300"
        >
          Turning Raw Data into Actionable Insights
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="max-w-xl text-gray-600 dark:text-gray-400"
        >
          Building robust data systems with expertise in ETL pipelines, real-time analytics, and cloud-native solutions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex justify-center space-x-6 pt-4"
        >
          <Link to="projects" smooth duration={500} className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full flex items-center gap-2 shadow-md hover:scale-105 transition cursor-pointer">
            Explore My Work <ChevronRight size={18} />
          </Link>
        </motion.div>
      </section>

      {/* Skills Section */}
      <motion.section 
        id="skills"
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }} 
        viewport={{ once: true }}
        className="max-w-6xl mx-auto space-y-10"
      >
        <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-300 mb-8">Technical Skills</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: iconsLoaded ? 1 : 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-14 h-14 object-contain hover:scale-110 transition" 
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/56?text=Icon+Missing";
                }}
              />
              <span className="mt-2 text-sm text-gray-700 dark:text-gray-300">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto space-y-10"
      >
        <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-300 mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition text-left"
            >
              <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-300">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-300 hover:underline"
                >
                  View on GitHub <ChevronRight size={16} className="ml-1" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto space-y-10"
      >
        <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-300 mb-8">Professional Experience & Education</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition text-left"
            >
              <div className="flex items-start">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
                  {exp.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{exp.role}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{exp.company} • {exp.period}</p>
                  <p className="mt-2 text-gray-700 dark:text-gray-200">{exp.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Floating Contact CTA */}
      <a href="mailto:dnkondeti@gmail.com" className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-3 rounded-full shadow-lg hover:scale-110 transition hidden sm:flex items-center gap-2">
        <Mail size={20} /> Let's Connect
      </a>

    </main>
  );
}