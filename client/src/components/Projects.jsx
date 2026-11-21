import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Ravel — Reachability-Aware Security Triage & Codebase Knowledge Graph',
    description:
      'Built token-budgeted local LLM triage (Ollama, Pydantic structured outputs, Typer CLI) on top of static scanners (Bandit, Semgrep, OSV) with SHA-256 caching and 124+ Pytest tests. Architected multi-relational Python codebase knowledge graph using Tree-Sitter CST parsing and Jedi call resolution (98.3% PyCG precision, 89.7% recall). Engineered deterministic NetworkX graph reachability to trace HTTP routes (FastAPI, Flask, Django) to vulnerability sinks.',
    tech: ['Python', 'GenAI / LLMs (Ollama)', 'Pydantic', 'Tree-Sitter', 'NetworkX', 'Jedi', 'FastAPI', 'Bandit & Semgrep', 'Pytest'],
    github: 'https://github.com/shreychechani/Ravel',
    live: 'https://github.com/shreychechani/Ravel',
    category: 'genai',
    featured: true,
  },
  {
    id: 2,
    title: 'CONQUR — GPS-Enabled Gamified Running Web App (PWA)',
    description:
      'Developed Node.js/Express and MongoDB REST backend with JWT/bcrypt auth, clan wars via invite links, leaderboards, run history, and node-cron scheduled XP challenges. Built mobile-first, installable PWA (React, Vite, Tailwind CSS) tracking runs in real time through Geolocation API and Leaflet maps for claiming territory.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Leaflet', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'PWA'],
    github: 'https://github.com/abhassachan/Minor_Project',
    live: 'https://minor-project-gamma-two.vercel.app/',
    category: 'fullstack',
    featured: true,
  },
  {
    id: 3,
    title: 'Blockchain-Based Peer-to-Peer Solar Energy Trading Platform',
    description:
      'Built decentralized energy trading system using Solidity and Ethereum to tokenize surplus solar power (1 kWh per token) and enable secure peer-to-peer transactions via MetaMask. Deployed and validated end-to-end on local Hardhat testnet, orchestrating 4 interconnected contracts across fixed-price, auction, and automated NFT minting flows.',
    tech: ['Solidity', 'Ethereum', 'Hardhat', 'Smart Contracts', 'MetaMask', 'JavaScript', 'NFTs'],
    github: 'https://github.com/abhassachan/solar-energy-trading',
    live: 'https://github.com/abhassachan/solar-energy-trading',
    category: 'blockchain',
    featured: true,
  },
  {
    id: 4,
    title: 'Real-Time Exercise Recognition System',
    description:
      'Developed real-time exercise recognition system using deep learning and MediaPipe pose estimation achieving ~98% classification accuracy on real-time webcam data. Designed end-to-end pose estimation pipeline using MediaPipe and optimized the model for low-latency edge deployment on Raspberry Pi.',
    tech: ['Python', 'MediaPipe', 'OpenCV', 'TensorFlow', 'Raspberry Pi', 'Keras'],
    github: 'https://github.com/abhassachan/Real-Time-Exercise-Recognition-Deep-Learning',
    live: 'https://github.com/abhassachan/Real-Time-Exercise-Recognition-Deep-Learning',
    category: 'genai',
    featured: false,
  },
];

const filters = [
  { id: 'all', label: 'All Projects' },
  { id: 'genai', label: 'GenAI & AI / ML' },
  { id: 'fullstack', label: 'Full Stack & APIs' },
  { id: 'blockchain', label: 'Blockchain' },
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
            A selection of projects demonstrating hands-on experience in GenAI triage pipelines, AST knowledge graphs,
            live REST backends, and full-stack web applications.
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
