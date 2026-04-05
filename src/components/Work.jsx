import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const experience = {
  company: 'CODTECH',
  role: 'Fullstack Developer Intern',
  date: 'May 2025 – Jun 2025',
  points: [
    'Developed a responsive weather web app using HTML, CSS, and JavaScript.',
    'Integrated a public Weather API to fetch real-time data.',
    'Parsed JSON and dynamically displayed temperature, humidity, and conditions.',
    'Designed a mobile-friendly layout with CSS Flexbox/Grid.',
  ],
};

const project = {
  tags: [
    { label: 'IoT', className: 'iot' },
    { label: 'Hardware', className: 'hardware' },
  ],
  name: 'Smart Home Automation',
  description:
    'Developed an IoT-based system using ESP32 to remotely monitor and control home appliances via mobile app, integrating sensors for automatic operation and real-time data monitoring.',
  tech: ['ESP32', 'IoT', 'Sensors', 'Mobile App', 'Real-time Data'],
};

const certs = [
  { title: 'Diploma Of Computer Application', period: 'Feb – Aug 2022' },
  { title: 'Shadow Fox — Web Dev Intern', period: 'Aug 2024' },
  { title: 'Codsoft — Web Dev Intern', period: 'Dec 2024 – Jan 2025' },
  { title: 'Codtech — Fullstack Dev Intern', period: 'May – Jun 2025' },
];

export default function Work() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const groups = ref.current.querySelectorAll('.work-group');
      groups.forEach((g) => {
        const items = g.querySelectorAll('.reveal');
        gsap.fromTo(items,
          { y: 40, opacity: 0 },
          {
            scrollTrigger: { trigger: g, start: 'top 80%', toggleActions: 'play none none none' },
            y: 0, opacity: 1, stagger: 0.12, duration: 0.9, ease: 'power3.out',
          }
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  // Mouse glow effect on project card
  const cardRef = useRef(null);
  const handleMouse = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <section ref={ref} className="container work-section" id="work">
      {/* Experience */}
      <div className="work-group">
        <div className="section-label reveal">
          <span className="section-label-dot" /> Experience
        </div>

        <div className="exp-card reveal">
          <div className="exp-header">
            <div className="exp-company-badge">
              <div className="exp-company-dot" />
              <span className="exp-company-name">{experience.company}</span>
            </div>
            <span className="exp-date">{experience.date}</span>
          </div>
          <h3 className="exp-role">{experience.role}</h3>
          <div className="exp-points">
            {experience.points.map((p, i) => (
              <div key={i} className="exp-point">
                <div className="exp-point-marker" />
                <span>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project */}
      <div className="work-group" style={{ marginTop: '4rem' }}>
        <div className="section-label reveal">
          <span className="section-label-dot" /> Featured Project
        </div>

        <div
          ref={cardRef}
          className="project-card reveal"
          onMouseMove={handleMouse}
        >
          <div className="project-tag-row">
            {project.tags.map((t) => (
              <span key={t.label} className={`project-tag ${t.className}`}>{t.label}</span>
            ))}
          </div>
          <h3 className="project-name">{project.name}</h3>
          <p className="project-desc">{project.description}</p>
          <div className="tech-row">
            {project.tech.map((t) => (
              <span key={t} className="tech-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Certificates */}
      <div className="work-group" style={{ marginTop: '4rem' }}>
        <div className="section-label reveal">
          <span className="section-label-dot" /> Certificates
        </div>

        <div className="certs-grid">
          {certs.map((c, i) => (
            <div key={i} className="cert-card reveal">
              <div className="cert-icon-wrap"><Award size={18} /></div>
              <div className="cert-info">
                <div className="cert-name">{c.title}</div>
                <div className="cert-period">{c.period}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
