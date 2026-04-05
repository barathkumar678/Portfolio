const skills = [
  'HTML', 'CSS', 'JavaScript', 'Python', 'C',
  'React', 'Angular.js', 'Node.js',
  'Git', 'Flexbox', 'Grid', 'REST API',
  'MS Office', 'Problem Solving', 'Team Work',
];

export default function Marquee() {
  // Duplicate for seamless loop
  const doubledSkills = [...skills, ...skills];

  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {doubledSkills.map((skill, i) => (
          <div key={i} className="marquee-item">
            <span>✦</span>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
