import bannerImg from "../assets/banner.png";


export default function Banner() {
  return (
    <main className="main-image-container">
      <img src={bannerImg} alt="Main Banner" className="main-image" />
      <div className="overlay-box">
        <h1>Jump into learning — for less</h1>
        <p>
          If you’re new to Udemy, we’ve got good news: For a limited time, courses start at just E£259.99 for new learners!
        </p>
        <button>Sign Up Now</button>
      </div>
    </main>
  );
}
