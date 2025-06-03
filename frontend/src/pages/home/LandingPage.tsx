import '../../defaultNavLink.css'
import './landingPage.css'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getHeaderAuthStyle } from '../../utils/helperStyles'

const LandingPage = () => {

  const [hoveredButton, setHoveredButton] = useState<'signup' | 'login' | null>(null);

  return (
    <>
      <nav>
        <div className="headerContainer">
          <div className="headerLogo">
            <div className="nav">
              <h2>
                Mirthaud
              </h2>
            </div>
            <div className="nav">
              Home
            </div>
            <div className="nav">
              About
            </div>
            <div className="nav">
              Contact Us
            </div>
          </div>
          <div className="authButtons">
            <NavLink className='nav-link' to='/signup'>
              <div
                style={getHeaderAuthStyle(hoveredButton === 'signup')}
                onMouseEnter={() => setHoveredButton('signup')}
                onMouseLeave={() => setHoveredButton(null)}
              >
                Sign Up
              </div>
            </NavLink>
            <NavLink className='nav-link' to='/login'>
              <div
                style={getHeaderAuthStyle(hoveredButton === 'login')}
                onMouseEnter={() => setHoveredButton('login')}
                onMouseLeave={() => setHoveredButton(null)}
              >
                Login
              </div>
            </NavLink>
          </div>
        </div>
      </nav>
      <main className="main">
        <section className="mainSection">
          <div>
            <h1 className="mainSectionH1">
              Effortless Networking and Career Growth
            </h1>
            <p className="mainSectionP">
              Transform how you connect, hire, and grow — get tailored professional insights to unlock opportunity and build your future.
            </p>
          </div>
        </section>
        <section className="bodySection">
          <div>
            <h2 className="bodySectionH2">
              All the tools you need to grow your network and advance your career.
            </h2>
            <p className="bodySectionP">
              From job discovery to company insights, Mirthaud gives professionals and recruiters the power to connect, evaluate, and succeed — all in one trusted platform.
            </p>
            <NavLink to='/signup' className='nav-link'>
              <button className="getStartedButton">
                Get Started With Mirthaud
              </button>
            </NavLink>
          </div>
        </section>
        <section>
          <div className="sectionTail">
            <div className="sectionTailDiv">
              <h3 className="sectionTailH3">
                Discover Opportunities Instantly
              </h3>
              <p className="sectionTailP">
                See job listings tailored to your skills and goals.
              </p>
              <p className="sectionTailSecondP">
                Get matched with roles and companies that align with your experience. No more endless searching — let AI bring the opportunities to you.
              </p>
            </div>
            <div className="sectionTailDiv">
              <h3 className="sectionTailH3">
                Insights That Move Your Career Forward
              </h3>
              <p className="sectionTailP">
                Stay informed with personalized industry updates.
              </p>
              <p className="sectionTailSecondP">
                From salary trends to company news, LinkedIn filters the noise and brings you the insights that matter most to your career path.
              </p>
            </div>
            <div className="sectionTailDiv">
              <h3 className="sectionTailH3">
                Build Credibility and Make Smarter Connections
              </h3>
              <p className="sectionTailP">
                Let your profile speak for you.
              </p>
              <p className="sectionTailSecondP">
                Showcase your skills, endorsements, and accomplishments — and connect with professionals who value what you bring to the table.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <section className="footerSection">
          <div className="footerLogo">N8C</div>
          <section className="footerSection">
            <div className="footerSectionDiv">About</div>
            <div className="footerSectionDiv">Contact</div>
            <div className="footerSectionDiv">Terms and Conditions</div>
          </section>
        </section>
      </footer>
    </>
  )
}

export default LandingPage