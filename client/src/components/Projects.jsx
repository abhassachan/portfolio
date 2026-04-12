import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Blockchain Solar Energy Trading Platform',
    description:
      'Decentralized peer-to-peer solar energy trading system using Solidity and Ethereum. Tokenizes surplus solar power (1 kWh per token) and enables secure transactions via MetaMask smart contracts.',
    tech: ['Solidity', 'Ethereum', 'MetaMask', 'Smart Contracts', 'JavaScript'],
    github: 'https://github.com/abhassachan',
    live: 'https://github.com/abhassachan',
    category: 'blockchain',
    featured: true,
  },
  {
    id: 2,
    title: 'Real-Time Exercise Recognition System',
    description:
      'Deep learning system achieving ~98% classification accuracy on real-time webcam data. Built with MediaPipe pose estimation, optimized for low-latency edge deployment on Raspberry Pi.',
    tech: ['Python', 'TensorFlow', 'MediaPipe', 'OpenCV', 'Raspberry Pi'],
    github: 'https://github.com/abhassachan',
    live: 'https://github.com/abhassachan',
    category: 'aiml',
    featured: true,
  },
  {
    id: 3,
    title: 'GPS Gamified Running Web App (PWA)',
    description:
      'Progressive Web App for real-time GPS run tracking with map-based territory gamification. Enhances user engagement and running consistency through competitive territory-capture mechanics.',
    tech: ['React', 'Node.js', 'MongoDB', 'GPS API', 'PWA'],
    github: 'https://github.com/abhassachan',
    live: 'https://minor-project-gamma-two.vercel.app/',
    category: 'fullstack',
    featured: true,
  },
 
];

const filters = [
  { id: 'all', label: 'All Projects' },
  { id: 'aiml', label: 'AI / ML' },
  { id: 'blockchain', label: 'Blockchain' },
  { id: 'fullstack', label: 'Full Stack' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered =
    activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="projects__header" data-aos="fade-up">
          <span className="section-label">Work</span>
          <h2 className="section-title">Projects Showcase</h2>
          <p className="section-subtitle">
            A selection of projects demonstrating my skills across the MERN stack — from REST APIs to
            full-stack applications.
          </p>
        </div>

        <div className="projects__filters" data-aos="fade-up" data-aos-delay="100">
          {filters.map((f) => (
            <button
              key={f.id}
              className={`projects__filter-btn ${activeFilter === f.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="projects__grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                className={`project-card ${project.featured ? 'project-card--featured' : ''}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                {project.featured && (
                  <span className="project-card__featured-badge">⭐ Featured</span>
                )}
                <div className="project-card__body">
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__desc">{project.description}</p>
                </div>
                <div className="project-card__footer">
                  <div className="project-card__tech">
                    {project.tech.map((t) => (
                      <span key={t} className="badge">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="project-card__links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                      aria-label="GitHub"
                      title="View on GitHub"
                    >
                      <FiGithub size={18} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                      aria-label="Live Demo"
                      title="Live Demo"
                    >
                      <FiExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
