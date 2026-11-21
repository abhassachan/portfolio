import React from 'react';
import { FiMapPin, FiBook, FiCode, FiCoffee } from 'react-icons/fi';
import './About.css';
import profilePic from '../assets/abhas.jpg';

const highlights = [
  { icon: <FiBook />, label: 'University', value: 'JK Lakshmipat University' },
  { icon: <FiMapPin />, label: 'Location', value: 'Jaipur, Rajasthan' },
  { icon: <FiCode />, label: 'Focus', value: 'Python & GenAI · Full-Stack · AI/ML' },
  { icon: <FiCoffee />, label: 'Contact', value: 'abhassachan@gmail.com' },
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__inner">
          <div className="about__left" data-aos="fade-right">
            <div className="about__image-wrap">
              <div className="about__image-placeholder">
  <img src={profilePic} alt="Abhas Sachan" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
</div>
              <div className="about__image-deco" aria-hidden="true" />
            </div>
          </div>

          <div className="about__right" data-aos="fade-left" data-aos-delay="100">
            <span className="section-label">About Me</span>
            <h2 className="section-title">Python & GenAI Developer,<br />Building Intelligent Pipelines & Scalable Backends</h2>

            <p className="about__para">
              I'm <strong>Abhas Sachan</strong>, a Computer Science & Engineering undergraduate at
              JK Lakshmipat University, Jaipur (CGPA: 7.29), specializing as a <strong>Python & GenAI Developer</strong> alongside
              full-stack engineering.
            </p>

            <p className="about__para">
              With hands-on GenAI experience, I built <strong>Ravel</strong> — a local-LLM (Ollama) triage pipeline
              featuring Pydantic-validated structured outputs, 124+ automated Pytest tests, Tree-Sitter CST parsing, and
              deterministic NetworkX graph reachability that traces execution paths from HTTP routes to sinks to eliminate noise.
              I also developed <strong>CONQUR</strong>, a mobile-first GPS-gamified running PWA with real-time Leaflet tracking,
              clan wars, and scheduled XP challenges, backed by a Node.js/Express and MongoDB REST backend.
            </p>

            <p className="about__para">
              Previously, I interned as an <strong>AI/ML Intern at LUSIP, LNMIIT Jaipur</strong>,
              developing a real-time exercise recognition pipeline with MediaPipe (~98% accuracy deployed
              on Raspberry Pi). I am also a <strong>CodeChef 3★ rated programmer</strong> (Rating: 1649).
            </p>

            <div className="about__highlights">
              {highlights.map((item, i) => (
                <div key={i} className="about__highlight-card" data-aos="fade-up" data-aos-delay={i * 80}>
                  <span className="about__highlight-icon">{item.icon}</span>
                  <div>
                    <span className="about__highlight-label">{item.label}</span>
                    <strong className="about__highlight-value">{item.value}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
