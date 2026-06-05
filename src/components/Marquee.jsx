const skills = [
  'Python', 'JavaScript', 'HTML', 'CSS', 'C/C++', 'SQL',
  'React', 'Flask', 'Figma', 'Responsive Design',
  'Machine Learning', 'OpenCV', 'TensorFlow',
  'Git', 'VS Code', 'Arduino', 'IoT',
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
