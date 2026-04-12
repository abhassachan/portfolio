import React from 'react';
import { FiBook, FiBriefcase } from 'react-icons/fi';
import './Timeline.css';

const timelineItems = [
  {
    type: 'work',
    icon: <FiBriefcase />,
    title: 'AI/ML Intern',
    org: 'LUSIP, LNMIIT Jaipur',
    period: 'May 2025 – July 2025',
    desc: 'Developed a real-time exercise recognition system using deep learning and MediaPipe pose estimation, achieving ~98% classification accuracy on live webcam data. Designed end-to-end pose estimation pipeline and optimized the model for low-latency edge deployment on Raspberry Pi.',
  },
  {
    type: 'education',
    icon: <FiBook />,
    title: 'B.Tech — Computer Science & Engineering',
    org: 'JK Lakshmipat University, Jaipur',
    period: '2023 – 2027',
    desc: 'Pursuing B.Tech in Computer Science with CGPA 7.29. Core coursework includes DSA, OOP, DBMS, Operating Systems, and Computer Networks. Actively building projects in AI/ML, full-stack web, and blockchain.',
  },
  {
    type: 'education',
    icon: <FiBook />,
    title: 'Class XII — CBSE Board',
    org: 'Subodh Public School, Jaipur',
    period: '2021 – 2023',
    desc: 'Completed 12th with 71% marks. Developed foundational programming skills and interest in computer science during this period.',
  },
  {
    type: 'education',
    icon: <FiBook />,
    title: 'Class X — CBSE Board',
    org: 'Subodh Public School, Jaipur',
    period: '2019 – 2021',
    desc: 'Completed 10th with 83% marks.',
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="section timeline">
      <div className="container">
        <div data-aos="fade-up">
          <span className="section-label">Journey</span>
          <h2 className="section-title">Education & Experience</h2>
          <p className="section-subtitle">
            My academic path and professional experiences that shaped my skills as a developer.
          </p>
        </div>

        <div className="timeline__track">
          {timelineItems.map((item, i) => (
            <div
              key={i}
              className={`timeline__item timeline__item--${item.type}`}
              data-aos={i % 2 === 0 ? 'fade-right' : 'fade-left'}
              data-aos-delay={i * 100}
            >
              <div className="timeline__connector">
                <div className="timeline__icon">{item.icon}</div>
                {i < timelineItems.length - 1 && <div className="timeline__line" />}
              </div>
              <div className="timeline__card">
                <div className="timeline__card-header">
                  <span className={`timeline__type-badge timeline__type-badge--${item.type}`}>
                    {item.type === 'education' ? 'Education' : 'Experience'}
                  </span>
                  <span className="timeline__period">{item.period}</span>
                </div>
                <h3 className="timeline__title">{item.title}</h3>
                <p className="timeline__org">{item.org}</p>
                <p className="timeline__desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
