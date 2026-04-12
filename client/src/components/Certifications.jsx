import React from 'react';
import { FiAward, FiExternalLink } from 'react-icons/fi';
import './Certifications.css';

const certs = [
  {
    title: 'CodeChef 3★ Rated Programmer',
    platform: 'CodeChef',
    issuer: 'Peak Rating: 1609',
    year: '2024',
    color: '#e67e22',
    link: 'https://codechef.com',
    isAward: true,
  },
  {
    title: 'Kaggle Multi-Class Hate Speech Detection',
    platform: 'Kaggle',
    issuer: 'Competition Participant',
    year: '2024',
    color: '#20beff',
    link: 'https://kaggle.com',
    isAward: true,
  },
  {
    title: 'AI/ML Internship — LUSIP Program',
    platform: 'LNMIIT Jaipur',
    issuer: 'Real-Time Pose Estimation Research',
    year: '2025',
    color: '#27ae60',
    link: 'https://lnmiit.ac.in',
  },
  {
    title: 'Blockchain & Smart Contract Development',
    platform: 'Self-Directed',
    issuer: 'Ethereum · Solidity · MetaMask',
    year: '2026',
    color: '#8e44ad',
    link: 'https://ethereum.org',
  },
  {
    title: 'Deep Learning Specialization',
    platform: 'Coursera',
    issuer: 'Andrew Ng / DeepLearning.AI',
    year: '2024',
    color: '#2980b9',
    link: 'https://coursera.org',
  },
  {
    title: 'Data Structures & Algorithms',
    platform: 'Coursera',
    issuer: 'UC San Diego',
    year: '2023',
    color: '#c0392b',
    link: 'https://coursera.org',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <div data-aos="fade-up">
          <span className="section-label">Credentials</span>
          <h2 className="section-title">Certifications & Achievements</h2>
          <p className="section-subtitle">
            Continuous learning through online platforms, university programs, and hackathon participation.
          </p>
        </div>

        <div className="certs__grid">
          {certs.map((cert, i) => (
            <a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="cert-card"
              data-aos="fade-up"
              data-aos-delay={i * 70}
            >
              <div
                className="cert-card__icon"
                style={{ '--cert-color': cert.color }}
              >
                <FiAward size={22} />
              </div>
              <div className="cert-card__body">
                <div className="cert-card__top">
                  <span className="cert-card__platform" style={{ color: cert.color }}>
                    {cert.platform}
                    {cert.isAward && ' 🏆'}
                  </span>
                  <span className="cert-card__year">{cert.year}</span>
                </div>
                <h3 className="cert-card__title">{cert.title}</h3>
                <p className="cert-card__issuer">{cert.issuer}</p>
              </div>
              <div className="cert-card__arrow">
                <FiExternalLink size={16} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
