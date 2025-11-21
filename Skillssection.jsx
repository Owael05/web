

export default function SkillsSection() {
  const skills = [
    { name: "Generative AI", img: "https://cms-images.udemycdn.com/96883mtakkm8/9Gj6y7OdRKhBmHkgJ9lWV/4589dcd6feb8009798924f70f515b731/generative-ai.png" },
    { name: "IT Certificates", img: "https://cms-images.udemycdn.com/96883mtakkm8/5Pyb4XbnD2CBt6TgiSBB8v/26f6893300dadc86519907b854b430de/certifications.png" },
    { name: "Data Science", img: "https://cms-images.udemycdn.com/96883mtakkm8/6QeCzvTvnqKN6tI18U0Wmg/cebc19b24d374ec1cab549a9c7a93020/data-science.png" }
  ];

  return (
    <section className="skills-section">
      <div className="skills-left">
        <h2>Learn essential career and life skills</h2>
        <p>
          Udemy helps you build in-demand skills fast and advance your career in a changing job market.
        </p>
      </div>

      {skills.map((skill) => (
        <div className="skills-card" key={skill.name}>
          <div className="card-image">
            <img src={skill.img} alt={skill.name} />
          </div>
          <div className="card-label">
            <span>{skill.name}</span>
            <span className="arrow">→</span>
          </div>
        </div>
      ))}
    </section>
  );
}
