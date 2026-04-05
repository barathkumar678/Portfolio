import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MapPin, Briefcase, GraduationCap, Mail } from 'lucide-react';

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.fromTo('.hero-status', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.2 })
        .fromTo('.hero-greeting', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
        .fromTo('.hero-name', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.2 }, '-=0.5')
        .fromTo('.hero-title', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.7')
        .fromTo('.hero-desc', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
        .fromTo('.hero-actions', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.4')
        .fromTo('.hero-info-card', { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 1 }, '-=0.8');
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="hero" id="home">
      {/* Background glows */}
      <div className="hero-glow" style={{ width: 500, height: 500, background: 'var(--accent)', top: '5%', left: '-10%', opacity: 0.06 }} />
      <div className="hero-glow" style={{ width: 400, height: 400, background: 'var(--cyan)', bottom: '10%', right: '-5%', opacity: 0.04 }} />

      <div className="container hero-content">
        {/* Left – Text */}
        <div className="hero-text">
          <div className="hero-status">
            <div className="status-dot"><div className="status-dot-inner" /></div>
            Available for opportunities
          </div>

          <span className="hero-greeting">Hi, I'm</span>

          <h1 className="hero-name">
            Barath Kumar <span className="gradient-text">P</span>
          </h1>

          <p className="hero-title">Frontend Developer</p>

          <p className="hero-desc">
            Crafting responsive, intuitive, and visually appealing web experiences.
            Passionate about blending technical expertise with creative design.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn-glow primary magnetic" data-hover="Contact">
              <Mail size={16} />
              Get in Touch
            </a>
            <a href="#work" className="btn-glow secondary magnetic" data-hover="Work">
              <Briefcase size={16} />
              View Work
            </a>
          </div>
        </div>

        {/* Right – Info Card */}
        <div className="hero-info-card">
          <div className="info-row">
            <div className="info-icon purple"><GraduationCap size={18} /></div>
            <div>
              <div className="info-text-label">Education</div>
              <div className="info-text-value">B.E. Computer Science</div>
            </div>
          </div>
          <div className="info-row">
            <div className="info-icon cyan"><MapPin size={18} /></div>
            <div>
              <div className="info-text-label">Location</div>
              <div className="info-text-value">Madurai, Tamilnadu</div>
            </div>
          </div>
          <div className="info-row">
            <div className="info-icon emerald"><Briefcase size={18} /></div>
            <div>
              <div className="info-text-label">Experience</div>
              <div className="info-text-value">Fullstack Dev Intern — Codtech</div>
            </div>
          </div>
          <div className="info-row">
            <div className="info-icon amber"><Mail size={18} /></div>
            <div>
              <div className="info-text-label">Email</div>
              <div className="info-text-value">barathkumarpandi@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
