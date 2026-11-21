import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowDown, FiGithub, FiLinkedin } from 'react-icons/fi';
import './Hero.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';

export default function Hero() {
  const handleDownload = (format) => {
    window.open(`${BACKEND_URL}/api/cv/${format}`, '_blank');
  };

  return (
    <section id="hero" className="hero">
      <div className="hero__bg-grid" aria-hidden="true" />
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />

      <div className="container hero__inner">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.span
            className="hero__greeting"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            👋 Hello, I'm
          </motion.span>

          <motion.h1
            className="hero__name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            Abhas <span className="hero__name--accent">Sachan</span>
          </motion.h1>

          <motion.div
            className="hero__role"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="hero__role-prefix">I build </span>
            <TypeAnimation
              sequence={[
                'Local-LLM Triage Pipelines (Ollama + Pydantic)',
                2000,
                'Codebase Knowledge Graphs & AST Engines',
                2000,
                'Live REST Backends in FastAPI & Node.js',
                2000,
                'Full-Stack Web Apps with React & Next.js',
                2000,
                'Real-Time Edge AI/ML Systems (MediaPipe)',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="hero__typewriter"
            />
          </motion.div>

          <motion.p
            className="hero__bio"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
          >
            Python developer with hands-on GenAI experience building local-LLM (Ollama)
            triage pipelines with Pydantic-validated structured outputs and 124+ Pytest tests,
            alongside live REST backends in FastAPI and Node.js. Ex-AI/ML Intern at LUSIP, LNMIIT Jaipur.
            CodeChef 3★ (1649).
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="hero__download-group">
              <button
                className="btn btn-primary"
                onClick={() => handleDownload('pdf')}
                aria-label="Download CV as PDF"
              >
                <FiDownload size={16} />
                Download CV
              </button>
              <div className="hero__download-formats">
                <button
                  className="format-btn"
                  onClick={() => handleDownload('pdf')}
                  title="Download PDF"
                >
                  PDF
                </button>
                <span className="format-sep">·</span>
                <button
                  className="format-btn"
                  onClick={() => handleDownload('docx')}
                  title="Download Word"
                >
                  DOCX
                </button>
              </div>
            </div>

            <a href="#projects" className="btn btn-outline" onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              View Projects
            </a>
          </motion.div>

          <motion.div
            className="hero__socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a href="https://github.com/abhassachan" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
              <FiGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/abhassachan" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
              <FiLinkedin size={20} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="hero__avatar-ring">
            <div className="hero__avatar">
              <span>AS</span>
            </div>
          </div>
          <div className="hero__stats">
            <div className="hero__stat">
              <strong>Python & GenAI</strong>
              <span>Developer</span>
            </div>
            <div className="hero__stat">
              <strong>Full-Stack</strong>
              <span>FastAPI · Node · React</span>
            </div>
            <div className="hero__stat">
              <strong>3★ (1649)</strong>
              <span>CodeChef</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero__scroll-cta"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
        }}
        aria-label="Scroll down"
      >
        <FiArrowDown size={20} />
      </motion.a>
    </section>
  );
}
