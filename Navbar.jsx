import { useState } from "react";


export default function Navbar() {
  const [search, setSearch] = useState("");

  return (
    <nav className="navbar">
      <a className="navbar-brand" href="#">
        <img
          src="https://frontends.udemycdn.com/frontends-homepage/staticx/udemy/images/v7/logo-udemy.svg"
          alt="Udemy Logo"
        />
      </a>

      <a className="navbar-link" href="#">Explore</a>

      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search for anything"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <ul className="navbar-nav">
        <li><a href="#">Plans & Pricing</a></li>
        <li className="nav-item-popup">
          <a href="#">Udemy Business</a>
          <div className="popup-content">
            <p>Get your team access to over 30,000 top Udemy courses, anytime, anywhere.</p>
            <button>Try Udemy Business</button>
          </div>
        </li>
        <li><a href="#">Teach On Udemy</a></li>
        <li><button>Log In</button></li>
        <li><button>Sign Up</button></li>
      </ul>
    </nav>
  );
}
