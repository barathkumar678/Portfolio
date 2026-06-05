import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    name: 'Programming Languages',
    color: 'var(--accent)',
    skills: [
      { name: 'Python', emoji: '🐍', level: 4 },
      { name: 'JavaScript', emoji: '⚡', level: 4 },
      { name: 'HTML', emoji: '🌐', level: 5 },
      { name: 'CSS', emoji: '🎨', level: 5 },
      { name: 'C/C++', emoji: '⚙️', level: 3 },
      { name: 'SQL', emoji: '🗃️', level: 3 },
    ],
  },
  {
    name: 'Web & UI',
    color: 'var(--cyan)',
    skills: [
      { name: 'React', emoji: '⚛️', level: 4 },
      { name: 'Front-End Dev', emoji: '💻', level: 4 },
      { name: 'Responsive Design', emoji: '📱', level: 4 },
      { name: 'Figma', emoji: '🎯', level: 3 },
    ],
  },
  {
    name: 'AI & Computer Vision',
    color: 'var(--emerald)',
    skills: [
      { name: 'Machine Learning', emoji: '🤖', level: 3 },
      { name: 'OpenCV', emoji: '👁️', level: 3 },
      { name: 'Image Processing', emoji: '🖼️', level: 3 },
    ],
  },
  {
    name: 'IoT & Tools',
    color: 'var(--amber)',
    skills: [
      { name: 'Arduino', emoji: '🔌', level: 3 },
      { name: 'Sensor Integration', emoji: '📡', level: 3 },
      { name: 'Git', emoji: '🔀', level: 4 },
      { name: 'VS Code', emoji: '📝', level: 4 },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const groups = ref.current.querySelectorAll('.skills-category');
      groups.forEach((g) => {
        const chips = g.querySelectorAll('.skill-chip');
        gsap.fromTo(chips,
          { y: 20, opacity: 0 },
          {
            scrollTrigger: { trigger: g, start: 'top 85%', toggleActions: 'play none none none' },
            y: 0, opacity: 1, stagger: 0.06, duration: 0.6, ease: 'power3.out',
          }
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="container skills-section" id="skills">
      <div className="section-label">
        <span className="section-label-dot" /> Skills & Tools
      </div>

      {categories.map((cat) => (
        <div key={cat.name} className="skills-category">
          <div className="skills-category-header">
            <div className="skills-category-dot" style={{ background: cat.color }} />
            <span className="skills-category-name">{cat.name}</span>
            <div className="skills-category-line" />
          </div>
          <div className="skills-row">
            {cat.skills.map((s) => (
              <div key={s.name} className="skill-chip">
                <span className="skill-emoji">{s.emoji}</span>
                {s.name}
                <div className="skill-level">
                  {[1,2,3,4,5].map((i) => (
                    <div key={i} className={`level-dot ${i <= s.level ? 'active' : ''}`} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
