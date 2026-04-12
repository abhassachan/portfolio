import React from 'react';
import { FiMapPin, FiBook, FiCode, FiCoffee } from 'react-icons/fi';
import './About.css';

const highlights = [
  { icon: <FiBook />, label: 'University', value: 'JK Lakshmipat University' },
  { icon: <FiMapPin />, label: 'Location', value: 'Jaipur, Rajasthan' },
  { icon: <FiCode />, label: 'Focus', value: 'AI/ML · MERN · Blockchain' },
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
                <span>AS</span>
              </div>
              <div className="about__image-deco" aria-hidden="true" />
            </div>
          </div>

          <div className="about__right" data-aos="fade-left" data-aos-delay="100">
            <span className="section-label">About Me</span>
            <h2 className="section-title">Building the Web,<br />One API at a Time</h2>

            <p className="about__para">
              I'm <strong>Abhas Sachan</strong>, a B.Tech Computer Science student at
              JK Lakshmipat University, Jaipur (CGPA: 7.29). I work at the intersection
              of AI/ML, full-stack web development, and blockchain — building systems that
              are intelligent, scalable, and decentralized.
            </p>

            <p className="about__para">
              I interned as an <strong>AI/ML Engineer at LUSIP, LNMIIT Jaipur</strong> where
              I developed a real-time exercise recognition system using deep learning and
              MediaPipe, achieving ~98% classification accuracy deployed on Raspberry Pi.
            </p>

            <p className="about__para">
              On the blockchain side, I've built a <strong>peer-to-peer solar energy trading
              platform</strong> using Solidity and Ethereum. I'm also a <strong>CodeChef 3★
              rated programmer</strong> (peak 1609) and have competed in Kaggle's Multi-Class
              Hate Speech Detection competition.
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
