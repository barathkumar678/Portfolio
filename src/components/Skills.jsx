import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    name: 'Languages',
    color: 'var(--accent)',
    skills: [
      { name: 'HTML', emoji: '🌐', level: 4 },
      { name: 'CSS', emoji: '🎨', level: 4 },
      { name: 'JavaScript', emoji: '⚡', level: 4 },
      { name: 'Python', emoji: '🐍', level: 3 },
      { name: 'C', emoji: '⚙️', level: 3 },
    ],
  },
  {
    name: 'Frameworks & Libraries',
    color: 'var(--cyan)',
    skills: [
      { name: 'React', emoji: '⚛️', level: 4 },
      { name: 'Angular.js', emoji: '🅰️', level: 3 },
      { name: 'Node.js', emoji: '🟢', level: 3 },
    ],
  },
  {
    name: 'Soft Skills',
    color: 'var(--emerald)',
    skills: [
      { name: 'Communication', emoji: '💬', level: 5 },
      { name: 'Team Work', emoji: '🤝', level: 5 },
      { name: 'Problem Solving', emoji: '🧩', level: 4 },
    ],
  },
  {
    name: 'Tools',
    color: 'var(--amber)',
    skills: [
      { name: 'Git', emoji: '🔀', level: 3 },
      { name: 'MS Word', emoji: '📝', level: 4 },
      { name: 'PowerPoint', emoji: '📊', level: 4 },
      { name: 'Excel', emoji: '📈', level: 3 },
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
