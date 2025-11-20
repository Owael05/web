import { useState } from 'react';
import './App.css';

// Components
import Navbar from './components/Navbar.jsx';
import Banner from './components/Banner.jsx';
import Skillssection from './components/Skillssection.jsx';
import BlackCard from './components/BlackCard.jsx';
import Skillbuttons from './components/Skillbuttons.jsx';
import Coursessection from './components/Coursessection.jsx';
import TrustedCompanies from './components/TrustedCompanies.jsx';

function App() {
  const [search, setSearch] = useState('');

  return (
    <div className="App">
      {/* NAVBAR */}
      <Navbar search={search} setSearch={setSearch} />

      {/* MAIN BANNER */}
      <Banner />

      {/* ESSENTIAL SKILLS SECTION */}
      <Skillssection />

      {/* BLACK CARD SECTION */}
      <BlackCard />

      {/* SKILL BUTTONS */}
      <Skillbuttons />

      {/* COURSES SECTION */}
      <Coursessection />

      {/* TRUSTED COMPANIES */}
      <TrustedCompanies />
    </div>
  );
}

export default App;
