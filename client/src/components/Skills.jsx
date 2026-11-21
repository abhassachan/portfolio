import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillCategories = [
  {
    id: 'genai',
    label: 'GenAI & AI / ML',
    skills: [
      { name: 'LLMs & Local Triage (Ollama)', tag: 'GenAI' },
      { name: 'Structured Outputs (Pydantic)', tag: 'GenAI' },
      { name: 'Token-Budgeted LLM Triage', tag: 'GenAI' },
      { name: 'Tree-Sitter CST Parsing', tag: 'AST Analysis' },
      { name: 'Jedi Scope Resolution', tag: 'Code Analysis' },
      { name: 'NetworkX Graph Reachability', tag: 'Knowledge Graphs' },
      { name: 'MediaPipe Pose Estimation', tag: 'Computer Vision' },
      { name: 'OpenCV Image Processing', tag: 'Computer Vision' },
      { name: 'Scikit-learn & Machine Learning', tag: 'ML' },
      { name: 'TensorFlow & Keras', tag: 'Deep Learning' },
      { name: 'PyTorch', tag: 'Deep Learning' },
      { name: 'NumPy & Pandas', tag: 'Data Analysis' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & APIs',
    skills: [
      { name: 'FastAPI', tag: 'Python' },
      { name: 'RESTful API Architecture', tag: 'Design' },
      { name: 'Flask & Django', tag: 'Python' },
      { name: 'Node.js & Express.js', tag: 'Full Stack' },
      { name: 'MongoDB (Mongoose)', tag: 'Database' },
      { name: 'JWT & Bcrypt Authentication', tag: 'Security' },
      { name: 'SHA-256 Content Caching', tag: 'Performance' },
      { name: 'node-cron Scheduled Jobs', tag: 'Automation' },
    ],
  },
  {
    id: 'frontend_langs',
    label: 'Frontend & Languages',
    skills: [
      { name: 'Python (3.x)', tag: 'Core Language' },
      { name: 'JavaScript & TypeScript', tag: 'Core Language' },
      { name: 'React.js', tag: 'Frontend' },
      { name: 'Next.js', tag: 'Frontend' },
      { name: 'Tailwind CSS', tag: 'Styling' },
      { name: 'HTML5 & CSS3', tag: 'Web' },
      { name: 'Progressive Web Apps (PWAs)', tag: 'Mobile Web' },
      { name: 'Leaflet Maps & Geolocation API', tag: 'Geospatial' },
      { name: 'C & C++', tag: 'Systems' },
    ],
  },
  {
    id: 'tools_blockchain',
    label: 'Tools, Testing & Web3',
    skills: [
      { name: 'Pytest (124+ Automated Tests)', tag: 'Testing' },
      { name: 'Mypy Type Checking', tag: 'Static Analysis' },
      { name: 'Ruff Fast Linter', tag: 'Code Quality' },
      { name: 'Git & GitHub Workflows', tag: 'VCS' },
      { name: 'Linux & Shell Scripting', tag: 'DevOps' },
      { name: 'Bandit, Semgrep & OSV', tag: 'AppSec' },
      { name: 'Raspberry Pi Edge Deployment', tag: 'Hardware' },
      { name: 'Solidity & Smart Contracts', tag: 'Web3' },
      { name: 'Ethereum & Hardhat Testnet', tag: 'Blockchain' },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('genai');

  const active = skillCategories.find((c) => c.id === activeTab);

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="skills__header" data-aos="fade-up">
          <span className="section-label">Expertise</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Python & GenAI developer with strong capabilities across LLM pipelines, AST analysis, backend APIs, and modern web applications.
          </p>
        </div>

        <div className="skills__tabs" data-aos="fade-up" data-aos-delay="100">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              className={`skills__tab ${activeTab === cat.id ? 'skills__tab--active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="skills__grid" data-aos="fade-up" data-aos-delay="200">
          {active.skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
            >
              <div className="skill-card__inner">
                <span className="skill-card__bullet" aria-hidden="true" />
                <span className="skill-card__name">{skill.name}</span>
              </div>
              {skill.tag && <span className="skill-card__tag">{skill.tag}</span>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
