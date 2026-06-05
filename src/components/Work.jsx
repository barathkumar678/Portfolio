import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: 'CODTECH',
    role: 'Fullstack Developer Intern',
    date: 'May 2025 – Jun 2025',
    points: [
      'Developed a responsive weather forecast application using HTML, CSS, JavaScript, and the OpenWeatherMap API for real-time weather updates.',
      'Implemented dynamic weather details, error handling, interactive UI, and a mobile-friendly design for enhanced user experience.',
    ],
  },
  {
    company: 'SHADOW FOX',
    role: 'Web Development Intern',
    date: 'Aug 2024',
    points: [
      'Designed and developed a responsive personal portfolio website using HTML, CSS, and JavaScript to showcase projects and skills.',
      'Implemented interactive UI, smooth navigation, animations, and optimized performance for a seamless cross-browser experience.',
    ],
  },
];

const projects = [
  {
    tags: [
      { label: 'AI', className: 'ai' },
      { label: 'Health', className: 'health' },
    ],
    name: 'FoodMed AI',
    subtitle: 'AI-Based Food Recognition & Health Recommendation System',
    description:
      'An AI-powered food recognition web application using TensorFlow and CNN for nutrition and calorie analysis. Features BMI tracking and personalized health recommendations built with Flask, Python, HTML, CSS, and JavaScript.',
    tech: ['TensorFlow', 'CNN', 'Flask', 'Python', 'HTML/CSS', 'JavaScript'],
  },
  {
    tags: [
      { label: 'Engineering', className: 'engineering' },
      { label: 'Full-Stack', className: 'fullstack' },
    ],
    name: 'Engirate',
    subtitle: 'Smart Engineering Cost Estimation System',
    description:
      'A web-based platform for automating civil project cost estimation, including material and labor cost calculations. Improved estimation accuracy and reduced manual effort through cost analysis, report generation, and a user-friendly full-stack application.',
    tech: ['Web App', 'Cost Analysis', 'Report Generation', 'Full-Stack'],
  },
  {
    tags: [
      { label: 'IoT', className: 'iot' },
      { label: 'Hardware', className: 'hardware' },
    ],
    name: 'Smart Home Automation',
    subtitle: 'Smart Home Automation using IoT',
    description:
      'An IoT-based home automation system using ESP32 for remote appliance control via a mobile app. Integrated temperature, motion, and light sensors for automated device operation and real-time Wi-Fi monitoring.',
    tech: ['ESP32', 'IoT', 'Sensors', 'Mobile App', 'Real-time Data'],
  },
];

const certs = [
  { title: 'Diploma Of Computer Application', period: 'Feb 2022 – Aug 2022' },
  { title: 'Shadow Fox — Web Dev Intern', period: 'Aug 2024 – Aug 2024' },
  { title: 'Codsoft — Web Dev Intern', period: 'Dec 2024 – Jan 2025' },
  { title: 'Codtech — Fullstack Dev Intern', period: 'May 2025 – Jun 2025' },
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
  const cardRefs = useRef([]);
  const handleMouse = (idx) => (e) => {
    const el = cardRefs.current[idx];
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <section ref={ref} className="container work-section" id="work">
      {/* Experience */}
      <div className="work-group">
        <div className="section-label reveal">
          <span className="section-label-dot" /> Experience
        </div>

        <div className="exp-cards-stack">
          {experiences.map((exp, idx) => (
            <div key={idx} className="exp-card reveal">
              <div className="exp-header">
                <div className="exp-company-badge">
                  <div className="exp-company-dot" />
                  <span className="exp-company-name">{exp.company}</span>
                </div>
                <span className="exp-date">{exp.date}</span>
              </div>
              <h3 className="exp-role">{exp.role}</h3>
              <div className="exp-points">
                {exp.points.map((p, i) => (
                  <div key={i} className="exp-point">
                    <div className="exp-point-marker" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="work-group" style={{ marginTop: '4rem' }}>
        <div className="section-label reveal">
          <span className="section-label-dot" /> Featured Projects
        </div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div
              key={idx}
              ref={(el) => (cardRefs.current[idx] = el)}
              className="project-card reveal"
              onMouseMove={handleMouse(idx)}
            >
              <div className="project-tag-row">
                {project.tags.map((t) => (
                  <span key={t.label} className={`project-tag ${t.className}`}>{t.label}</span>
                ))}
              </div>
              <h3 className="project-name">{project.name}</h3>
              {project.subtitle && (
                <p className="project-subtitle">{project.subtitle}</p>
              )}
              <p className="project-desc">{project.description}</p>
              <div className="tech-row">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
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
