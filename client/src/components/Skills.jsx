import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillCategories = [
  {
    id: 'aiml',
    label: 'AI / ML',
    skills: [
      { name: 'TensorFlow / Keras', level: 82, desc: 'Advanced' },
      { name: 'PyTorch', level: 72, desc: 'Proficient' },
      { name: 'Scikit-learn', level: 80, desc: 'Advanced' },
      { name: 'MediaPipe', level: 85, desc: 'Expert' },
      { name: 'OpenCV', level: 78, desc: 'Advanced' },
      { name: 'NumPy / Pandas', level: 85, desc: 'Expert' },
    ],
  },
  {
    id: 'fullstack',
    label: 'Full Stack',
    skills: [
      { name: 'Node.js & Express.js', level: 82, desc: 'Advanced' },
      { name: 'React.js', level: 78, desc: 'Advanced' },
      { name: 'MongoDB & Mongoose', level: 80, desc: 'Advanced' },
      { name: 'JavaScript / TypeScript', level: 85, desc: 'Expert' },
      { name: 'HTML5 / CSS3', level: 88, desc: 'Expert' },
      { name: 'REST APIs', level: 84, desc: 'Advanced' },
    ],
  },
  {
    id: 'blockchain',
    label: 'Blockchain & Tools',
    skills: [
      { name: 'Solidity', level: 70, desc: 'Proficient' },
      { name: 'Smart Contracts', level: 68, desc: 'Proficient' },
      { name: 'Ethereum / MetaMask', level: 65, desc: 'Proficient' },
      { name: 'Git & GitHub', level: 88, desc: 'Expert' },
      { name: 'Linux / Raspberry Pi', level: 75, desc: 'Advanced' },
      { name: 'C / C++ / Python', level: 80, desc: 'Advanced' },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('aiml');

  const active = skillCategories.find((c) => c.id === activeTab);

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="skills__header" data-aos="fade-up">
          <span className="section-label">Expertise</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Backend-focused developer with solid full-stack capabilities across the MERN ecosystem.
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
            >
              <div className="skill-card__top">
                <span className="skill-card__name">{skill.name}</span>
                <span className="skill-card__level">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <motion.div
                  className="skill-bar__fill"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: i * 0.07, ease: 'easeOut' }}
                />
              </div>
              <div className="skill-card__tooltip">{skill.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
