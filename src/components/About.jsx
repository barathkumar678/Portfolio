import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.bento-card',
        { y: 40, opacity: 0 },
        {
          scrollTrigger: { trigger: ref.current, start: 'top 80%', toggleActions: 'play none none none' },
          y: 0, opacity: 1, stagger: 0.1, duration: 0.9, ease: 'power3.out',
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="container about-section" id="about">
      <div className="section-label">
        <span className="section-label-dot" /> About Me
      </div>

      <div className="bento-grid">
        {/* Bio – full width */}
        <div className="bento-card bento-bio">
          <div className="bento-card-label"><span className="dot purple" /> Profile</div>
          <p className="bento-bio-text">
            Motivated <strong>Frontend Developer</strong> with a strong foundation
            in HTML, CSS, JavaScript, Python, and C. Skilled in implementing{' '}
            <strong>UI/UX design principles</strong> to create responsive, intuitive,
            and visually appealing websites. Passionate about blending technical
            expertise with creative design for optimal user experiences. Quick learner,
            adaptable, and committed to delivering clean, efficient, and maintainable code.
          </p>
        </div>

        {/* Education 1 */}
        <div className="bento-card bento-edu">
          <div className="bento-card-label"><span className="dot cyan" /> Education</div>
          <div className="bento-value">Bachelor of Engineering (CSE)</div>
          <div className="bento-sub">Adithya Institute Of Technology</div>
          <div className="bento-detail-row">
            <MapPin size={12} /> Coimbatore
            <span style={{ margin: '0 6px', color: 'var(--text-muted)' }}>·</span>
            <Calendar size={12} /> 2022 – Present
          </div>
        </div>

        {/* Education 2 */}
        <div className="bento-card bento-edu2">
          <div className="bento-card-label"><span className="dot cyan" /> Higher Secondary</div>
          <div className="bento-value">Higher Secondary Education</div>
          <div className="bento-sub">Kshatriya Vidhya Sala HSS</div>
          <div className="bento-detail-row">
            <MapPin size={12} /> Virudhunagar
            <span style={{ margin: '0 6px', color: 'var(--text-muted)' }}>·</span>
            <Calendar size={12} /> 2020 – 2022
          </div>
        </div>

        {/* Location */}
        <div className="bento-card bento-location">
          <div className="bento-card-label"><span className="dot emerald" /> Location</div>
          <div className="bento-value" style={{ fontSize: '1.3rem' }}>📍 Madurai</div>
          <div className="bento-sub">Tamilnadu, India</div>
        </div>

        {/* Languages */}
        <div className="bento-card bento-languages">
          <div className="bento-card-label"><span className="dot amber" /> Languages</div>
          <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
            {['Tamil', 'English'].map((lang) => (
              <span key={lang} style={{
                padding: '8px 18px',
                borderRadius: '50px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid var(--border)',
                fontSize: '13px',
                fontWeight: 500,
              }}>{lang}</span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bento-card bento-stats">
          <div className="stats-mini">
            <div className="stat-mini-item">
              <div className="stat-mini-number">4+</div>
              <div className="stat-mini-label">Certs</div>
            </div>
            <div className="stat-mini-item">
              <div className="stat-mini-number">5+</div>
              <div className="stat-mini-label">Tech</div>
            </div>
            <div className="stat-mini-item">
              <div className="stat-mini-number">1+</div>
              <div className="stat-mini-label">Intern</div>
            </div>
            <div className="stat-mini-item">
              <div className="stat-mini-number">2</div>
              <div className="stat-mini-label">Languages</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
