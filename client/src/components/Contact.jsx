import React, { useState } from 'react';
import axios from 'axios';
import { FiSend, FiMail, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';
import './Contact.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';

const initialForm = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: 'error', message: 'Please fill in all fields.' });
      return;
    }
    setLoading(true);
    setStatus({ type: '', message: '' });
    try {
      const res = await axios.post(`${BACKEND_URL}/api/contact`, form);
      if (res.data.success) {
        setStatus({ type: 'success', message: res.data.message });
        setForm(initialForm);
      }
    } catch (err) {
      const msg = err.response?.data?.message || 'Something went wrong. Please try again.';
      setStatus({ type: 'error', message: msg });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div data-aos="fade-up">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">
            Have a project in mind or want to discuss an opportunity? Drop me a message — I'd love to connect.
          </p>
        </div>

        <div className="contact__inner">
          {/* Info Panel */}
          <div className="contact__info" data-aos="fade-right" data-aos-delay="100">
            <div className="contact__info-card">
              <h3 className="contact__info-heading">Contact Info</h3>

              <div className="contact__info-item">
                <span className="contact__info-icon"><FiMail /></span>
                <div>
                  <span className="contact__info-label">Email</span>
                  <a href="mailto:abhassachan@gmail.com" className="contact__info-value">
                    abhassachan@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact__info-item">
                <span className="contact__info-icon"><FiMapPin /></span>
                <div>
                  <span className="contact__info-label">Location</span>
                  <span className="contact__info-value">Jaipur, Rajasthan, India</span>
                </div>
              </div>

              <div className="contact__socials">
                <a href="https://github.com/abhassachan" target="_blank" rel="noreferrer" className="contact__social-link">
                  <FiGithub size={18} />
                  <span>github.com/abhassachan</span>
                </a>
                <a href="https://linkedin.com/in/abhassachan" target="_blank" rel="noreferrer" className="contact__social-link">
                  <FiLinkedin size={18} />
                  <span>linkedin.com/in/abhassachan</span>
                </a>
              </div>

              <div className="contact__availability">
                <span className="contact__avail-dot" />
                <span>Available for Python & GenAI / Full-Stack roles</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact__form-wrap" data-aos="fade-left" data-aos-delay="150">
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder="Raj Kumar"
                  value={form.name}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="raj@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-input form-textarea"
                  placeholder="Hi Abhas, I'd like to discuss a project opportunity..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  disabled={loading}
                />
              </div>

              {status.message && (
                <div className={`form-status form-status--${status.type}`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary contact__submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
