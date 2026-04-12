import React from 'react';
import { FiGithub, FiLinkedin, FiHeart } from 'react-icons/fi';
import './Footer.css';

const navLinks = ['About', 'Skills', 'Projects', 'Timeline', 'Certifications', 'Contact'];

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#hero" className="footer__logo">
            <span className="logo-bracket">&lt;</span>AS<span className="logo-bracket">/&gt;</span>
          </a>
          <p className="footer__tagline">
            Building at the intersection of AI/ML, full-stack web, and blockchain — from Jaipur, Rajasthan.
          </p>
          <div className="footer__socials">
            <a href="https://github.com/abhassachan" target="_blank" rel="noreferrer" aria-label="GitHub" className="footer__social">
              <FiGithub size={18} />
            </a>
            <a href="https://linkedin.com/in/abhassachan" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="footer__social">
              <FiLinkedin size={18} />
            </a>
          </div>
        </div>

        <div className="footer__links">
          <h4 className="footer__links-title">Quick Links</h4>
          <ul>
            {navLinks.map((link) => (
              <li key={link}>
                <button className="footer__link" onClick={() => scrollTo(link)}>
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} Abhas Sachan. All rights reserved.</p>
          <p className="footer__made-with">
            Made with <FiHeart size={13} className="footer__heart" /> using MERN Stack
          </p>
        </div>
      </div>
    </footer>
  );
}
