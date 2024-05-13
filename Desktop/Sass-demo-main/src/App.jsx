import React from 'react';
import "./pages/_App.scss";
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className='main-container'>
      <div className="nav-container">
        <nav>
          <div className="site-icon">
            {/* <img src="/slack-logo.png" alt="logo" /> */}
            <h2> Sass </h2>
          </div>
          <ul>
            <li>Home</li>
            <Link to='/About-us'><li>About us</li></Link>
            <li>Contact us</li>
          </ul>
          <button className='blue-theme'> Sign up </button>
        </nav>
      </div>
      <div className="hero-container">
          <div className="side-nav-container blue-theme">
            <div className="side-nav">
              <img src="/user.png" alt="user" />
              <img src="/message.png" alt="message" />
              <img src="/phone.png" alt="phone" />
              <img src="/more.png" alt="more" />
            </div>
          </div>
          <div className="hero-title-container">
            <h1> Work Easier with <span className='blue-theme'>Sass</span> </h1>
            <h3> The best pre-proccessor for css </h3>
            <Link to='https://sass-lang.com/'><button className='blue-theme'> Learn More... </button></Link>
          </div>
        </div>
    </div>
  )
}

export default App
