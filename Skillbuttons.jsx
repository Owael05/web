

export default function SkillButtons() {
  const buttons = [
    "Artificial intelligence (AI)",
    "Python",
    "Microsoft Excel",
    "AI Agents & agentic AI",
    "Digital Marketing",
    "Amazon AWS"
  ];

  return (
    <section>
      <div className="skills">
        <h2>Skills to transform your career and life</h2>
        <p>From critical skills to technical topics, Udemy supports your professional development.</p>
      </div>
      <div className="buttons">
        {buttons.map((btn) => <button key={btn}>{btn}</button>)}
      </div>
      <div style={{ height: "1px", backgroundColor: "#00000067", width: "15%", margin: "0px 35px", marginBottom:"20px" }}></div>
    </section>
  );
}
