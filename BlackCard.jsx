import blackImage from "../assets/Black.webp";


export default function BlackCardSection() {
  return (
    <section className="skills-section">
      <div className="Black-card">
        <div className="black-text">
          <h2>Reimagine your career in the AI era</h2>
          <p>Future-proof your skills with Personal Plan. Get access to a variety of fresh content from real-world experts.</p>
          <ul>
            <li>Learn AI and more</li>
            <li>Prep for a certification</li>
            <li>Practice with AI coaching</li>
            <li>Advance your career</li>
          </ul>
          <button className='B1'>Learn More</button>
          <h3 className="price">Starting at E£204.00/month</h3>
        </div>
        <div className="card-image1">
          <img src={blackImage} alt="Black Card" />
        </div>
      </div>
    </section>
  );
}
