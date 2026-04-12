import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import './Certifications.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';

const certs = [
  {
    title: 'LUSIP 2025 — Yoga Pose Recognition using Deep Learning',
    platform: 'LNMIIT Jaipur',
    issuer: 'Dr. Sandeep Saini · Dr. Harshvardhan Kumar',
    year: '2025',
    color: '#e63946',
    file: 'lusip.pdf',
  },
  {
    title: 'Red Hat System Administration I (RH124 - RHA) Ver. 9.3',
    platform: 'Red Hat',
    issuer: 'Red Hat Academy',
    year: '2025',
    color: '#cc0000',
    file: 'redhat.pdf',
  },
  {
    title: 'Programming for Everybody (Getting Started with Python)',
    platform: 'Coursera',
    issuer: 'University of Michigan',
    year: '2023',
    color: '#2980b9',
    file: 'coursera.pdf',
  },
];

export default function Certifications() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <div data-aos="fade-up">
          <span className="section-label">Credentials</span>
          <h2 className="section-title">Certifications & Achievements</h2>
          <p className="section-subtitle">
            Click any certificate to view it.
          </p>
        </div>

        <div className="certs__grid">
          {certs.map((cert, i) => (
            <div
              key={i}
              className="cert-card"
              data-aos="fade-up"
              data-aos-delay={i * 100}
              onClick={() => setSelected(cert)}
              style={{ cursor: 'pointer' }}
            >
              <div className="cert-card__icon" style={{ '--cert-color': cert.color }}>
                <span style={{ fontSize: '1.4rem' }}>🏆</span>
              </div>
              <div className="cert-card__body">
                <div className="cert-card__top">
                  <span className="cert-card__platform" style={{ color: cert.color }}>
                    {cert.platform}
                  </span>
                  <span className="cert-card__year">{cert.year}</span>
                </div>
                <h3 className="cert-card__title">{cert.title}</h3>
                <p className="cert-card__issuer">{cert.issuer}</p>
              </div>
              <div className="cert-card__arrow" style={{ color: cert.color }}>
                View →
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="cert-modal" onClick={() => setSelected(null)}>
          <div className="cert-modal__box" onClick={(e) => e.stopPropagation()}>
            <div className="cert-modal__header">
              <h3>{selected.title}</h3>
              <button className="cert-modal__close" onClick={() => setSelected(null)}>
                <FiX size={22} />
              </button>
            </div>
            <iframe
              src={`${BACKEND_URL}/api/cv/certificates/${selected.file}`}
              title={selected.title}
              className="cert-modal__frame"
            />
          </div>
        </div>
      )}
    </section>
  );
};